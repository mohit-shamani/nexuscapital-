/** Minimal centered loader shown during lazy route resolution. */
export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory">
      <div className="flex flex-col items-center gap-6">
        <span className="font-serif text-2xl font-light tracking-tight text-ink">
          Nexus<span className="text-brass">.</span>
        </span>
        <div className="h-px w-24 overflow-hidden bg-ink/10">
          <div className="h-full w-full origin-left animate-[load_1.2s_ease-in-out_infinite] bg-brass" />
        </div>
      </div>
      <style>{`@keyframes load { 0% { transform: scaleX(0); } 50% { transform: scaleX(1); } 100% { transform: scaleX(0); transform-origin: right; } }`}</style>
    </div>
  );
}
