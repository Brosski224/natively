import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function InterviewCopilotBYOK() {
  return (
    <SEOTemplate
      title="BYOK & Local-LLM Interview Copilot: Bring Your Own Key | Natively"
      description="A BYOK interview copilot lets you use your own OpenAI, Anthropic, Gemini, or Groq key — or run a local LLM via Ollama for $0. Here's how bring-your-own-key copilots work."
      canonicalPath="/blog/interview-copilot-byok-local-llm"
      h1="The BYOK & Local-LLM Interview Copilot Explained"
      ru={{
        title: "ИИ-копилот с BYOK и локальной LLM: свой ключ | Natively",
        description: "Копилот с BYOK позволяет использовать собственный ключ OpenAI, Anthropic, Gemini или Groq — либо запускать локальную LLM через Ollama за $0. Как работают копилоты со своим ключом.",
        h1: "ИИ-копилот с BYOK и локальной LLM: объяснение",
        children: (
          <>
            <section>
              <p className="mb-4">
                Копилот для собеседований с BYOK (bring-your-own-key, «принеси свой ключ») — это инструмент, который вместо собственной закрытой облачной модели использует ваш API-ключ или локальную модель на вашем устройстве. Это даёт ту же мощь ИИ, что и у облачных конкурентов, но без их подписки и без отправки данных через посредника.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Три режима работы</h2>
              <p className="mb-4">
                <LocaleLink to="/" className="text-primary hover:underline">Natively</LocaleLink> — единственный ассистент, который поддерживает все три режима в одном приложении:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-4">
                <li><strong>Локальный (Ollama):</strong> локальные модели (Llama, Mistral, CodeLlama, Gemma) + локальный Whisper — 100% офлайн, нулевой трафик, нулевая стоимость.</li>
                <li><strong>Облачный (BYOK):</strong> ваш собственный ключ OpenAI, Anthropic, Gemini или Groq — либо любой OpenAI-совместимый эндпоинт. Та же мощь, что у облачных конкурентов, оплата только за токены.</li>
                <li><strong>Управляемый (Natively API):</strong> хостинг STT + LLM по подписке, без ключей.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Почему BYOK выгоднее подписки</h2>
              <p className="mb-4">
                Облачные копилоты берут фиксированную месячную плату независимо от того, сколько вы их используете. С BYOK вы платите провайдеру модели только за реально использованные токены — часто это центы за сессию собеседования. Для большинства кандидатов это значительно дешевле подписки $25–70/мес.
              </p>
              <p className="mb-4">
                Сравнение полных цен — в нашем разборе <LocaleLink to="/blog/interview-copilot-pricing" className="text-primary hover:underline">цен на копилоты для собеседований</LocaleLink>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Какие модели и провайдеры поддерживаются</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Google Gemini:</strong> серия 3.1 (рекомендуется; контекст до 2M токенов).</li>
                <li><strong>OpenAI:</strong> GPT-5.4, серия o3.</li>
                <li><strong>Anthropic:</strong> серия Claude 4.6.</li>
                <li><strong>Groq:</strong> Llama 3.3 (текст), Llama 4 Scout (OCR/зрение).</li>
                <li><strong>Ollama / LocalAI:</strong> Llama, Mistral, CodeLlama, Gemma — полностью офлайн.</li>
                <li><strong>OpenAI-совместимые эндпоинты:</strong> vLLM, LM Studio, OpenRouter, DeepSeek и кастомные.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Преимущество приватности у BYOK и локального режима</h2>
              <p className="mb-4">
                В локальном режиме ваши данные никогда не покидают устройство. В режиме BYOK данные идут напрямую к выбранному вами провайдеру по вашему собственному ключу — без промежуточного сервера копилота, который их хранит. Это устраняет целый класс рисков приватности, присущих закрытым облачным инструментам. Подробнее — в статье о <LocaleLink to="/blog/ai-interview-assistant-privacy" className="text-primary hover:underline">приватности ИИ-ассистентов</LocaleLink>.
              </p>
            </section>
          </>
        )
      }}
    >
      <section>
        <p className="mb-4">
          A BYOK (bring-your-own-key) interview copilot is a tool that, instead of using its own closed cloud model, uses your API key or a local model on your device. That gives you the same AI power as cloud competitors — without their subscription, and without sending your data through a middleman.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">The Three Modes</h2>
        <p className="mb-4">
          <LocaleLink to="/" className="text-primary hover:underline">Natively</LocaleLink> is the only assistant that supports all three modes in one app:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li><strong>Local (Ollama):</strong> local models (Llama, Mistral, CodeLlama, Gemma) + local Whisper — 100% offline, zero traffic, zero cost.</li>
          <li><strong>Cloud (BYOK):</strong> your own OpenAI, Anthropic, Gemini, or Groq key — or any OpenAI-compatible endpoint. The same power as cloud competitors, pay only for tokens.</li>
          <li><strong>Managed (Natively API):</strong> hosted STT + LLM on a subscription, no keys needed.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why BYOK Beats a Subscription</h2>
        <p className="mb-4">
          Cloud copilots charge a fixed monthly fee regardless of how much you use them. With BYOK, you pay the model provider only for the tokens you actually use — often cents per interview session. For most candidates that is significantly cheaper than a $25–70/mo subscription.
        </p>
        <p className="mb-4">
          For a full price comparison, see our breakdown of <LocaleLink to="/blog/interview-copilot-pricing" className="text-primary hover:underline">interview copilot pricing</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Which Models and Providers Are Supported</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Google Gemini:</strong> 3.1 series (recommended; up to 2M-token context).</li>
          <li><strong>OpenAI:</strong> GPT-5.4, o3 series.</li>
          <li><strong>Anthropic:</strong> Claude 4.6 series.</li>
          <li><strong>Groq:</strong> Llama 3.3 (text), Llama 4 Scout (OCR/vision).</li>
          <li><strong>Ollama / LocalAI:</strong> Llama, Mistral, CodeLlama, Gemma — fully offline.</li>
          <li><strong>OpenAI-compatible endpoints:</strong> vLLM, LM Studio, OpenRouter, DeepSeek, and custom.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">The Privacy Advantage of BYOK and Local</h2>
        <p className="mb-4">
          In local mode, your data never leaves your device. In BYOK mode, data goes directly to the provider you chose under your own key — with no intermediate copilot server storing it. That removes an entire class of privacy risk inherent to closed cloud tools. More in our article on <LocaleLink to="/blog/ai-interview-assistant-privacy" className="text-primary hover:underline">AI interview assistant privacy</LocaleLink>.
        </p>
      </section>
    </SEOTemplate>
  );
}
