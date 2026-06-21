import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function InterviewCopilotPricing() {
  return (
    <SEOTemplate
      title="Interview Copilot Pricing Compared (2026) | Natively"
      description="Interview copilot pricing compared in 2026: Cluely, Final Round AI, LockedIn AI, Interview Coder, and Natively (free/BYOK). See which copilot is genuinely free vs paid."
      canonicalPath="/blog/interview-copilot-pricing"
      h1="Interview Copilot Pricing Compared (2026)"
      ru={{
        title: "Сравнение цен на ИИ-копилоты для собеседований (2026)",
        description: "Сравнение цен на ИИ-копилоты для собеседований в 2026: Cluely, Final Round AI, LockedIn AI, Interview Coder и Natively (бесплатно/BYOK). Какой копилот действительно бесплатный.",
        h1: "Сравнение цен на ИИ-копилоты для собеседований (2026)",
        children: (
          <>
            <section>
              <p className="mb-4">
                Цены на ИИ-копилоты для собеседований сильно различаются: от платных подписок $20–70+ в месяц у облачных инструментов до $0 у вариантов с открытым кодом и локальным запуском. Ниже — сравнение публичных цен ведущих копилотов в 2026 году. Цены меняются — сверяйтесь с актуальной страницей каждого вендора перед покупкой.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Таблица сравнения цен на копилоты для собеседований</h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 text-foreground">
                      <th className="p-4 border-b border-border/50 font-semibold">Инструмент</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Модель цены</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Бесплатный режим?</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Natively</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Бесплатно (локально/BYOK); API $8–$35/мес</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Да — навсегда (Ollama)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Cluely</td>
                      <td className="p-4 border-b border-border/50">Платная подписка</td>
                      <td className="p-4 border-b border-border/50 text-muted-foreground">Ограниченный</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Final Round AI</td>
                      <td className="p-4 border-b border-border/50">~$25–50/мес (по тарифу)</td>
                      <td className="p-4 border-b border-border/50 text-muted-foreground">Только пробный</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">LockedIn AI</td>
                      <td className="p-4 border-b border-border/50">~$55–70/мес</td>
                      <td className="p-4 border-b border-border/50 text-muted-foreground">Ограниченный</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Interview Coder</td>
                      <td className="p-4 border-b border-border/50">Платная подписка</td>
                      <td className="p-4 border-b border-border/50 text-muted-foreground">Нет</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Цены конкурентов основаны на их публичных страницах тарифов (2026). Тарифы часто меняются — проверяйте актуальные детали у источника перед покупкой.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Почему Natively может быть бесплатным, когда другие — нет</h2>
              <p className="mb-4">
                Облачные копилоты несут серверные расходы на каждую сессию: они запускают инференс ИИ и транскрипцию на своей инфраструктуре, поэтому вынуждены брать подписку. <LocaleLink to="/" className="text-primary hover:underline">Natively</LocaleLink> перекладывает обработку на ваше устройство (локально через Ollama) или на ваш собственный API-ключ (BYOK), поэтому само приложение может оставаться бесплатным.
              </p>
              <p className="mb-4">
                Платный уровень — Natively API ($8–$35/мес) — существует для тех, кто хочет управляемое решение «всё включено» без настройки ключей. Но это выбор, а не обязательство.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Какой тариф подходит вам?</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Хотите $0:</strong> локальный режим Natively через Ollama.</li>
                <li><strong>Хотите мощь облака, но без подписки:</strong> BYOK со своим ключом.</li>
                <li><strong>Хотите «всё включено» без настройки:</strong> Natively API от $8/мес.</li>
              </ul>
              <p className="mb-4">
                Подробнее о действительно бесплатных вариантах — в нашем гиде по <LocaleLink to="/blog/best-free-ai-interview-assistant" className="text-primary hover:underline">лучшему бесплатному ИИ-ассистенту</LocaleLink>, а полный рейтинг — в обзоре <LocaleLink to="/blog/best-ai-interview-assistants" className="text-primary hover:underline">7 лучших ИИ-ассистентов</LocaleLink>.
              </p>
            </section>
          </>
        )
      }}
    >
      <section>
        <p className="mb-4">
          Interview copilot pricing varies widely: from $20–70+/month paid subscriptions for cloud tools, to $0 for open-source, locally-run options. Below is a comparison of the leading copilots' public pricing in 2026. Prices change — verify the current details on each vendor's page before buying.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Interview Copilot Pricing Comparison Table</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-foreground">
                <th className="p-4 border-b border-border/50 font-semibold">Tool</th>
                <th className="p-4 border-b border-border/50 font-semibold">Pricing model</th>
                <th className="p-4 border-b border-border/50 font-semibold">Free mode?</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Natively</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Free (local/BYOK); API $8–$35/mo</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes — forever (Ollama)</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Cluely</td>
                <td className="p-4 border-b border-border/50">Paid subscription</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Limited</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Final Round AI</td>
                <td className="p-4 border-b border-border/50">~$25–50/mo (by plan)</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Trial only</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">LockedIn AI</td>
                <td className="p-4 border-b border-border/50">~$55–70/mo</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">Limited</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Interview Coder</td>
                <td className="p-4 border-b border-border/50">Paid subscription</td>
                <td className="p-4 border-b border-border/50 text-muted-foreground">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Competitor prices are based on their public pricing pages (2026). Plans change often — verify current details at the source before purchasing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why Natively Can Be Free When Others Aren't</h2>
        <p className="mb-4">
          Cloud copilots carry a server cost per session: they run AI inference and transcription on their own infrastructure, so they have to charge a subscription. <LocaleLink to="/" className="text-primary hover:underline">Natively</LocaleLink> moves the processing to your device (local via Ollama) or to your own API key (BYOK), so the app itself can stay free.
        </p>
        <p className="mb-4">
          The paid tier — Natively API ($8–$35/mo) — exists for people who want a managed, all-in-one option without configuring keys. But it is a choice, not a requirement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Which Plan Is Right for You?</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Want $0:</strong> Natively local mode via Ollama.</li>
          <li><strong>Want cloud power without a subscription:</strong> BYOK with your own key.</li>
          <li><strong>Want all-in-one with no setup:</strong> Natively API from $8/mo.</li>
        </ul>
        <p className="mb-4">
          For more on genuinely free options, see our guide to the <LocaleLink to="/blog/best-free-ai-interview-assistant" className="text-primary hover:underline">best free AI interview assistant</LocaleLink>, and for the full ranking, our review of the <LocaleLink to="/blog/best-ai-interview-assistants" className="text-primary hover:underline">7 best AI interview assistants</LocaleLink>.
        </p>
      </section>
    </SEOTemplate>
  );
}
