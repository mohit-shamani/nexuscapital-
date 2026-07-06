/**
 * Answer-engine-optimized definition callout. Renders a concise, self-contained
 * "What is …?" question and answer drawn from a post's optional `definition`
 * field — the pattern Google AI Overviews, ChatGPT, Perplexity and Gemini
 * extract as a direct answer. Deliberately subtle (light card, brass hairline)
 * so it reads as part of the article, not a banner.
 *
 * Renders nothing when no definition exists — never an empty placeholder.
 *
 * @param {{ question: string, text: string, term?: string }} definition
 */
export default function DefinitionBlock({ definition }) {
  if (!definition || !definition.text) return null;

  return (
    <section
      aria-label="Definition"
      className="border-l-2 border-brass/40 bg-ivory-50 px-6 py-6 md:px-8 md:py-7"
    >
      <h2 className="font-serif text-xl font-light text-ink md:text-2xl">
        {definition.question}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slatey md:text-lg">
        {definition.text}
      </p>
    </section>
  );
}
