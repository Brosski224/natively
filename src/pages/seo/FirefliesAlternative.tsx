import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function FirefliesAlternative() {
  return (
    <SEOTemplate
      title="Best Fireflies Alternative — Free, Local & Private | Natively"
      description="The best Fireflies.ai alternative: Natively is a free, local-first meeting assistant — no bot in your call, no cloud transcripts, no per-seat subscription. Works offline."
      canonicalPath="/fireflies-alternative"
      h1="The Best Fireflies Alternative for Private, Local Meetings"
      ru={{
        title: "Лучшая альтернатива Fireflies — Бесплатно и локально | Natively",
        description: "Ищете альтернативу Fireflies.ai? Natively — бесплатный локальный ассистент для встреч: без бота в звонке, без транскриптов в облаке, помощь в реальном времени и без подписки. Работает офлайн через Ollama.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is the best Fireflies alternative for anyone who wants meeting notes without sending their meetings to the cloud.</strong> Fireflies.ai is a capable team notetaker, but its bot joins every call and stores your transcripts on its servers, on a per-seat subscription. Natively runs locally on your own device, adds real-time in-call help, and is free.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why people look for a Fireflies alternative</h2>
        <p className="mb-4">
          Fireflies is well-built, but three things send people looking for something else:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>The bot in the call.</strong> Fireflies' notetaker joins as a visible participant. In sensitive or external meetings, that's awkward — and sometimes not allowed.</li>
          <li><strong>Cloud storage of transcripts.</strong> Your conversations live on Fireflies' infrastructure, which is a real concern for confidential or regulated discussions.</li>
          <li><strong>Per-seat cost.</strong> Paid tiers run $10–$19/seat/month (annual), and the free tier is capped at 400 minutes for the whole team.</li>
        </ul>
        <p className="mb-4">
          Natively addresses all three by being local-first, invisible, and free.
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
                <th className="p-4 border-b border-border/50 font-semibold">Fireflies.ai</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Cost to start</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Free (Ollama/BYOK)</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Free tier capped, then $10+/seat/mo</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Data location</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">On your device</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Fireflies cloud</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Visible bot in call</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">No — invisible overlay</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Yes</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Real-time help in call</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Post-call focus</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Works offline</td>
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
          For the full breakdown, see <LocaleLink to="/natively-vs-fireflies" className="text-primary hover:underline">Natively vs Fireflies</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">When Fireflies is still the better choice</h2>
        <p className="mb-4">
          To be fair: if you need a shared meeting database across a large team, deep CRM integrations, conversation intelligence dashboards, or a bot that captures meetings you don't attend, Fireflies is purpose-built for that and Natively is not. Natively is the better choice for individuals and privacy-conscious users who want local processing, real-time help, and no subscription.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is there a free Fireflies alternative?</h3>
        <p className="mb-4">
          Yes. Natively is free using your own API key or fully free and offline with Ollama. There's no per-seat subscription and no monthly-minute cap in local mode.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can I take meeting notes without a bot joining the call?</h3>
        <p className="mb-4">
          Yes — that's a core difference. Natively captures audio locally as an invisible overlay, so nothing joins your meeting as a participant and nothing shows up in recordings.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does Natively keep my transcripts private?</h3>
        <p className="mb-4">
          In local mode, transcripts and notes never leave your device and there's zero outbound network traffic. Natively is open source, so you can verify exactly how your data is handled.
        </p>
      </section>
    </SEOTemplate>
  );
}
