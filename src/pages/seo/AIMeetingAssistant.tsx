import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function AIMeetingAssistant() {
  return (
    <SEOTemplate
      title="AI Meeting Assistant — Live Notes, Local & Private | Natively"
      description="Natively is a free AI meeting assistant for Zoom, Teams, and Google Meet. Live transcription, real-time answers, and automatic notes — running locally on your device as an invisible overlay, not a bot that joins your call."
      canonicalPath="/ai-meeting-assistant"
      h1="The AI Meeting Assistant That Runs On Your Device"
      ru={{
        title: "ИИ-ассистент для встреч — Локально и приватно | Natively",
        description: "Natively — бесплатный ИИ-ассистент для встреч в Zoom, Teams и Google Meet. Транскрипция в реальном времени, мгновенные ответы и авто-заметки — локально на вашем устройстве, как невидимый оверлей, а не бот в звонке.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is a free, local-first AI meeting assistant</strong> that gives you live transcription, real-time answer suggestions, and automatic meeting notes during any call — on Zoom, Microsoft Teams, Google Meet, Slack, or Discord. Unlike cloud note-takers that send a bot into your meeting, Natively runs as an invisible native overlay on your own machine, so it never appears in the participant list or in screen recordings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">What an AI meeting assistant actually does</h2>
        <p className="mb-4">
          An AI meeting assistant listens to a conversation, transcribes it in real time, and helps you respond and remember. The best ones do three jobs at once: <strong>capture</strong> (accurate live transcription of everyone speaking), <strong>assist</strong> (suggest what to say, summarize what was just said, or surface a fact you need mid-sentence), and <strong>recall</strong> (produce structured notes and let you search past meetings).
        </p>
        <p className="mb-4">
          Natively does all three locally. It captures system audio and your microphone as two separate channels, transcribes with on-device Whisper, and runs the conversation through a local or bring-your-own-key LLM — with end-to-end latency under 500&nbsp;milliseconds, fast enough to help while the other person is still talking.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why local-first matters for meetings</h2>
        <p className="mb-4">
          Most meeting assistants are cloud services: a bot joins your call, and your audio and transcripts are stored on a vendor's servers. That is convenient, but it means sensitive client conversations, internal strategy, and confidential figures leave your control — and everyone on the call sees the bot.
        </p>
        <p className="mb-4">
          Natively takes the opposite approach. In local mode (via <LocaleLink to="/local-ai-assistant" className="text-primary hover:underline">Ollama</LocaleLink>), no audio, transcript, or note ever leaves your device, and there is zero outbound network traffic. You can also bring your own API key for cloud-grade reasoning — and even then, only the text of a specific request is sent, never the raw audio stream.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Key features</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Dual-channel audio</strong> — system/meeting audio and your microphone are captured as separate pipelines, so transcripts attribute speech correctly.</li>
          <li><strong>Live transcription</strong> — on-device Whisper (Moonshine, Whisper-large-v3-turbo) with GPU acceleration on Apple Silicon and Windows.</li>
          <li><strong>Real-time assistance</strong> — ask "what should I say?", shorten a response, recap the conversation, or suggest follow-up questions with a keyboard shortcut.</li>
          <li><strong>Automatic notes</strong> — structured summaries you can export to Markdown, JSON, or text.</li>
          <li><strong>Local meeting history</strong> — a searchable dashboard with global, cross-meeting semantic search powered by local RAG (SQLite + sqlite-vec).</li>
          <li><strong>Persona modes</strong> — switch context for team meetings, sales calls, recruiting, lectures, or interviews.</li>
          <li><strong>Invisible overlay</strong> — hides from the dock/taskbar and never shows up in screen shares or recordings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Natively vs cloud meeting assistants</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-foreground">
                <th className="p-4 border-b border-border/50 font-semibold">Feature</th>
                <th className="p-4 border-b border-border/50 font-semibold">Natively</th>
                <th className="p-4 border-b border-border/50 font-semibold">Typical cloud assistant</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">How it joins</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Invisible overlay (not a participant)</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Bot joins the call, visible to all</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Where data lives</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">On your device</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Vendor cloud</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Real-time answers</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes — &lt;500 ms</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Notes-focused, often post-call</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Offline mode</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes — fully offline via Ollama</td>
                <td className="p-4 border-b border-border/50 text-red-400">No</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Price</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Free (BYOK/Ollama)</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Per-seat subscription</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Open source</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes — AGPL-3.0</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          If you mainly want shareable post-call notes and a CRM integration, a dedicated cloud tool like <LocaleLink to="/natively-vs-fireflies" className="text-primary hover:underline">Fireflies</LocaleLink> or <LocaleLink to="/natively-vs-otter" className="text-primary hover:underline">Otter</LocaleLink> may suit you. If privacy, real-time help, and cost matter more, Natively is the stronger fit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Who it's for</h2>
        <p className="mb-4">
          Natively works for any conversation where you want to stay present and still capture everything: client and <LocaleLink to="/sales-call-assistant" className="text-primary hover:underline">sales calls</LocaleLink>, internal team meetings, recruiting screens, one-on-ones, university <LocaleLink to="/lecture-note-taker" className="text-primary hover:underline">lectures</LocaleLink>, and job interviews. If you just want clean notes, see the <LocaleLink to="/ai-note-taker" className="text-primary hover:underline">AI note taker</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does the AI meeting assistant join my call as a participant?</h3>
        <p className="mb-4">
          No. Natively runs as a separate native overlay on your own computer, not as a bot inside the meeting. It captures audio locally, so it never appears in the participant list, and it stays hidden from screen shares and recordings.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is my meeting data private?</h3>
        <p className="mb-4">
          In local mode, everything — audio, transcripts, and notes — stays on your device with zero outbound network traffic. Natively is open source (AGPL-3.0), so the data handling is fully auditable. If you use a bring-your-own-key cloud model, only the specific text request is sent to your chosen provider.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Which meeting apps does it work with?</h3>
        <p className="mb-4">
          Because it captures system audio rather than integrating with a specific platform, Natively works with Zoom, Microsoft Teams, Google Meet, Slack, Discord, and any other app that plays audio on your machine.
        </p>
      </section>
    </SEOTemplate>
  );
}
