// Single source of truth for the /blog index listing.
//
// Each entry mirrors a prerendered post in scripts/prerender.js (same slug) and is
// used only to render the human-facing blog archive at /blog. Titles are the short
// on-page titles (not the meta title with the " | Natively" suffix). `date` is the
// post's publish date (ISO yyyy-mm-dd) and drives the newest-first ordering.
//
// When you add a new blog post: add its <Route>, prerender entry, and RelatedLinks
// as usual, then add one row here so it shows up in the archive.
export interface BlogPost {
  slug: string; // path under the site root, e.g. "/blog/best-ai-meeting-assistants"
  title: string;
  excerpt: string;
  date: string; // ISO date, yyyy-mm-dd
  category: "Meetings & Calls" | "Interviews";
  ru: { title: string; excerpt: string };
}

export const BLOG_POSTS: BlogPost[] = [
  // ---- Meetings & Calls ----
  {
    slug: "/blog/how-a-call-assistant-makes-meetings-productive",
    title: "How a Call Assistant Can Make Meetings More Productive",
    excerpt:
      "A call assistant turns meetings into a workflow — live transcription, real-time support, structured notes, and follow-ups. Here is how it helps before, during, and after every call.",
    date: "2026-07-02",
    category: "Meetings & Calls",
    ru: {
      title: "Как ассистент для звонков делает встречи продуктивнее",
      excerpt:
        "Ассистент для звонков превращает встречу в рабочий процесс: живая транскрипция, помощь в реальном времени, структурированные заметки и задачи.",
    },
  },
  {
    slug: "/blog/best-ai-meeting-assistant-tools",
    title: "Best AI Meeting Assistant Tools for Private, Smart Calls",
    excerpt:
      "We rank the best AI meeting assistants for private, smart calls — Natively, Granola, Krisp, Copilot, Fathom, Fireflies, Otter, Read AI, and tl;dv — by meeting presence and real-time help.",
    date: "2026-07-02",
    category: "Meetings & Calls",
    ru: {
      title: "Лучшие ИИ-ассистенты для приватных и умных звонков",
      excerpt:
        "Рейтинг лучших ИИ-ассистентов для приватных, умных звонков — Natively, Granola, Krisp, Copilot, Fathom, Fireflies, Otter, Read AI и tl;dv.",
    },
  },
  {
    slug: "/blog/best-ai-meeting-assistants",
    title: "7 Best AI Meeting Assistants in 2026 (Tested & Ranked)",
    excerpt:
      "We tested 7 AI meeting assistants and ranked them by privacy, cost, real-time help, and local processing — Otter, Fireflies, Cluely, Natively, Fathom, tl;dv, and Granola.",
    date: "2026-06-20",
    category: "Meetings & Calls",
    ru: {
      title: "7 лучших ИИ-ассистентов для встреч в 2026 (Тест и рейтинг)",
      excerpt:
        "Мы протестировали 7 ИИ-ассистентов для встреч и оценили их по приватности, стоимости и помощи в реальном времени.",
    },
  },
  {
    slug: "/blog/best-fireflies-alternatives",
    title: "6 Best Fireflies & Otter Alternatives in 2026",
    excerpt:
      "Looking for a Fireflies.ai or Otter alternative? We ranked 6 options by privacy, price, and real-time help — including local-first Natively, which needs no bot in your call.",
    date: "2026-06-20",
    category: "Meetings & Calls",
    ru: {
      title: "6 лучших альтернатив Fireflies и Otter в 2026",
      excerpt:
        "Ищете альтернативу Fireflies.ai или Otter? Мы составили рейтинг 6 вариантов по приватности, цене и помощи в реальном времени.",
    },
  },
  {
    slug: "/blog/local-meeting-notes-without-bot",
    title: "How to Take Private Meeting Notes Without a Bot",
    excerpt:
      "Tired of a bot joining every call? Here is how to take private, AI-powered meeting notes locally — no cloud, no visible participant, no minute caps — with on-device transcription.",
    date: "2026-06-20",
    category: "Meetings & Calls",
    ru: {
      title: "Как вести приватные заметки со встреч без бота",
      excerpt:
        "Надоел бот в каждом звонке? Вот как вести приватные ИИ-заметки локально — без облака, без видимого участника и без лимитов минут.",
    },
  },
  {
    slug: "/blog/ai-note-taker-privacy-guide",
    title: "Are AI Note-Takers Private? Otter, Fireflies & Cluely",
    excerpt:
      "We explain what Otter, Fireflies, and Cluely actually do with your meeting audio — and how local, on-device note-taking keeps your conversations yours.",
    date: "2026-06-20",
    category: "Meetings & Calls",
    ru: {
      title: "Приватны ли ИИ-нотетейкеры? Otter, Fireflies и Cluely",
      excerpt:
        "Объясняем, что Otter, Fireflies и Cluely на самом деле делают с аудио ваших встреч — и как локальные заметки сохраняют разговоры приватными.",
    },
  },

  // ---- Interviews ----
  {
    slug: "/blog/ai-interview-assistant-privacy",
    title: "AI Interview Assistant Privacy: What You Need to Know",
    excerpt:
      "Where your audio and screen data go, the NDA and breach risks of cloud tools, and why local on-device processing is the safe choice for interviews.",
    date: "2026-05-20",
    category: "Interviews",
    ru: {
      title: "Приватность ИИ-ассистента для собеседований",
      excerpt:
        "Куда уходят ваши аудио и данные экрана, риски NDA и утечек у облачных инструментов, и почему локальная обработка безопаснее.",
    },
  },
  {
    slug: "/blog/interview-copilot-byok-local-llm",
    title: "BYOK & Local-LLM Interview Copilot: Bring Your Own Key",
    excerpt:
      "A BYOK interview copilot lets you use your own OpenAI, Anthropic, Gemini, or Groq key — or run a local LLM via Ollama for $0. Here is how bring-your-own-key copilots work.",
    date: "2026-05-06",
    category: "Interviews",
    ru: {
      title: "Копилот с BYOK и локальной LLM: свой ключ",
      excerpt:
        "Копилот с BYOK позволяет использовать собственный ключ OpenAI, Anthropic, Gemini или Groq — либо запускать локальную LLM через Ollama за $0.",
    },
  },
  {
    slug: "/blog/interview-copilot-pricing",
    title: "Interview Copilot Pricing Compared (2026)",
    excerpt:
      "Cluely, Final Round AI, LockedIn AI, Interview Coder, and Natively (free/BYOK) compared — see which interview copilot is genuinely free versus paid.",
    date: "2026-04-22",
    category: "Interviews",
    ru: {
      title: "Сравнение цен на копилоты для собеседований (2026)",
      excerpt:
        "Cluely, Final Round AI, LockedIn AI, Interview Coder и Natively (free/BYOK) в сравнении — какой копилот действительно бесплатен, а какой платный.",
    },
  },
  {
    slug: "/blog/best-free-ai-interview-assistant",
    title: "Best Free AI Interview Assistant in 2026 (No Credit Card)",
    excerpt:
      "Most tools are free trials only. Here are the genuinely free AI interview assistants in 2026 — including a $0 local route with no subscription.",
    date: "2026-04-08",
    category: "Interviews",
    ru: {
      title: "Лучший бесплатный ИИ-ассистент для собеседований (2026)",
      excerpt:
        "Большинство инструментов — лишь бесплатный триал. Вот действительно бесплатные варианты 2026 года, включая локальный маршрут за $0.",
    },
  },
  {
    slug: "/blog/is-cluely-safe",
    title: "Is Cluely Safe? Privacy Facts Every User Must Know",
    excerpt:
      "Cluely offers an invisible overlay, but processes audio and screen in the cloud. Here is what that means for your privacy — and the safer local alternative.",
    date: "2026-04-20",
    category: "Interviews",
    ru: {
      title: "Безопасен ли Cluely? Факты о приватности",
      excerpt:
        "Cluely предлагает невидимый оверлей, но обрабатывает аудио и экран в облаке. Что это значит для вашей приватности — и более безопасная локальная альтернатива.",
    },
  },
  {
    slug: "/blog/how-to-use-ai-in-job-interview",
    title: "How to Use AI in a Job Interview (2026 Step-by-Step)",
    excerpt:
      "A step-by-step guide to setup, live coding help, behavioral and system-design answers, plus the ethics and detection risks to know first.",
    date: "2026-03-18",
    category: "Interviews",
    ru: {
      title: "Как использовать ИИ на собеседовании (пошагово, 2026)",
      excerpt:
        "Пошаговое руководство по настройке, помощи с кодингом, поведенческим и системным ответам, а также об этике и рисках обнаружения.",
    },
  },
  {
    slug: "/blog/is-ai-interview-assistant-detectable",
    title: "Is an AI Interview Assistant Detectable? (2026)",
    excerpt:
      "How proctoring, screen share, and network monitoring catch interview tools — and why a local, zero-traffic assistant is the hardest to detect.",
    date: "2026-03-04",
    category: "Interviews",
    ru: {
      title: "Можно ли обнаружить ИИ-ассистента на собеседовании? (2026)",
      excerpt:
        "Как прокторинг, демонстрация экрана и мониторинг сети ловят инструменты — и почему локальный ассистент без трафика сложнее всего обнаружить.",
    },
  },
  {
    slug: "/blog/best-ai-interview-assistants",
    title: "7 Best AI Interview Assistants in 2026 (Tested & Ranked)",
    excerpt:
      "We tested 7 AI interview assistants — FinalRoundAI, Cluely, Natively, LockedIn AI, and more — ranked by privacy, cost, coding support, and real-time performance.",
    date: "2026-02-18",
    category: "Interviews",
    ru: {
      title: "7 лучших ИИ-ассистентов для собеседований в 2026",
      excerpt:
        "Мы протестировали 7 ИИ-ассистентов — FinalRoundAI, Cluely, Natively, LockedIn AI и другие — по приватности, стоимости и работе в реальном времени.",
    },
  },
  {
    slug: "/blog/how-ai-interview-assistants-work",
    title: "How AI Interview Assistants Work Under the Hood",
    excerpt:
      "A technical breakdown of how AI interview assistants capture audio, transcribe speech, and generate answers in real time.",
    date: "2026-03-11",
    category: "Interviews",
    ru: {
      title: "Как устроены ИИ-ассистенты для собеседований",
      excerpt:
        "Технический разбор того, как ИИ-ассистенты захватывают аудио, транскрибируют речь и генерируют ответы в реальном времени.",
    },
  },
  {
    slug: "/blog/best-ai-tools-for-coding-interviews",
    title: "The 5 Best AI Tools for Coding Interviews (2026 Guide)",
    excerpt:
      "The five best AI tools for coding interviews in 2026, compared on real-time help, LeetCode support, privacy, and price.",
    date: "2026-03-11",
    category: "Interviews",
    ru: {
      title: "5 лучших ИИ-инструментов для код-собеседований (2026)",
      excerpt:
        "Пять лучших ИИ-инструментов для код-собеседований в 2026 году: помощь в реальном времени, поддержка LeetCode, приватность и цена.",
    },
  },
  {
    slug: "/blog/preparing-for-technical-interviews-with-ai",
    title: "Preparing for Technical Interviews with AI",
    excerpt:
      "How to use AI to prepare for technical interviews — practice problems, mock questions, system design, and structured study.",
    date: "2026-03-11",
    category: "Interviews",
    ru: {
      title: "Подготовка к техническим собеседованиям с ИИ",
      excerpt:
        "Как использовать ИИ для подготовки к техническим собеседованиям — задачи, пробные вопросы, системный дизайн и структурированное обучение.",
    },
  },
  {
    slug: "/blog/how-ai-can-help-with-coding-interviews",
    title: "How AI Can Supercharge Your Next Coding Interview",
    excerpt:
      "Practical ways AI can help during a coding interview — from clarifying the problem to structuring a working solution under pressure.",
    date: "2026-03-11",
    category: "Interviews",
    ru: {
      title: "Как ИИ усилит ваше следующее код-собеседование",
      excerpt:
        "Практические способы, которыми ИИ помогает на код-собеседовании — от уточнения задачи до построения работающего решения под давлением.",
    },
  },
  {
    slug: "/blog/local-ai-vs-cloud-ai-assistants",
    title: "Local AI vs Cloud AI Assistants: Which Is Better?",
    excerpt:
      "The tradeoffs between local and cloud AI assistants — privacy, cost, latency, and offline support — and how to pick the right one.",
    date: "2026-03-11",
    category: "Interviews",
    ru: {
      title: "Локальный ИИ против облачного: что лучше?",
      excerpt:
        "Компромиссы между локальными и облачными ИИ-ассистентами — приватность, стоимость, задержка и офлайн — и как выбрать правильный.",
    },
  },
  {
    slug: "/blog/ai-interview-assistant-guide",
    title: "The Definitive Guide to Using an AI Interview Assistant",
    excerpt:
      "A comprehensive guide to maximizing an AI interview assistant to effortlessly pass technical coding interviews.",
    date: "2026-01-22",
    category: "Interviews",
    ru: {
      title: "Полное руководство по ИИ-ассистенту для собеседований",
      excerpt:
        "Подробное руководство по максимальному использованию ИИ-ассистента, чтобы легко проходить технические код-собеседования.",
    },
  },
];
