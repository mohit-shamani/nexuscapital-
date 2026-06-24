import { cn } from '../../lib/utils.js';

/**
 * A slow, continuous horizontal marquee — used for the client-type strip.
 * Pure CSS animation keeps it off the JS main thread.
 */
export default function Marquee({ items, className }) {
  const sequence = [...items, ...items];

  return (
    <div className={cn('group relative flex overflow-hidden', className)}>
      <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {sequence.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-16 whitespace-nowrap font-serif text-2xl font-light text-ink/35"
          >
            {item}
            <span className="text-brass/50">—</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
