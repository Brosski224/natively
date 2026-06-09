import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function OtterAlternative() {
  return (
    <SEOTemplate
      title="Best Otter.ai Alternative — Local, Free & Unlimited | Natively"
      description="Looking for an Otter.ai alternative? Natively transcribes and summarizes meetings locally on your device — no cloud upload, no 300-minute cap, real-time help, and free with Ollama. A private alternative to Otter."
      canonicalPath="/otter-alternative"
      h1="The Best Otter.ai Alternative: Local, Private, No Minute Caps"
      ru={{
        title: "Лучшая альтернатива Otter.ai — Локально и бесплатно | Natively",
        description: "Ищете альтернативу Otter.ai? Natively расшифровывает и резюмирует встречи локально на устройстве — без загрузки в облако, без лимита в 300 минут, с помощью в реальном времени и бесплатно через Ollama.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is a private, local-first alternative to Otter.ai.</strong> Otter is a polished cloud transcription service, but it uploads your audio, stores transcripts on its servers, and caps the free plan at 300 minutes a month. Natively does transcription and summarization entirely on your device — no upload, no monthly cap in local mode, and real-time help during the call.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why people switch from Otter</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>The 300-minute free cap.</strong> Otter's free plan limits you to 300 monthly minutes and 30 minutes per meeting. Heavy users hit the wall fast.</li>
          <li><strong>Cloud upload.</strong> Your meeting audio and transcripts are processed and stored in Otter's cloud — a concern for confidential or regulated conversations.</li>
          <li><strong>Notes after, not help during.</strong> Otter is excellent at capturing and summarizing, but it doesn't help you respond in the moment.</li>
        </ul>
        <p className="mb-4">
          Natively answers each of these with local processing, unlimited local use, and real-time, in-call assistance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">How Natively compares</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-foreground">
                <th className="p-4 border-b border-border/50 font-semibold">What matters</th>
                <th className="p-4 border-b border-border/50 font-semibold">Natively</th>
                <th className="p-4 border-b border-border/50 font-semibold">Otter.ai</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Free usage</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Unlimited (local/Ollama)</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">300 mins/mo, 30 min/meeting</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Data location</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">On your device</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Otter cloud</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Real-time help in call</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes — &lt;500 ms</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Captions + chat, notes-focused</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Works offline</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes</td>
                <td className="p-4 border-b border-border/50 text-red-400">No</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Also does interviews</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes</td>
                <td className="p-4 border-b border-border/50 text-red-400">No</td>
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
          For the full breakdown, see <LocaleLink to="/natively-vs-otter" className="text-primary hover:underline">Natively vs Otter</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">When Otter is still the better choice</h2>
        <p className="mb-4">
          Otter's mobile apps are genuinely excellent, and if most of your recording happens on a phone — in-person meetings, interviews you're conducting, conversations on the move — Otter's iOS and Android experience is hard to beat. Natively is desktop-first (macOS and Windows, with a Phone Link companion). Choose Otter for a mobile-centric, cloud workflow; choose Natively for privacy, unlimited local use, and real-time help.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is there an Otter alternative without a minute limit?</h3>
        <p className="mb-4">
          Yes. In local mode (Ollama), Natively has no monthly-minute cap — transcription runs on your own hardware, so you can record as much as you like for free.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does Natively transcribe without uploading my audio?</h3>
        <p className="mb-4">
          Yes. On-device Whisper transcribes locally, so your audio never leaves your machine in local mode. That's the core privacy difference versus Otter's cloud model.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can it summarize meetings like Otter?</h3>
        <p className="mb-4">
          Yes. Natively produces automatic summaries and exportable notes (Markdown, JSON, text), with epoch summarization that keeps even long meetings coherent.
        </p>
      </section>
    </SEOTemplate>
  );
}
