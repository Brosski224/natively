import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function OfflineAIInterview() {
  return (
    <SEOTemplate
      title="Offline AI Interview Assistant — Works Without Internet | Natively"
      description="Need an AI interview assistant that works offline? Natively runs 100% without internet — powered by Ollama and local models. Zero cloud, zero network, zero traceable traffic."
      canonicalPath="/offline-ai-interview"
      h1="Offline AI Interview Assistant: Works Without Internet"
      ru={{
        title: "Офлайн ИИ-ассистент для собеседований — Без интернета | Natively",
        description: "Нужен ИИ-ассистент для собеседований, работающий офлайн? Natively работает 100% без интернета — на Ollama и локальных моделях. Без облака и трафика.",
        h1: "Офлайн ИИ-ассистент для собеседований: Работает без интернета",
        children: (
          <>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Зачем нужен офлайн ИИ-ассистент для интервью</h2>
              <p className="mb-4">
                Большинство ИИ-ассистентов для собеседований требуют постоянного интернет-соединения. Это создаёт три проблемы: риск обнаружения (сетевой трафик к API-серверам), риск приватности (данные уходят в облако) и зависимость от соединения (что если интернет упадёт во время интервью?).
              </p>
              <p className="mb-4">
                Natively с Ollama устраняет все три проблемы. После начальной настройки Natively работает полностью офлайн — никаких API, никакого трафика, никаких данных за пределами вашего устройства.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Как работает офлайн-помощь ИИ на собеседованиях с Natively + Ollama</h2>
              <p className="mb-4">
                Ollama — это среда выполнения с открытым исходным кодом, позволяющая скачивать и запускать большие языковые модели прямо на вашем Mac или Windows-машине. При настройке с Natively весь ИИ-конвейер работает локально:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Транскрипция аудио</strong> — выполняется через локальную модель Whisper (Deepgram или облачный STT не нужны)</li>
                <li><strong>Захват экрана и OCR</strong> — выполняется через нативные API macOS/Windows, целиком на устройстве</li>
                <li><strong>Вывод LLM</strong> — выполняется через Ollama на вашем локальном GPU или CPU</li>
                <li><strong>Отображение ответа</strong> — рендерится локально в прозрачном оверлее</li>
              </ul>
              <p className="mb-4">
                После начального скачивания модели (разовая операция, требующая интернета) приложение работает неограниченно долго без какого-либо сетевого соединения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Настройка вашего офлайн ИИ-ассистента для собеседований</h2>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 1: Установите Ollama</h3>
              <p className="mb-4">
                Скачайте Ollama с <a href="https://ollama.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ollama.ai</a>. Доступно для macOS (Apple Silicon + Intel) и Windows. Установка занимает менее 2 минут.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 2: Скачайте модель, оптимизированную для кода</h3>
              <p className="mb-4">Откройте терминал и выполните одну из этих команд в зависимости от вашего оборудования:</p>

              <div className="bg-muted/30 rounded-lg p-4 mb-4 font-mono text-sm">
                <p className="text-muted-foreground mb-2"># Лучше всего для собеседований по кодингу (рекомендуется 16 ГБ+ ОЗУ):</p>
                <p className="text-green-400">ollama pull deepseek-coder:33b</p>
                <p className="text-muted-foreground mt-4 mb-2"># Хороший баланс для Mac с 8 ГБ ОЗУ:</p>
                <p className="text-green-400">ollama pull deepseek-coder:6.7b</p>
                <p className="text-muted-foreground mt-4 mb-2"># Универсальная + быстрая (8 ГБ+ ОЗУ):</p>
                <p className="text-green-400">ollama pull llama3.1:8b</p>
                <p className="text-muted-foreground mt-4 mb-2"># Специализированная модель для кода (лёгкая):</p>
                <p className="text-green-400">ollama pull qwen2.5-coder:7b</p>
              </div>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 3: Установите Natively</h3>
              <p className="mb-4">
                Скачайте Natively с <LocaleLink to="/" className="text-primary hover:underline">natively.software</LocaleLink>. Установите .dmg (macOS) или .exe (Windows) и предоставьте разрешения на запись экрана и микрофон.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 4: Настройте Ollama в качестве ИИ-провайдера</h3>
              <p className="mb-4">
                В настройках Natively выберите <strong>Ollama</strong> в качестве ИИ-провайдера и укажите загруженную модель. Natively автоматически подключится к локальному серверу Ollama, работающему на <code className="bg-muted px-1 rounded">localhost:11434</code>.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Шаг 5: Протестируйте перед собеседованием</h3>
              <p className="mb-4">
                Проведите тестовую сессию с отключённым интернетом, чтобы подтвердить полностью офлайн-работу. Включите режим полёта, запустите Natively и убедитесь, что он отвечает на вопросы. Если отвечает — вы готовы.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Требования к оборудованию для офлайн-помощи ИИ на собеседованиях</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/50 text-foreground">
                      <th className="p-4 border-b border-border/50 font-semibold">Оборудование</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Рекомендуемая модель</th>
                      <th className="p-4 border-b border-border/50 font-semibold">Производительность</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Apple M1/M2/M3 (8 ГБ ОЗУ)</td>
                      <td className="p-4 border-b border-border/50">DeepSeek Coder 6.7B / Qwen2.5 7B</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Отлично — ускорение Neural Engine</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Apple M1/M2/M3 Pro/Max (16 ГБ+ ОЗУ)</td>
                      <td className="p-4 border-b border-border/50">DeepSeek Coder 33B</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Выдающаяся — качество, близкое к облаку</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Windows (NVIDIA GPU 8 ГБ+)</td>
                      <td className="p-4 border-b border-border/50">DeepSeek Coder 6.7B / Llama 3.1 8B</td>
                      <td className="p-4 border-b border-border/50 text-green-500 font-medium">Отлично — вывод на GPU</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Windows (только CPU, 16 ГБ ОЗУ)</td>
                      <td className="p-4 border-b border-border/50">Llama 3.1 8B / Mistral 7B</td>
                      <td className="p-4 border-b border-border/50 text-yellow-500">Хорошо — медленнее, но работоспособно</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/50 font-medium">Intel Mac (8 ГБ ОЗУ)</td>
                      <td className="p-4 border-b border-border/50">Mistral 7B / Qwen2.5 7B</td>
                      <td className="p-4 border-b border-border/50 text-yellow-500">Приемлемо — время ответа 5–15 с</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Для наилучшего офлайн-опыта идеален Mac на Apple Silicon (M1 или новее) с 16 ГБ единой памяти. Ускорение Neural Engine обеспечивает время ответа менее 2 секунд даже для сложных объяснений алгоритмов.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Часто задаваемые вопросы</h2>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Может ли Natively работать на 100% офлайн вообще без интернета?</h3>
              <p className="mb-4">
                Да. С настроенным Ollama Natively требует интернет только для начального скачивания модели. После этого он работает неограниченно долго в режиме полёта. Без API-ключей. Без облачных вызовов.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Как офлайн-ИИ сравнивается с облачным ИИ для собеседований по кодингу?</h3>
              <p className="mb-4">
                Для стандартных задач в стиле LeetCode DeepSeek Coder 33B, работающий локально, показывает результаты, сопоставимые с GPT-3.5, и приближается к качеству GPT-4 на большинстве вопросов по алгоритмам. Для очень сложных задач на рассуждение облачные модели (Claude 3.5, GPT-4o) всё ещё имеют преимущество — но вы можете использовать BYOK для доступа к ним, сохраняя при этом локальную транскрипцию приватной.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Работает ли офлайн-режим с невидимым оверлеем?</h3>
              <p className="mb-4">
                Да. Невидимый оверлей — это базовая функция Natively, независимая от ИИ-бэкенда. Она работает одинаково как в офлайн-режиме (Ollama), так и в облачном (BYOK).
              </p>

              <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Является ли Natively единственным офлайн ИИ-ассистентом для собеседований?</h3>
              <p className="mb-4">
                Да. По состоянию на 2026 год Natively — единственный специально созданный ИИ-ассистент для собеседований, поддерживающий полноценную офлайн-работу через Ollama. Конкуренты вроде FinalRoundAI, Cluely и LockedIn AI требуют постоянного интернет-соединения.
              </p>
            </section>
          </>
        )
      }}
    >
      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why an Offline AI Interview Assistant Matters</h2>
        <p className="mb-4">
          Most AI interview assistants require constant internet connectivity. This creates three distinct problems for job seekers:
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-6">
          <li><strong>Detection risk</strong> — Continuous API calls to cloud AI servers generate network traffic that sophisticated employers or proctored platforms can detect</li>
          <li><strong>Privacy exposure</strong> — Your audio, screen content, and interview Q&A are transmitted to cloud infrastructure you don't control</li>
          <li><strong>Connection dependency</strong> — A dropped connection mid-interview means losing your AI assistance at the worst possible moment</li>
        </ol>
        <p className="mb-4">
          Natively solves all three through fully offline operation powered by <a href="https://ollama.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ollama</a> and locally-hosted language models.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">How Offline AI Interview Assistance Works with Natively + Ollama</h2>
        <p className="mb-4">
          Ollama is an open-source runtime that lets you download and run large language models directly on your Mac or Windows machine. When configured with Natively, the entire AI pipeline runs locally:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Audio transcription</strong> — Runs via local Whisper model (no Deepgram or cloud STT needed)</li>
          <li><strong>Screen capture & OCR</strong> — Runs via native macOS/Windows APIs, entirely on-device</li>
          <li><strong>LLM inference</strong> — Runs via Ollama on your local GPU or CPU</li>
          <li><strong>Response display</strong> — Rendered locally in the transparent overlay</li>
        </ul>
        <p className="mb-4">
          After initial model download (a one-time operation requiring internet), the application runs indefinitely without any network connection.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Setting Up Your Offline AI Interview Assistant</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 1: Install Ollama</h3>
        <p className="mb-4">
          Download Ollama from <a href="https://ollama.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ollama.ai</a>. Available for macOS (Apple Silicon + Intel) and Windows. Installation takes under 2 minutes.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 2: Download a Coding-Optimized Model</h3>
        <p className="mb-4">Open Terminal and run one of these commands based on your hardware:</p>

        <div className="bg-muted/30 rounded-lg p-4 mb-4 font-mono text-sm">
          <p className="text-muted-foreground mb-2"># Best for coding interviews (16GB+ RAM recommended):</p>
          <p className="text-green-400">ollama pull deepseek-coder:33b</p>
          <p className="text-muted-foreground mt-4 mb-2"># Good balance for 8GB RAM Macs:</p>
          <p className="text-green-400">ollama pull deepseek-coder:6.7b</p>
          <p className="text-muted-foreground mt-4 mb-2"># General purpose + fast (8GB+ RAM):</p>
          <p className="text-green-400">ollama pull llama3.1:8b</p>
          <p className="text-muted-foreground mt-4 mb-2"># Specialized code model (lightweight):</p>
          <p className="text-green-400">ollama pull qwen2.5-coder:7b</p>
        </div>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 3: Install Natively</h3>
        <p className="mb-4">
          Download Natively from <LocaleLink to="/" className="text-primary hover:underline">natively.software</LocaleLink>. Install the .dmg (macOS) or .exe (Windows) and grant screen recording + microphone permissions.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 4: Configure Ollama as Your AI Provider</h3>
        <p className="mb-4">
          In Natively's settings, select <strong>Ollama</strong> as your AI provider and choose your downloaded model. Natively will automatically connect to the local Ollama server running on <code className="bg-muted px-1 rounded">localhost:11434</code>.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Step 5: Test Before Your Interview</h3>
        <p className="mb-4">
          Run a test session with your internet disabled to confirm fully offline operation. Enable airplane mode, start Natively, and verify it responds to questions. If it does, you're ready.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Hardware Requirements for Offline AI Interview Assistance</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-foreground">
                <th className="p-4 border-b border-border/50 font-semibold">Hardware</th>
                <th className="p-4 border-b border-border/50 font-semibold">Recommended Model</th>
                <th className="p-4 border-b border-border/50 font-semibold">Performance</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Apple M1/M2/M3 (8GB RAM)</td>
                <td className="p-4 border-b border-border/50">DeepSeek Coder 6.7B / Qwen2.5 7B</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Excellent — Neural Engine acceleration</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Apple M1/M2/M3 Pro/Max (16GB+ RAM)</td>
                <td className="p-4 border-b border-border/50">DeepSeek Coder 33B</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Outstanding — near-cloud quality</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Windows (NVIDIA GPU 8GB+)</td>
                <td className="p-4 border-b border-border/50">DeepSeek Coder 6.7B / Llama 3.1 8B</td>
                <td className="p-4 border-b border-border/50 text-green-500 font-medium">Excellent — GPU inference</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Windows (CPU only, 16GB RAM)</td>
                <td className="p-4 border-b border-border/50">Llama 3.1 8B / Mistral 7B</td>
                <td className="p-4 border-b border-border/50 text-yellow-500">Good — slower but functional</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border/50 font-medium">Intel Mac (8GB RAM)</td>
                <td className="p-4 border-b border-border/50">Mistral 7B / Qwen2.5 7B</td>
                <td className="p-4 border-b border-border/50 text-yellow-500">Adequate — 5–15s response time</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4">
          For the best offline experience, an Apple Silicon Mac (M1 or newer) with 16GB unified memory is ideal. The Neural Engine acceleration delivers response times under 2 seconds even for complex algorithm explanations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can Natively run 100% offline with no internet at all?</h3>
        <p className="mb-4">
          Yes. With Ollama configured, Natively requires internet only for the initial model download. After that, it runs indefinitely in airplane mode. No API keys. No cloud calls.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">How does offline AI compare to cloud AI for coding interviews?</h3>
        <p className="mb-4">
          For standard LeetCode-style problems, DeepSeek Coder 33B running locally performs comparably to GPT-3.5 and approaches GPT-4 quality on most algorithm questions. For very complex reasoning tasks, cloud models (Claude 3.5, GPT-4o) still have an edge — but you can use BYOK to access those while keeping local transcription private.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does offline mode work with the invisible overlay?</h3>
        <p className="mb-4">
          Yes. The invisible overlay is a core Natively feature independent of the AI backend. It works the same in both offline (Ollama) and cloud (BYOK) modes.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is Natively the only offline AI interview assistant?</h3>
        <p className="mb-4">
          Yes. As of 2026, Natively is the only purpose-built AI interview assistant that supports full offline operation via Ollama. Competitors like FinalRoundAI, Cluely, and LockedIn AI all require continuous internet connectivity.
        </p>
      </section>
    </SEOTemplate>
  );
}
