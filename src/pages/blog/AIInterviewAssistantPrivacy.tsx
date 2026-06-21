import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function AIInterviewAssistantPrivacy() {
  return (
    <SEOTemplate
      title="AI Interview Assistant Privacy: What You Need to Know | Natively"
      description="AI interview assistant privacy explained: where your audio and screen data go, the NDA and breach risks of cloud tools, and why local on-device processing is the safe choice."
      canonicalPath="/blog/ai-interview-assistant-privacy"
      h1="AI Interview Assistant Privacy: What You Need to Know"
      ru={{
        title: "Приватность ИИ-ассистента для собеседований: что нужно знать",
        description: "Приватность ИИ-ассистента для собеседований: куда уходят ваши аудио и данные экрана, риски NDA и утечек у облачных инструментов, и почему локальная обработка безопаснее.",
        h1: "Приватность ИИ-ассистента для собеседований: что нужно знать",
        children: (
          <>
            <section>
              <p className="mb-4">
                Приватность ИИ-ассистента для собеседований сводится к одному вопросу: покидают ли ваше устройство аудио, содержимое экрана и ответы. У облачных инструментов — да: они передают конфиденциальные данные на сторонние серверы. У локального ассистента — нет: всё обрабатывается на вашей машине. Эта разница определяет весь профиль риска приватности.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Куда на самом деле уходят ваши данные</h2>
              <p className="mb-4">
                Чтобы работать, любой ассистент должен захватывать ваш микрофон и экран. Вопрос в том, где происходит обработка. Облачный инструмент передаёт этот поток на свои серверы для инференса ИИ и транскрипции — значит, ваши разговоры на собеседовании, проприетарный код и контекст компании покидают устройство. Локальный инструмент выполняет ту же работу на вашем CPU/GPU, и ничего не уходит вовне.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Три риска приватности у облачных ассистентов</h2>
              <ul className="list-disc list-inside space-y-3 mb-4">
                <li><strong>Нарушение NDA:</strong> технические собеседования часто содержат материалы под NDA. Передача их стороннему облаку может нарушать подписанное соглашение.</li>
                <li><strong>Утечка данных:</strong> любой облачный сервис может быть взломан, раскрыв ваши карьерно-чувствительные данные.</li>
                <li><strong>Изменение политик:</strong> условия облачного сервиса могут поменяться задним числом; локальный инструмент не зависит от чужих политик.</li>
              </ul>
              <p className="mb-4">
                Эти риски подробно разобраны на примере конкретного инструмента в статье <LocaleLink to="/blog/is-cluely-safe" className="text-primary hover:underline">«Безопасен ли Cluely?»</LocaleLink>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Почему локальная обработка решает проблему</h2>
              <p className="mb-4">
                <LocaleLink to="/" className="text-primary hover:underline">Natively</LocaleLink> построен на принципе local-first: захват экрана, транскрипция аудио (локальный Whisper) и инференс ИИ (через Ollama) работают на вашем устройстве. В локальном режиме телеметрия отсутствует, сетевой трафик нулевой, а так как код открыт (AGPL-3.0), любой может проверить эти утверждения. Технические детали режимов — в статье про <LocaleLink to="/blog/interview-copilot-byok-local-llm" className="text-primary hover:underline">BYOK и локальную LLM</LocaleLink>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Частые вопросы</h2>
              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Видит ли мой работодатель, что я использую ИИ-ассистента?</h3>
              <p className="mb-4">
                Облачные инструменты генерируют сетевой трафик, который можно зафиксировать. Локальный инструмент в офлайн-режиме не генерирует трафика. Подробнее: <LocaleLink to="/blog/is-ai-interview-assistant-detectable" className="text-primary hover:underline">можно ли обнаружить ИИ-ассистента</LocaleLink>.
              </p>
              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Хранятся ли мои данные собеседования где-то?</h3>
              <p className="mb-4">
                В локальном режиме Natively данные остаются в локальной памяти вашего устройства и не сериализуются на внешние серверы.
              </p>
            </section>
          </>
        )
      }}
    >
      <section>
        <p className="mb-4">
          AI interview assistant privacy comes down to one question: does your audio, screen content, and responses leave your device? With cloud tools, yes — they transmit sensitive data to third-party servers. With a local assistant, no — everything is processed on your machine. That distinction defines the entire privacy risk profile.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Where Your Data Actually Goes</h2>
        <p className="mb-4">
          To function, any assistant must capture your microphone and screen. The question is where the processing happens. A cloud tool transmits that stream to its servers for AI inference and transcription — meaning your interview conversations, proprietary code, and company context leave your device. A local tool does the same work on your own CPU/GPU, and nothing leaves.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">The Three Privacy Risks of Cloud Assistants</h2>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li><strong>NDA violation:</strong> technical interviews often contain NDA-covered material. Transmitting it to a third-party cloud may breach the agreement you signed.</li>
          <li><strong>Data breach:</strong> any cloud service can be hacked, exposing your career-sensitive data.</li>
          <li><strong>Policy changes:</strong> a cloud service's terms can change retroactively; a local tool doesn't depend on anyone else's policy.</li>
        </ul>
        <p className="mb-4">
          These risks are examined for a specific tool in our article <LocaleLink to="/blog/is-cluely-safe" className="text-primary hover:underline">"Is Cluely Safe?"</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why Local Processing Solves It</h2>
        <p className="mb-4">
          <LocaleLink to="/" className="text-primary hover:underline">Natively</LocaleLink> is built local-first: screen capture, audio transcription (local Whisper), and AI inference (via Ollama) all run on your device. In local mode there is no telemetry and zero network traffic, and because the code is open source (AGPL-3.0), anyone can verify those claims. For the technical detail of each mode, see our article on <LocaleLink to="/blog/interview-copilot-byok-local-llm" className="text-primary hover:underline">BYOK and local LLMs</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>
        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can my employer see that I'm using an AI assistant?</h3>
        <p className="mb-4">
          Cloud tools generate network traffic that can be captured. A local tool in offline mode generates no traffic. More: <LocaleLink to="/blog/is-ai-interview-assistant-detectable" className="text-primary hover:underline">is an AI assistant detectable</LocaleLink>.
        </p>
        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is my interview data stored anywhere?</h3>
        <p className="mb-4">
          In Natively's local mode, data stays in your device's local memory and is not serialized to external servers.
        </p>
      </section>
    </SEOTemplate>
  );
}
