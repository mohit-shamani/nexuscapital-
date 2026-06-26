import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A digital asset network: a field of small glowing nodes drifting in 3D space,
 * connected by thin lines to their nearby neighbours. Links fade with distance
 * so the web breathes rather than clutters. Mostly electric blue with a few gold
 * accent nodes; a handful of nodes softly pulse to suggest live activity. The
 * whole field rotates very slowly and reacts gently to the cursor. Premium and
 * quiet — never flashy.
 */
export default function ParticleNetwork({ pointer }) {
  const group = useRef(null);
  const pointsMat = useRef(null);
  const lineMat = useRef(null);
  const lineGeo = useRef(null);
  const pointGeo = useRef(null);

  // Brand palette.
  const C_BLUE = useMemo(() => new THREE.Color('#0072CE'), []);
  const C_GOLD = useMemo(() => new THREE.Color('#C8972A'), []);

  const COUNT = 104;
  const BOUND_XY = 2.35; // half-extent of the field in x/y
  const BOUND_Z = 1.55; // shallower in depth so it reads as a layer, not a cloud
  const CONNECT = 1.15; // max distance a link can span
  const CONNECT2 = CONNECT * CONNECT;
  const MAX_SEG = COUNT * 9; // generous cap on simultaneous links
  const HOVER_R = 1.05; // radius of cursor influence
  const DRAW_SIZE = 8.5; // tunes on-screen node size for the camera distance

  // Per-node simulation state + visual attributes. Positions drift; the render
  // buffer adds a transient cursor repulsion each frame so nodes ease back.
  const data = useMemo(() => {
    const sim = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);
    const color = new Float32Array(COUNT * 3);
    const size = new Float32Array(COUNT);
    const phase = new Float32Array(COUNT);
    const pulse = new Float32Array(COUNT);
    const isGold = new Uint8Array(COUNT);

    for (let i = 0; i < COUNT; i += 1) {
      sim[i * 3] = (Math.random() * 2 - 1) * BOUND_XY;
      sim[i * 3 + 1] = (Math.random() * 2 - 1) * BOUND_XY;
      sim[i * 3 + 2] = (Math.random() * 2 - 1) * BOUND_Z;

      // Very slow, gentle drift in random directions.
      vel[i * 3] = (Math.random() * 2 - 1) * 0.018;
      vel[i * 3 + 1] = (Math.random() * 2 - 1) * 0.018;
      vel[i * 3 + 2] = (Math.random() * 2 - 1) * 0.012;

      // ~1 in 8 nodes are gold accents; the rest electric blue.
      const gold = i % 8 === 3;
      isGold[i] = gold ? 1 : 0;
      const c = gold ? C_GOLD : C_BLUE;
      color[i * 3] = c.r;
      color[i * 3 + 1] = c.g;
      color[i * 3 + 2] = c.b;

      size[i] = gold ? 4.6 : 3.4;
      phase[i] = Math.random() * Math.PI * 2;
      // A select few nodes pulse (all gold + a sprinkling of blue).
      pulse[i] = gold || i % 11 === 0 ? 0.85 : 0.0;
    }

    return {
      sim,
      vel,
      color,
      size,
      phase,
      pulse,
      isGold,
      render: new Float32Array(COUNT * 3),
      linePos: new Float32Array(MAX_SEG * 2 * 3),
      lineCol: new Float32Array(MAX_SEG * 2 * 3),
      lineAlpha: new Float32Array(MAX_SEG * 2),
    };
  }, [C_BLUE, C_GOLD]);

  // Round, softly glowing nodes with per-node pulse driven on the GPU.
  const pointMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uPixel: { value: 1 },
          uSize: { value: DRAW_SIZE },
        },
        vertexShader: /* glsl */ `
          uniform float uTime;
          uniform float uPixel;
          uniform float uSize;
          attribute vec3 aColor;
          attribute float aSize;
          attribute float aPhase;
          attribute float aPulse;
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            vColor = aColor;
            float p = sin(uTime * 1.3 + aPhase) * 0.5 + 0.5;
            float scale = 1.0 + aPulse * p * 0.7;
            vAlpha = 0.55 + aPulse * p * 0.45;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * scale * uPixel * (uSize / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            float core = smoothstep(0.5, 0.0, d);
            float glow = pow(core, 1.8);
            gl_FragColor = vec4(vColor, glow * vAlpha);
          }
        `,
      }),
    []
  );

  // Thin connection lines with per-vertex colour + alpha so links fade by
  // distance (and brighten near the cursor).
  const lineMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        vertexShader: /* glsl */ `
          attribute vec3 aColor;
          attribute float aAlpha;
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            vColor = aColor;
            vAlpha = aAlpha;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            gl_FragColor = vec4(vColor, vAlpha);
          }
        `,
      }),
    []
  );

  const _pointerLocal = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    const dt = Math.min(delta, 0.05); // clamp so a stalled tab can't lurch
    const t = state.clock.elapsedTime;

    // Slow whole-field rotation + a faint nod, so it feels alive but settled.
    group.current.rotation.y += dt * 0.025;
    group.current.rotation.x = Math.sin(t * 0.15) * 0.06;

    // Cursor → field-local space, so repulsion follows the rotated web.
    const px = pointer?.current?.x ?? 0;
    const py = pointer?.current?.y ?? 0;
    _pointerLocal.set(px * BOUND_XY, -py * BOUND_XY, 0);
    group.current.worldToLocal(_pointerLocal);

    const { sim, vel, render, color, isGold } = data;

    // Advance the drift simulation and bounce softly off the field bounds.
    for (let i = 0; i < COUNT; i += 1) {
      const ix = i * 3;
      const iy = ix + 1;
      const iz = ix + 2;

      sim[ix] += vel[ix] * dt;
      sim[iy] += vel[iy] * dt;
      sim[iz] += vel[iz] * dt;

      if (sim[ix] < -BOUND_XY || sim[ix] > BOUND_XY) vel[ix] *= -1;
      if (sim[iy] < -BOUND_XY || sim[iy] > BOUND_XY) vel[iy] *= -1;
      if (sim[iz] < -BOUND_Z || sim[iz] > BOUND_Z) vel[iz] *= -1;

      // Transient cursor repulsion — recomputed each frame so nodes ease home.
      let rx = sim[ix];
      let ry = sim[iy];
      let rz = sim[iz];
      const dx = sim[ix] - _pointerLocal.x;
      const dy = sim[iy] - _pointerLocal.y;
      const dz = sim[iz] - _pointerLocal.z;
      const dSq = dx * dx + dy * dy + dz * dz;
      if (dSq < HOVER_R * HOVER_R) {
        const dist = Math.sqrt(dSq) || 0.0001;
        const force = (1 - dist / HOVER_R) * 0.32;
        rx += (dx / dist) * force;
        ry += (dy / dist) * force;
        rz += (dz / dist) * force;
      }
      render[ix] = rx;
      render[iy] = ry;
      render[iz] = rz;
    }

    // Rebuild connection lines from the rendered (repelled) positions.
    const { linePos, lineCol, lineAlpha } = data;
    let seg = 0;
    for (let i = 0; i < COUNT && seg < MAX_SEG; i += 1) {
      const ax = render[i * 3];
      const ay = render[i * 3 + 1];
      const az = render[i * 3 + 2];
      for (let j = i + 1; j < COUNT && seg < MAX_SEG; j += 1) {
        const bx = render[j * 3];
        const by = render[j * 3 + 1];
        const bz = render[j * 3 + 2];
        const dx = ax - bx;
        const dy = ay - by;
        const dz = az - bz;
        const dSq = dx * dx + dy * dy + dz * dz;
        if (dSq > CONNECT2) continue;

        const dist = Math.sqrt(dSq);
        let alpha = (1 - dist / CONNECT) * 0.22; // fade with distance

        // Brighten links whose midpoint sits near the cursor.
        const mx = (ax + bx) * 0.5 - _pointerLocal.x;
        const my = (ay + by) * 0.5 - _pointerLocal.y;
        const mz = (az + bz) * 0.5 - _pointerLocal.z;
        const mDist = Math.sqrt(mx * mx + my * my + mz * mz);
        if (mDist < HOVER_R) alpha += (1 - mDist / HOVER_R) * 0.28;

        // Gold if either endpoint is a gold accent node, else electric blue.
        const gold = isGold[i] || isGold[j];
        const cr = gold ? C_GOLD.r : C_BLUE.r;
        const cg = gold ? C_GOLD.g : C_BLUE.g;
        const cb = gold ? C_GOLD.b : C_BLUE.b;

        const v = seg * 6;
        linePos[v] = ax; linePos[v + 1] = ay; linePos[v + 2] = az;
        linePos[v + 3] = bx; linePos[v + 4] = by; linePos[v + 5] = bz;
        lineCol[v] = cr; lineCol[v + 1] = cg; lineCol[v + 2] = cb;
        lineCol[v + 3] = cr; lineCol[v + 4] = cg; lineCol[v + 5] = cb;
        lineAlpha[seg * 2] = alpha;
        lineAlpha[seg * 2 + 1] = alpha;
        seg += 1;
      }
    }

    // Push the fresh frame to the GPU.
    if (pointGeo.current) {
      const pos = pointGeo.current.getAttribute('position');
      pos.copyArray(render);
      pos.needsUpdate = true;
    }
    if (lineGeo.current) {
      lineGeo.current.setDrawRange(0, seg * 2);
      lineGeo.current.getAttribute('position').needsUpdate = true;
      lineGeo.current.getAttribute('aColor').needsUpdate = true;
      lineGeo.current.getAttribute('aAlpha').needsUpdate = true;
    }
    if (pointsMat.current) {
      pointsMat.current.uniforms.uTime.value = t;
      pointsMat.current.uniforms.uPixel.value = state.gl.getPixelRatio();
    }
  });

  return (
    <group ref={group}>
      {/* Connection web */}
      <lineSegments>
        <bufferGeometry ref={lineGeo}>
          <bufferAttribute
            attach="attributes-position"
            args={[data.linePos, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-aColor"
            args={[data.lineCol, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-aAlpha"
            args={[data.lineAlpha, 1]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <primitive object={lineMaterial} ref={lineMat} attach="material" />
      </lineSegments>

      {/* Glowing nodes */}
      <points>
        <bufferGeometry ref={pointGeo}>
          <bufferAttribute
            attach="attributes-position"
            args={[data.render, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute attach="attributes-aColor" args={[data.color, 3]} />
          <bufferAttribute attach="attributes-aSize" args={[data.size, 1]} />
          <bufferAttribute attach="attributes-aPhase" args={[data.phase, 1]} />
          <bufferAttribute attach="attributes-aPulse" args={[data.pulse, 1]} />
        </bufferGeometry>
        <primitive object={pointMaterial} ref={pointsMat} attach="material" />
      </points>
    </group>
  );
}
