import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function FreeAIInterviewAssistant() {
  return (
    <SEOTemplate
      title="Free AI Interview Assistant — No Subscription Required | Natively"
      description="The best free AI interview assistant for coding interviews. Natively runs locally on your device — no subscription, no credit card, no cloud. Works with Ollama for fully offline, $0 operation."
      canonicalPath="/free-ai-interview-assistant"
      h1="Free AI Interview Assistant: Zero Subscription, Zero Cloud"
      ru={{
        title: "Бесплатный ИИ-ассистент для собеседований — Без подписки | Natively",
        description: "Лучший бесплатный ИИ-ассистент для интервью по кодингу. Natively работает локально — без подписки, без карты, без облака. Работает с Ollama полностью офлайн.",
        h1: "Бесплатный ИИ-ассистент для собеседований: Без подписки, без облака",
        children: (
          <>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Почему большинство ИИ-ассистентов для интервью платные</h2>
              <p className="mb-4">
                Большинство инструментов для подготовки к собеседованиям — FinalRoundAI ($25–50/мес), Cluely, LockedIn AI — монетизируются через подписки, потому что они несут расходы на облачные серверы. Каждый ваш запрос обрабатывается на их инфраструктуре — это стоит денег, которые они перекладывают на вас.
              </p>
              <p className="mb-4">
                Natively устраняет эту стоимость полностью. Обрабатывая всё локально на вашем устройстве, Natively не несёт операционных расходов на каждый запрос. Это позволяет предлагать базовые функции <strong>бесплатно навсегда</strong>.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Три способа использовать Natively бесплатно</h2>
              <ol className="list-decimal list-inside space-y-3 mb-4">
                <li><strong>Ollama (полностью бесплатно, офлайн)</strong> — установите Ollama, скачайте Llama 3 или DeepSeek, используйте без интернета и без API-ключей</li>
                <li><strong>Собственный API-ключ</strong> — используйте OpenAI или Anthropic по цене ~$0.01–0.05 за сессию</li>
                <li><strong>Бесплатный тир Natively</strong> — лимитированное использование без ввода карты</li>
              </ol>
            </section>
          </>
        )
      }}
    >
      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why Most AI Interview Assistants Cost $25–50/Month</h2>
        <p className="mb-4">
          The leading AI interview tools — FinalRoundAI, Cluely, LockedIn AI, and others — all charge monthly subscriptions because they run expensive cloud infrastructure. Every time you use their copilot during an interview, your audio and screen are processed on their remote servers. That costs money, and they pass it to you through subscriptions.
        </p>
        <p className="mb-4">
          Natively eliminates this cost entirely. By processing everything locally on your device, Natively incurs zero per-request infrastructure costs. This allows the core features to be <strong>free forever</strong> — not freemium tricks, not limited trial periods.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Three Ways to Use Natively For Free</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Option 1: Ollama (Completely Free, Fully Offline)</h3>
        <p className="mb-4">
          The most powerful free setup. Install <a href="https://ollama.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama</a> on your Mac or Windows machine, pull a model (Llama 3.1, DeepSeek Coder, or Mistral), and configure Natively to use it. Your total API cost: <strong>$0.00</strong>. This setup works completely offline — no internet connection needed during your interview.
        </p>
        <p className="mb-4">
          Recommended free models for coding interviews:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>DeepSeek Coder 6.7B</strong> — excellent for algorithm and code generation</li>
          <li><strong>Llama 3.1 8B</strong> — strong general-purpose reasoning</li>
          <li><strong>Mistral 7B</strong> — fast, efficient, good technical reasoning</li>
          <li><strong>Qwen2.5 Coder 7B</strong> — specialized for code tasks</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Option 2: Bring Your Own API Key (~$0.01–0.05/interview)</h3>
        <p className="mb-4">
          If you want access to more powerful models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro), you can use your own API key. Natively sends only the specific question to the API — not a continuous audio stream — keeping your costs minimal.
        </p>
        <p className="mb-4">
          Typical cost per interview session: <strong>$0.02–0.10</strong>. Compare this to FinalRoundAI's $25–50/month.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Option 3: Natively Free Tier</h3>
        <p className="mb-4">
          Natively's free tier includes core interview assistance features with no payment method required. Upgrade to Premium ($19/month) for unlimited sessions and access to advanced model configurations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">What the Free AI Interview Assistant Includes</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-foreground">
                <th className="p-4 border-b border-border/50 font-semibold">Feature</th>
                <th className="p-4 border-b border-border/50 font-semibold">Free (Ollama/BYOK)</th>
                <th className="p-4 border-b border-border/50 font-semibold">Premium ($19/mo)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Real-time coding assistance</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓ Unlimited</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓ Unlimited</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Algorithm problem solving</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">System design support</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Behavioral interviews (STAR)</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Invisible overlay</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Offline mode (Ollama)</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Cloud API support (BYOK)</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓ Any provider</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓ Any provider</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Advanced model configurations</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Basic</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓ Full access</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Priority AI models</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Standard</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">✓ GPT-4o, Claude 3.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Free vs Paid: What AI Interview Assistants Actually Cost</h2>
        <p className="mb-4">
          Here is a realistic cost comparison for a typical job search lasting 3 months with weekly interviews:
        </p>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-foreground">
                <th className="p-4 border-b border-border/50 font-semibold">Tool</th>
                <th className="p-4 border-b border-border/50 font-semibold">Monthly Cost</th>
                <th className="p-4 border-b border-border/50 font-semibold">3-Month Total</th>
                <th className="p-4 border-b border-border/50 font-semibold">Data Privacy</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">FinalRoundAI</td>
                <td className="p-4 border-b border-border/50 text-red-400">$25–50</td>
                <td className="p-4 border-b border-border/50 text-red-400">$75–$150</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Cloud stored</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Natively + Ollama</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">$0.00</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">$0.00</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">100% local</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Natively + BYOK (OpenAI)</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">~$0.50–$2</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">~$1.50–$6</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Your API key</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Natively Premium</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">$19</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">$57</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">100% local</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">How to Set Up Your Free AI Interview Assistant in 5 Minutes</h2>
        <ol className="list-decimal list-inside space-y-4 mb-4">
          <li>
            <strong>Download Natively</strong> — Visit natively.software and download for macOS (M1/M2/M3 or Intel) or Windows.
          </li>
          <li>
            <strong>Install Ollama</strong> (for $0 operation) — Download Ollama from <a href="https://ollama.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ollama.ai</a> and run <code className="bg-muted px-1 rounded">ollama pull llama3.1</code> or <code className="bg-muted px-1 rounded">ollama pull deepseek-coder</code>
          </li>
          <li>
            <strong>Grant permissions</strong> — In macOS System Settings, grant screen recording and microphone access to Natively.
          </li>
          <li>
            <strong>Configure your AI provider</strong> — In Natively settings, select Ollama and your downloaded model. Or paste your OpenAI/Anthropic API key.
          </li>
          <li>
            <strong>Start your interview</strong> — Launch Natively, position the overlay, and begin your next technical interview.
          </li>
        </ol>
        <p className="mb-4">
          The <LocaleLink to="/ai-coding-interview-helper" className="text-primary hover:underline">AI coding interview helper</LocaleLink> activates automatically when it detects coding questions or interview conversation patterns.
        </p>
      </section>
    </SEOTemplate>
  );
}
