import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function UndetectableInterviewAI() {
  return (
    <SEOTemplate
      title="Undetectable Interview AI — Invisible AI Assistant for Interviews | Natively"
      description="The only AI interview assistant with zero network traffic in local mode. Natively runs 100% on-device — no cloud pings, no detectable outbound data. Stay invisible during any technical interview."
      canonicalPath="/undetectable-interview-ai"
      h1="Undetectable Interview AI: How Natively Stays Invisible During Your Interview"
      ru={{
        title: "Неопределяемый AI для собеседований — Невидимый ИИ-ассистент | Natively",
        description: "Единственный AI-ассистент с нулевым сетевым трафиком в локальном режиме. Natively работает 100% на устройстве — без облачных запросов, без обнаруживаемых данных.",
        h1: "Неопределяемый AI для собеседований: как Natively остаётся невидимым",
        children: (
          <>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Почему другие AI-ассистенты обнаруживаемы</h2>
              <p className="mb-4">
                Большинство AI-ассистентов для собеседований — Cluely, FinalRoundAI, LockedIn AI, Interview Coder — работают в облаке. Это означает, что каждый раз, когда вы задаёте вопрос, ваше устройство отправляет данные на удалённые серверы. Этот трафик создаёт обнаруживаемые сигнатуры на корпоративных сетях.
              </p>
              <p className="mb-4">
                Natively работает принципиально иначе. В <LocaleLink to="/offline-ai-interview" className="text-primary hover:underline">локальном режиме через Ollama</LocaleLink>, все вычисления происходят исключительно на вашем устройстве. Нулевые исходящие запросы. Нулевой сетевой трафик. Нечего обнаруживать.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Уровни невидимости Natively</h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 text-foreground">
                      <th className="p-4 border-b border-border/50 font-semibold">Уровень обнаружения</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Облачные инструменты</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Natively (локальный режим)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Сетевой мониторинг</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Обнаруживаем — AI API запросы</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Невидим — нет исходящего трафика</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Скриншот/запись экрана</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Видим как отдельное окно</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Невидим — системный оверлей</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Список процессов</td>
                      <td className="p-4 border-b border-border/50 text-yellow-400">Может быть виден</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Нативное приложение — минимальный след</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Три слоя невидимости в Natively</h2>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Слой 1: Нулевой сетевой трафик (локальный режим)</h3>
              <p className="mb-4">
                При использовании Natively с Ollama и локальной моделью (Llama 3, DeepSeek, Mistral или любой моделью в формате GGUF) приложение выполняет <strong>ноль исходящих сетевых запросов</strong> во время вашей сессии собеседования. Инструмент сетевого мониторинга, наблюдающий за вашим соединением, не увидит никакого трафика к ИИ-API — потому что его нет. ИИ работает целиком на CPU/GPU вашей машины.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Слой 2: Невидимый экранный оверлей</h3>
              <p className="mb-4">
                Natively отображает подсказки через <strong>оверлей системного уровня</strong>, который не появляется в записях экрана, демонстрациях экрана или скриншотах, захваченных программами видеоконференций. Когда вы демонстрируете экран в Zoom, Google Meet или Microsoft Teams, интервьюеры видят только то, что вы хотите им показать. Интерфейс Natively для них невидим.
              </p>
              <p className="mb-4">
                Это тот же принцип, что используется в телесуфлёрах для презентаций и проекционных дисплеях — оверлей существует на вашем экране, но исключён из вывода захвата экрана.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Слой 3: Архитектура нативного приложения</h3>
              <p className="mb-4">
                В отличие от браузерных расширений или приложений на базе Electron с более заметным следом, Natively построен как нативное приложение для macOS и Windows. Оно не внедряется в браузеры, не требует повышенных прав сверх доступа к записи экрана и микрофону и работает с минимальной сигнатурой процесса.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Обнаруживаемый против неопределяемого: сравнение</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 text-foreground">
                      <th className="p-4 border-b border-border/50 font-semibold">Вектор обнаружения</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Облачные ИИ-инструменты (Cluely, FinalRoundAI и др.)</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Natively (локальный режим)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Сетевой мониторинг</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Обнаруживаем — исходящие вызовы ИИ-API</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Неопределяем — нулевой исходящий трафик</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Демонстрация / запись экрана</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Виден как отдельное окно приложения</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Невидим — исключён из захвата экрана</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Прокторинговое ПО</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Помечается прокторинговыми инструментами сетевого уровня</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Не помечается — нет сетевых вызовов для обнаружения</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Мониторинг корпоративного VPN</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Трафик ИИ-API виден в логах VPN</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Нет трафика — офлайн-обработка ИИ</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Анализ DNS / файрвола</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Резолвит домены ИИ-провайдеров (openai.com, anthropic.com)</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Нет DNS-запросов во время собеседования</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Работа в ограниченных сетях</td>
                      <td className="p-4 border-b border-border/50 text-red-400">Не работает, если домены ИИ-API заблокированы</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Да — интернет не требуется</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Настройка Natively для максимальной неопределяемости</h2>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 1: Установите Ollama</h3>
              <p className="mb-4">
                Ollama — это бесплатная среда выполнения локального ИИ с открытым исходным кодом. Скачайте её с ollama.com и установите на свой Mac или Windows-машину. Она работает в фоновом режиме и предоставляет локальные языковые модели для Natively.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 2: Загрузите локальную модель</h3>
              <p className="mb-4">
                Выполните <code className="bg-muted px-2 py-1 rounded text-sm">ollama pull llama3</code> или <code className="bg-muted px-2 py-1 rounded text-sm">ollama pull deepseek-coder</code>, чтобы скачать локальную ИИ-модель. DeepSeek Coder специально оптимизирован для задач на собеседованиях по программированию. Llama 3 отлично подходит для системного дизайна и поведенческих вопросов.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 3: Настройте Natively на использование локальной модели</h3>
              <p className="mb-4">
                В настройках Natively выберите «Ollama» в качестве ИИ-провайдера и укажите загруженную модель. С этого момента вся обработка ИИ происходит локально. Вы можете полностью отключить интернет, и Natively продолжит работать на протяжении всего собеседования.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 4: Начните собеседование</h3>
              <p className="mb-4">
                Запустите Natively, предоставьте разрешения на запись экрана и микрофон и начните собеседование. Natively пассивно слушает, распознаёт вопросы и выводит подсказки ИИ в свой невидимый оверлей. Ваш интервьюер не видит ничего. Ваши сетевые логи не показывают ничего. Ваша запись экрана не показывает ничего.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Облачный режим: всё ещё приватнее, чем у конкурентов</h2>
              <p className="mb-4">
                Если вы предпочитаете облачные ИИ-модели (GPT-4o, Claude 3.5 Sonnet, Gemini Pro) для более сложных рассуждений, Natively поддерживает модель <strong>Bring Your Own Key (BYOK)</strong>. Вы предоставляете собственный API-ключ от OpenAI, Anthropic, Google или OpenRouter — Natively никогда не имеет доступа к вашим учётным данным или биллингу.
              </p>
              <p className="mb-4">
                В облачном режиме BYOK трафик действительно покидает ваше устройство — но направляется к ИИ-провайдеру, которому вы уже доверяете, через ваш собственный аккаунт, а не через стороннего посредника вроде Cluely или FinalRoundAI. Ваши данные собеседования регулируются вашими собственными условиями API, а не политикой конфиденциальности вендора инструмента для интервью.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Часто задаваемые вопросы</h2>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Является ли Natively полностью неопределяемым?</h3>
              <p className="mb-4">
                В локальном режиме (Ollama) Natively генерирует нулевой исходящий сетевой трафик во время собеседования. Оверлей исключён из записей экрана. Никакие домены ИИ-API не запрашиваются. На уровне сети и экрана он неопределяем. Единственное исключение — если проктор физически наблюдает за вашим экраном, но это касается любого ассистента.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Может ли прокторинговое ПО обнаружить Natively?</h3>
              <p className="mb-4">
                Большинство прокторингового ПО работает за счёт мониторинга сетевого трафика, захвата скриншотов или ограничения запущенных процессов. Natively в локальном режиме не оставляет сетевого следа. Его оверлей исключён из захватов экрана. Оно работает как обычное нативное настольное приложение, неотличимое от любого другого приложения для продуктивности.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Почему облачные инструменты вроде Cluely обнаруживаемы?</h3>
              <p className="mb-4">
                Облачные инструменты вынуждены отправлять ваш экран или аудио на удалённые ИИ-серверы, чтобы генерировать подсказки. Это создаёт исходящий трафик в реальном времени к идентифицируемым эндпоинтам (например, api.openai.com, cluely.com). В наблюдаемых сетях этот трафик логируется и может быть проанализирован. Локальный режим Natively полностью это устраняет.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Какие локальные ИИ-модели лучше всего подходят для технических собеседований?</h3>
              <p className="mb-4">
                Для задач по программированию: <strong>DeepSeek Coder V2</strong> (отличные рассуждения об алгоритмах), <strong>Qwen2.5 Coder</strong> (силён в паттернах LeetCode). Для системного дизайна и поведенческих вопросов: <strong>Llama 3.1 8B или 70B</strong> (широкие рассуждения), <strong>Mistral 7B</strong> (быстрые ответы на стандартном оборудовании). Все доступны через Ollama бесплатно.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Работает ли Natively в ограниченных корпоративных сетях?</h3>
              <p className="mb-4">
                Да. Если корпоративная сеть блокирует домены ИИ-API или ограничивает исходящий трафик, облачные инструменты вроде FinalRoundAI и LockedIn AI перестанут работать. Natively в локальном режиме не устанавливает исходящих соединений — он работает одинаково в любой сети, включая изолированные (air-gapped) среды.
              </p>
            </section>
          </>
        )
      }}
    >
      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why Most Interview AI Tools Can Be Detected</h2>
        <p className="mb-4">
          Every cloud-based AI interview tool — Cluely, FinalRoundAI, LockedIn AI, Interview Coder — has the same architectural weakness: they process your data on remote servers. This means every time you need an AI suggestion, your device makes an outbound API call. That call is visible.
        </p>
        <p className="mb-4">
          On corporate networks, outbound traffic to AI API endpoints (OpenAI, Anthropic, proprietary servers) can be logged by network monitoring software. Unusual traffic patterns during an interview session create detectable signatures. This is why some companies have started monitoring for AI tool usage during remote technical assessments.
        </p>
        <p className="mb-4">
          Natively was engineered from the ground up to eliminate this vulnerability. In local mode (powered by Ollama), <strong>all AI inference runs on your device</strong>. There are no outbound API calls. No network traffic. Nothing to detect.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Three Layers of Invisibility in Natively</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Layer 1: Zero Network Traffic (Local Mode)</h3>
        <p className="mb-4">
          When using Natively with Ollama and a local model (Llama 3, DeepSeek, Mistral, or any GGUF-format model), the application makes <strong>zero outbound network requests</strong> during your interview session. A network monitoring tool watching your connection will see no AI API traffic — because there is none. The AI runs entirely within your machine's CPU/GPU.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Layer 2: Invisible Screen Overlay</h3>
        <p className="mb-4">
          Natively displays suggestions through a <strong>system-level overlay</strong> that does not appear in screen recordings, screen shares, or screenshots captured by video conferencing software. When you share your screen on Zoom, Google Meet, or Microsoft Teams, interviewers see only what you intend to show. The Natively interface is invisible to them.
        </p>
        <p className="mb-4">
          This is the same principle used by presentation teleprompters and heads-up displays — the overlay exists on your screen but is excluded from the screen-capture output.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Layer 3: Native Application Architecture</h3>
        <p className="mb-4">
          Unlike browser extensions or Electron-based apps that have a larger visible footprint, Natively is built as a native macOS and Windows application. It doesn't inject into browsers, doesn't require elevated permissions beyond screen recording and microphone access, and runs with a minimal process signature.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Detectable vs Undetectable: A Comparison</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-foreground">
                <th className="p-4 border-b border-border/50 font-semibold">Detection Vector</th>
                <th className="p-4 border-b border-border/50 font-semibold">Cloud AI Tools (Cluely, FinalRoundAI, etc.)</th>
                <th className="p-4 border-b border-border/50 font-semibold">Natively (Local Mode)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Network monitoring</td>
                <td className="p-4 border-b border-border/50 text-red-400">Detectable — outbound AI API calls</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Undetectable — zero outbound traffic</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Screen share / recording</td>
                <td className="p-4 border-b border-border/50 text-red-400">Visible as a separate application window</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Invisible — excluded from screen capture</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Proctoring software</td>
                <td className="p-4 border-b border-border/50 text-red-400">Flagged by network-level proctoring tools</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Not flagged — no network calls to detect</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Corporate VPN monitoring</td>
                <td className="p-4 border-b border-border/50 text-red-400">AI API traffic visible in VPN logs</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">No traffic — offline AI processing</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">DNS / firewall analysis</td>
                <td className="p-4 border-b border-border/50 text-red-400">Resolves AI provider domains (openai.com, anthropic.com)</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">No DNS lookups during interview</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Works on restricted networks</td>
                <td className="p-4 border-b border-border/50 text-red-400">Breaks if AI API domains are blocked</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Yes — no internet required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Setting Up Natively for Maximum Undetectability</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 1: Install Ollama</h3>
        <p className="mb-4">
          Ollama is a free, open-source local AI runtime. Download it from ollama.com and install it on your Mac or Windows machine. It runs in the background and serves local language models to Natively.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 2: Pull a Local Model</h3>
        <p className="mb-4">
          Run <code className="bg-muted px-2 py-1 rounded text-sm">ollama pull llama3</code> or <code className="bg-muted px-2 py-1 rounded text-sm">ollama pull deepseek-coder</code> to download a local AI model. DeepSeek Coder is specifically optimized for coding interview problems. Llama 3 is excellent for system design and behavioral questions.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 3: Configure Natively to Use Local Model</h3>
        <p className="mb-4">
          In Natively's settings, select "Ollama" as your AI provider and choose your downloaded model. From this point, all AI processing happens locally. You can disconnect your internet entirely and Natively will continue to function for the duration of your interview.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 4: Start Your Interview</h3>
        <p className="mb-4">
          Launch Natively, grant screen recording and microphone permissions, and begin your interview. Natively listens passively, detects questions, and surfaces AI suggestions in its invisible overlay. Your interviewer sees nothing. Your network logs show nothing. Your screen recording shows nothing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Cloud Mode: Still More Private Than Competitors</h2>
        <p className="mb-4">
          If you prefer cloud-grade AI models (GPT-4o, Claude 3.5 Sonnet, Gemini Pro) for more complex reasoning, Natively supports a <strong>Bring Your Own Key (BYOK)</strong> model. You supply your own API key from OpenAI, Anthropic, Google, or OpenRouter — Natively never has access to your credentials or billing.
        </p>
        <p className="mb-4">
          In BYOK cloud mode, traffic does leave your device — but to the AI provider you already trust, using your own account, not through a third-party intermediary like Cluely or FinalRoundAI. Your interview data is governed by your own API terms, not by an interview tool vendor's privacy policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is Natively completely undetectable?</h3>
        <p className="mb-4">
          In local mode (Ollama), Natively generates zero outbound network traffic during your interview. The overlay is excluded from screen recordings. No AI API domains are contacted. At the network and screen level, it is undetectable. The only exception is if a proctor physically observes your physical screen — but that applies to any assistant.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can proctoring software detect Natively?</h3>
        <p className="mb-4">
          Most proctoring software works by monitoring network traffic, capturing screenshots, or restricting running processes. Natively in local mode leaves no network footprint. Its overlay is excluded from screen captures. It runs as a normal native desktop application, indistinguishable from any other productivity app.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Why are cloud-based tools like Cluely detectable?</h3>
        <p className="mb-4">
          Cloud tools must send your screen or audio to remote AI servers to generate suggestions. This creates real-time outbound traffic to identifiable endpoints (e.g., api.openai.com, cluely.com). On monitored networks, this traffic is logged and can be analyzed. Natively's local mode eliminates this entirely.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">What local AI models work best for technical interviews?</h3>
        <p className="mb-4">
          For coding problems: <strong>DeepSeek Coder V2</strong> (excellent algorithm reasoning), <strong>Qwen2.5 Coder</strong> (strong on LeetCode patterns). For system design and behavioral: <strong>Llama 3.1 8B or 70B</strong> (broad reasoning), <strong>Mistral 7B</strong> (fast responses on standard hardware). All are available via Ollama at zero cost.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does Natively work on restricted corporate networks?</h3>
        <p className="mb-4">
          Yes. If a corporate network blocks AI API domains or restricts outbound traffic, cloud-based tools like FinalRoundAI and LockedIn AI will fail. Natively in local mode makes no outbound connections — it works identically on any network, including air-gapped environments.
        </p>
      </section>
    </SEOTemplate>
  );
}
