import { cn } from '../../lib/utils.js';

/**
 * Bespoke per-category artwork for insight cards.
 * Pure SVG line-work in the brass-on-ink palette — no image assets,
 * no licensing, weightless. One distinct motif per editorial category.
 */

const STRUCTURE = '#B08D57'; // brass — faint structural lines
const LINE = '#C5A572'; // brass-light — primary strokes
const ACCENT = '#B08D57'; // brass — accent dots

// Ascending chart over a horizon grid — Market Outlook
function MarketChart() {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      {[70, 120, 170, 220].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke={STRUCTURE} strokeOpacity="0.14" strokeWidth="1" />
      ))}
      <defs>
        <linearGradient id="mkt-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={LINE} stopOpacity="0.22" />
          <stop offset="100%" stopColor={LINE} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,205 L60,188 L110,193 L170,148 L230,158 L300,98 L360,74 L400,58 L400,260 L0,260 Z"
        fill="url(#mkt-fill)"
      />
      <path
        d="M0,205 L60,188 L110,193 L170,148 L230,158 L300,98 L360,74 L400,58"
        fill="none"
        stroke={LINE}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="170" cy="148" r="3" fill={ACCENT} />
      <circle cx="300" cy="98" r="3" fill={ACCENT} />
      <circle cx="360" cy="74" r="5" fill={ACCENT} />
      <circle cx="360" cy="74" r="9" fill="none" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1" />
    </svg>
  );
}

// Concentric vault rings — Custody & Security
function VaultRings() {
  const cx = 200;
  const cy = 130;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      {[38, 64, 90, 116].map((r, i) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={i === 1 ? LINE : STRUCTURE}
          strokeOpacity={i === 1 ? 0.7 : 0.18}
          strokeWidth={i === 1 ? 1.75 : 1}
        />
      ))}
      {/* radial ticks around the outer ring */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const r1 = 122;
        const r2 = 130;
        return (
          <line
            key={i}
            x1={cx + Math.cos(a) * r1}
            y1={cy + Math.sin(a) * r1}
            x2={cx + Math.cos(a) * r2}
            y2={cy + Math.sin(a) * r2}
            stroke={STRUCTURE}
            strokeOpacity="0.3"
            strokeWidth="1"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="7" fill={ACCENT} />
      <circle cx={cx} cy={cy} r="16" fill="none" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1" />
    </svg>
  );
}

// Connected node network — On-Chain Yield
function YieldNetwork() {
  const nodes = [
    [50, 70], [140, 130], [110, 210], [220, 60], [250, 170], [330, 110], [360, 215],
  ];
  const edges = [
    [0, 1], [1, 2], [1, 3], [1, 4], [3, 5], [4, 5], [4, 6], [5, 6],
  ];
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={STRUCTURE}
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => {
        const accent = i === 1 || i === 5;
        return (
          <g key={i}>
            {accent && (
              <circle cx={x} cy={y} r="11" fill="none" stroke={ACCENT} strokeOpacity="0.4" strokeWidth="1" />
            )}
            <circle cx={x} cy={y} r={accent ? 5 : 3.5} fill={accent ? ACCENT : LINE} fillOpacity={accent ? 1 : 0.85} />
          </g>
        );
      })}
    </svg>
  );
}

// Long-horizon orbital arcs — Stewardship
function StewardshipOrbits() {
  const cx = 200;
  const cy = 135;
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <g transform={`rotate(-18 ${cx} ${cy})`}>
        {[
          [150, 56],
          [110, 40],
          [70, 26],
        ].map(([rx, ry], i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill="none"
            stroke={i === 0 ? LINE : STRUCTURE}
            strokeOpacity={i === 0 ? 0.6 : 0.2}
            strokeWidth={i === 0 ? 1.5 : 1}
          />
        ))}
        {/* a body travelling the outer orbit */}
        <circle cx={cx + 150} cy={cy} r="5" fill={ACCENT} />
        <circle cx={cx} cy={cy} r="9" fill={ACCENT} fillOpacity="0.9" />
        <circle cx={cx} cy={cy} r="16" fill="none" stroke={ACCENT} strokeOpacity="0.35" strokeWidth="1" />
      </g>
    </svg>
  );
}

const MOTIFS = {
  'Market Outlook': MarketChart,
  'Custody & Security': VaultRings,
  'On-Chain Yield': YieldNetwork,
  Stewardship: StewardshipOrbits,
};

export default function InsightVisual({ category, className }) {
  const Motif = MOTIFS[category] || MarketChart;
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden bg-gradient-to-br from-ink-600 via-ink to-ink-900',
        className
      )}
    >
      <Motif />
    </div>
  );
}
