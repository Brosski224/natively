import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function SalesCallAssistant() {
  return (
    <SEOTemplate
      title="AI Sales Call Assistant — Real-Time Talk Tracks | Natively"
      description="A private AI sales call assistant: real-time objection handling, talk-track suggestions, and auto call notes — local on your device, invisible to the prospect."
      canonicalPath="/sales-call-assistant"
      h1="The AI Sales Call Assistant That Stays On Your Side of the Screen"
      ru={{
        title: "ИИ-ассистент для продаж — Подсказки в реальном времени | Natively",
        description: "Natively — приватный ИИ-ассистент для звонков по продажам. Реальное время: работа с возражениями, подсказки по скриптам и авто-заметки во время живых звонков — локально на устройстве, незаметно для клиента.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is a real-time AI sales call assistant</strong> that helps you handle objections, remember the next question, and capture every commitment — live, while you're still on the call. It runs locally on your device as an invisible overlay, so the prospect never sees a bot join, and your call data never leaves your machine.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">What a sales call assistant does</h2>
        <p className="mb-4">
          The hardest part of a live sales call is thinking and listening at the same time. A sales call assistant transcribes the conversation in real time and, when you need it, suggests how to respond — surfacing an answer to a tough objection, reminding you of a discovery question you skipped, or recapping what the prospect said two minutes ago. After the call, it writes up the notes so you can update your CRM in seconds.
        </p>
        <p className="mb-4">
          Natively does this with its <strong>Sales persona mode</strong>, tuned for natural, consultative responses rather than robotic scripts, with end-to-end latency under 500&nbsp;milliseconds.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Built for client trust</h2>
        <p className="mb-4">
          Sales conversations are confidential — pricing, contract terms, competitive intel, and customer pain points. Tools that route that audio through the cloud put it on someone else's servers. Natively's <LocaleLink to="/local-ai-assistant" className="text-primary hover:underline">local-first architecture</LocaleLink> keeps it all on your device: in local mode there is zero outbound network traffic, and the assistant is invisible to the prospect and to any call recording.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Key features for sales teams</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Real-time objection handling</strong> — ask "what should I say?" and get a consultative response in under half a second.</li>
          <li><strong>Sales persona mode</strong> — answers tuned to sound human and on-brand, not like a chatbot.</li>
          <li><strong>Live transcription</strong> with dual-channel audio that separates your voice from the prospect's.</li>
          <li><strong>Automatic call notes</strong> — exportable to Markdown, JSON, or text for fast CRM entry.</li>
          <li><strong>Custom context</strong> (Pro) — load your product one-pager, pricing, and battlecards (up to 8,000 characters plus reference files) so suggestions are grounded in your actual deal.</li>
          <li><strong>Cross-call memory</strong> — local RAG recalls what happened on previous calls with the same account.</li>
          <li><strong>Invisible overlay</strong> — hidden from screen shares, recordings, and the participant list.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Who it's for</h2>
        <p className="mb-4">
          Account executives, SDRs, founders running their own sales calls, customer success managers on renewal conversations, and consultants on discovery calls. Anyone who needs to stay sharp on a live call and capture the follow-ups without breaking eye contact. For general internal meetings, see the <LocaleLink to="/ai-meeting-assistant" className="text-primary hover:underline">AI meeting assistant</LocaleLink>; for clean post-call write-ups, the <LocaleLink to="/ai-note-taker" className="text-primary hover:underline">AI note taker</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can the prospect tell I'm using a sales assistant?</h3>
        <p className="mb-4">
          No. Natively runs as a hidden overlay on your own computer rather than joining the call as a bot, so there's no extra participant and nothing appears in the prospect's screen share or recording.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Will my call recordings be stored in the cloud?</h3>
        <p className="mb-4">
          Not in local mode. Audio, transcripts, and notes stay on your device with zero outbound traffic. If you choose a bring-your-own-key cloud model for higher-quality suggestions, only the specific text request is sent — never the raw call audio.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can I load my own pricing and battlecards?</h3>
        <p className="mb-4">
          Yes. With Natively Pro you can add custom context (up to 8,000 characters) plus reference files like PDFs and DOCX, so the assistant's suggestions reflect your real product, pricing, and competitive positioning.
        </p>
      </section>
    </SEOTemplate>
  );
}
