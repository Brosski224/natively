import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function AINoteTaker() {
  return (
    <SEOTemplate
      title="AI Note Taker for Meetings — Local, Free & Private | Natively"
      description="A free AI note taker that transcribes and summarizes meetings locally. Automatic notes, speaker labels, and Markdown export — no bot in your call, no cloud."
      canonicalPath="/ai-note-taker"
      h1="A Local AI Note Taker That Keeps Your Meetings Private"
      ru={{
        title: "ИИ для заметок со встреч — Локально, бесплатно | Natively",
        description: "Natively — бесплатный ИИ для заметок: записывает, расшифровывает и резюмирует встречи локально на вашем устройстве. Авто-заметки, спикеры и экспорт в Markdown — без бота в звонке и без данных в облаке.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is a free AI note taker</strong> that transcribes your meetings and turns them into structured, searchable notes — entirely on your own device. There is no bot in your call and no transcript sitting on a vendor's server. You get the automatic notes, action items, and summaries you'd expect from a cloud tool, with the privacy of fully local processing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">What a great AI note taker should do</h2>
        <p className="mb-4">
          A note taker is only useful if you trust it and can find things later. That means three things: <strong>accurate transcription</strong> of who said what, <strong>concise summaries</strong> that capture decisions and action items rather than every word, and <strong>real recall</strong> so a note from three weeks ago is one search away. Natively is built around all three, and adds a privacy guarantee most cloud tools can't make.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">How Natively takes notes</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Live transcription</strong> with on-device Whisper, capturing both meeting audio and your microphone on separate channels.</li>
          <li><strong>Automatic summaries</strong> that condense long conversations, with epoch summarization that keeps even multi-hour meetings coherent.</li>
          <li><strong>Speaker diarization</strong> (Pro) so notes attribute statements to the right person.</li>
          <li><strong>Searchable dashboard</strong> — browse and search every past meeting by keyword or date, with global cross-meeting semantic search.</li>
          <li><strong>Export anywhere</strong> — Markdown, JSON, or plain text, so your notes drop straight into Notion, Obsidian, Docs, or a ticket.</li>
          <li><strong>Local RAG memory</strong> — built on SQLite and sqlite-vec, fully offline, automatically indexing in the background.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Local notes vs cloud notes</h2>
        <p className="mb-4">
          Cloud note takers like Otter and Fireflies are mature and convenient, but they work by uploading your meeting audio and storing transcripts on their infrastructure. For one-on-ones about compensation, client calls under NDA, or internal strategy, that's a meaningful exposure.
        </p>
        <p className="mb-4">
          Natively keeps everything on your machine by default. In local mode there is zero outbound traffic, and because it's <LocaleLink to="/local-ai-assistant" className="text-primary hover:underline">open source and local-first</LocaleLink>, you can verify exactly what it does with your data. Compare directly: <LocaleLink to="/natively-vs-otter" className="text-primary hover:underline">Natively vs Otter</LocaleLink> and <LocaleLink to="/natively-vs-fireflies" className="text-primary hover:underline">Natively vs Fireflies</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Beyond note taking</h2>
        <p className="mb-4">
          Because Natively also runs in real time, it does more than record. During the call it can suggest answers, recap what was just said, or surface a follow-up question — the same engine that powers its <LocaleLink to="/ai-meeting-assistant" className="text-primary hover:underline">AI meeting assistant</LocaleLink> and interview features. One app covers note taking and live assistance across every kind of conversation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is there a free AI note taker that works offline?</h3>
        <p className="mb-4">
          Yes. Natively's note taking is free, and with Ollama and on-device Whisper it works completely offline — transcription and summarization both run locally, so you can take notes on a plane or in a secure environment with no internet.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can I export my meeting notes?</h3>
        <p className="mb-4">
          Yes. Every meeting can be exported to Markdown, JSON, or plain text from the local dashboard, so your notes move cleanly into your existing tools.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does it label different speakers?</h3>
        <p className="mb-4">
          Speaker diarization is available in Natively Pro, attributing each statement to the correct speaker. Core transcription and note taking are available for free.
        </p>
      </section>
    </SEOTemplate>
  );
}
