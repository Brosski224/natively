// Data source for programmatic /interview-questions/<role> pages.
//
// Each entry is rendered by src/pages/programmatic/InterviewQuestionsPage.tsx via
// SEOTemplate. Quality gate (see SEO plan): every entry must carry a substantial,
// UNIQUE intro and 8+ real questions with genuine approach notes — never thin
// boilerplate. Do NOT mass-generate role pages from a template string; each role's
// questions and guidance are hand-written. To add a role: append an entry here AND
// register the route in routes.tsx, App.tsx, scripts/prerender.js, and sitemap.xml.

export interface InterviewQuestion {
  q: string;
  approach: string;
}

export interface RoleQuestionSet {
  /** Locale-agnostic canonical path, e.g. "/interview-questions/software-engineer". */
  path: string;
  role: string;
  title: string;
  description: string;
  h1: string;
  /** 2–3 paragraph unique intro (HTML-free plain strings, one per paragraph). */
  intro: string[];
  /** Short note on how Natively helps for this role specifically. */
  nativelyAngle: string;
  questions: InterviewQuestion[];
  /** Related internal links (locale-agnostic paths handled by RelatedLinks too). */
  related: { to: string; label: string }[];
}

export const ROLE_QUESTION_SETS: RoleQuestionSet[] = [
  {
    path: "/interview-questions/software-engineer",
    role: "Software Engineer",
    title: "Software Engineer Interview Questions (2026) | Natively",
    description:
      "Common software engineer interview questions for 2026 — coding, system design, and behavioral — each with a clear approach to structuring a strong answer.",
    h1: "Software Engineer Interview Questions (2026)",
    intro: [
      "A software engineer interview is rarely a single test. Most loops mix a coding round (data structures and algorithms), one or more system design discussions, and a behavioral interview about how you work with others. Strong candidates prepare for all three, because a brilliant algorithm score won't offset a behavioral round where you can't describe a single concrete accomplishment.",
      "The questions below are representative of what you'll actually face at companies ranging from startups to large tech firms. For each one, the value isn't a memorized answer — it's the approach: how to scope the problem, what to say out loud, and which trade-offs to surface. Interviewers are evaluating your reasoning, not just your final output.",
      "Practice answering these the way you would in a real interview: talk through your thinking, state your assumptions, and narrate trade-offs. That habit is what separates candidates who freeze under pressure from those who stay structured.",
    ],
    nativelyAngle:
      "During a live software engineering interview, Natively transcribes the question, reads on-screen code via OCR, and suggests a structured answer in under 500 ms — locally, with nothing leaving your device. Use it to stay on track across the coding, system design, and behavioral rounds.",
    questions: [
      {
        q: "Reverse a linked list — iteratively and recursively.",
        approach:
          "State the pointer-rewiring invariant first (prev, curr, next). Walk the iterative O(n) time / O(1) space version, then contrast the recursive version's O(n) stack cost. Mention the edge cases interviewers probe: empty list and single node.",
      },
      {
        q: "Find the first non-repeating character in a string.",
        approach:
          "Clarify character set and case sensitivity. Two-pass hash map (count, then scan) is O(n). Note that an ordered structure or a 26-slot array beats a generic map when the alphabet is fixed.",
      },
      {
        q: "Detect a cycle in a linked list.",
        approach:
          "Lead with Floyd's tortoise-and-hare for O(1) space, and explain why the fast pointer must eventually meet the slow one inside a cycle. Offer the hash-set alternative and compare space.",
      },
      {
        q: "Design a function to validate balanced parentheses.",
        approach:
          "Stack-based, O(n). The insight to verbalize: every closing bracket must match the most recent unmatched opener — that 'most recent' is exactly a stack. Cover the early-exit and end-of-string-nonempty failure cases.",
      },
      {
        q: "Merge two sorted arrays / lists.",
        approach:
          "Two-pointer merge in O(n+m). If asked to merge in place into the first array, explain why filling from the back avoids overwriting unprocessed elements.",
      },
      {
        q: "How would you find the kth largest element in an array?",
        approach:
          "Offer three: sort O(n log n), a size-k min-heap O(n log k), and quickselect average O(n). State when each wins, and that quickselect's worst case is O(n²) without good pivot selection.",
      },
      {
        q: "Tell me about a time you disagreed with a teammate on a technical decision.",
        approach:
          "Use STAR. Pick a real disagreement with a constructive resolution. Emphasize how you made the call objective (data, a spike, a prototype) rather than who 'won'. End with the outcome and what you learned.",
      },
      {
        q: "Describe a project you're proud of and your specific contribution.",
        approach:
          "Scope to YOUR work, not the team's. Quantify impact (latency, revenue, adoption). Interviewers want to separate your contribution from the group's, so use 'I' more than 'we'.",
      },
      {
        q: "How do you approach debugging a production issue you can't reproduce locally?",
        approach:
          "Walk a method: reproduce conditions (logs, traces, feature flags), form a hypothesis, add targeted observability, bisect. Mention rollback as a parallel mitigation while you investigate.",
      },
      {
        q: "Why do you want to work here, and why are you leaving your current role?",
        approach:
          "Be specific about the company (a product, a value, a technical challenge) — generic answers read as low effort. Frame the departure around what you're moving toward, never as complaints about the past.",
      },
    ],
    related: [
      { to: "/ai-coding-interview-helper", label: "AI Coding Interview Helper" },
      { to: "/system-design-interview-assistant", label: "System Design Interview Assistant" },
      { to: "/behavioral-interview-assistant", label: "Behavioral Interview Assistant" },
      { to: "/interview-questions/ai-engineer", label: "AI Engineer Interview Questions" },
    ],
  },
  {
    path: "/interview-questions/product-manager",
    role: "Product Manager",
    title: "Product Manager Interview Questions (2026) | Natively",
    description:
      "Common product manager interview questions for 2026 — product sense, execution, strategy, and behavioral — each with a framework for structuring a strong answer.",
    h1: "Product Manager Interview Questions (2026)",
    intro: [
      "Product manager interviews test judgment more than knowledge. A typical loop covers product sense (design and improve a product), execution and analytics (metrics, prioritization, trade-offs), strategy (market and business reasoning), and behavioral (leadership and influence without authority). There's rarely one right answer — interviewers want to see a structured, user-centered thought process.",
      "The questions below are the patterns you'll see repeatedly. For each, the approach matters more than the conclusion: define the user and goal, structure your answer with a visible framework, prioritize explicitly, and tie recommendations back to a metric. Rambling without structure is the most common way strong candidates lose PM rounds.",
      "Practice saying your framework out loud before you dive into specifics. 'Let me start by clarifying the goal and the target user, then I'll brainstorm solutions and prioritize' signals exactly the structured thinking interviewers are scoring.",
    ],
    nativelyAngle:
      "In a live PM interview, Natively transcribes the prompt and can surface a relevant framework or a metric you might forget — in real time, on your device. It helps you stay structured under pressure without reading from a script.",
    questions: [
      {
        q: "How would you improve [a product you use daily, e.g. Google Maps]?",
        approach:
          "Clarify which goal you're optimizing (engagement, retention, a segment). Pick a user persona, list their pain points, brainstorm solutions, then prioritize by impact vs effort. Close with how you'd measure success.",
      },
      {
        q: "Design a product for [a specific user group, e.g. elderly users].",
        approach:
          "Start with user needs and constraints, not features. Build personas, map the jobs-to-be-done, then propose an MVP. Explicitly state what you're cutting and why — scoping discipline is the signal.",
      },
      {
        q: "Our key metric dropped 15% last week. How do you investigate?",
        approach:
          "Segment before theorizing: is it a real drop or instrumentation? Slice by platform, geography, cohort, and time. Distinguish internal causes (a release) from external (seasonality, a competitor). Form a hypothesis, then validate.",
      },
      {
        q: "How would you decide which of three features to build next?",
        approach:
          "Name a prioritization framework (RICE, impact/effort, weighted scoring) and apply it transparently. Tie each option to the company goal and the user. The point is a defensible, explicit decision, not a gut call.",
      },
      {
        q: "What metrics would you track for [a feature, e.g. a referral program]?",
        approach:
          "Separate the primary success metric from guardrail metrics (don't let virality tank quality). Define the funnel and counter-metrics. Show you'd watch for gaming and unintended consequences.",
      },
      {
        q: "Estimate the market size for [a product or category].",
        approach:
          "Pick top-down or bottom-up and state assumptions explicitly. Bottom-up (users × frequency × price) is usually more defensible. Sanity-check the final number against something you know.",
      },
      {
        q: "How would you launch [a product] in a new market?",
        approach:
          "Cover localization, go-to-market, regulatory and competitive landscape, and a phased rollout with success criteria. Define what 'win' looks like before scaling.",
      },
      {
        q: "Tell me about a time you influenced a team without formal authority.",
        approach:
          "STAR. Show how you built alignment — data, a prototype, stakeholder one-on-ones — rather than escalating. Quantify the outcome and reflect on what made the influence stick.",
      },
      {
        q: "Describe a product decision you got wrong.",
        approach:
          "Pick a real miss with a clear lesson. Own the decision, explain what data you misread, and describe the process change you made so it wouldn't recur. Self-awareness is the signal.",
      },
      {
        q: "How do you say no to a senior stakeholder's feature request?",
        approach:
          "Anchor on the user and the roadmap goal, not on personal preference. Show the trade-off explicitly (what you'd give up), offer an alternative or a later slot, and keep the relationship intact.",
      },
    ],
    related: [
      { to: "/ai-interview-assistant", label: "AI Interview Assistant" },
      { to: "/behavioral-interview-assistant", label: "Behavioral Interview Assistant" },
      { to: "/interview-answer-generator", label: "Interview Answer Generator" },
      { to: "/interview-questions/data-scientist", label: "Data Scientist Interview Questions" },
    ],
  },
  {
    path: "/interview-questions/data-scientist",
    role: "Data Scientist",
    title: "Data Scientist Interview Questions (2026) | Natively",
    description:
      "Common data scientist interview questions for 2026 — statistics, machine learning, SQL, and case studies — each with a clear approach to answering well.",
    h1: "Data Scientist Interview Questions (2026)",
    intro: [
      "Data scientist interviews span a wide surface: probability and statistics, machine learning fundamentals, SQL and data manipulation, a product/analytics case study, and behavioral questions. The exact mix depends on whether the role leans toward analytics, ML engineering, or research, so clarifying the role's focus early is itself a good signal.",
      "For the questions below, interviewers care about rigor and communication. Can you reason about a statistical concept precisely, choose the right model for a problem and justify it, write correct SQL, and translate an ambiguous business question into a measurable analysis? Stating assumptions and explaining trade-offs matters as much as the final number.",
      "Practice explaining technical concepts simply, as if to a non-technical stakeholder. Much of the job — and much of the interview — is making a sound analysis legible to people who will act on it.",
    ],
    nativelyAngle:
      "During a live data science interview, Natively transcribes the question and can surface the definition, formula, or SQL pattern you need in real time, on your device — useful when nerves make a familiar concept momentarily slip.",
    questions: [
      {
        q: "Explain the bias-variance trade-off.",
        approach:
          "Define both error sources, then connect to model complexity: simple models underfit (high bias), complex models overfit (high variance). Tie to concrete levers — regularization, more data, cross-validation — and total error decomposition.",
      },
      {
        q: "What is p-value, and what does it not tell you?",
        approach:
          "Define it as P(data this extreme | null true). The 'not' is key: it is not the probability the hypothesis is true, and significance ≠ practical importance. Mentioning common misinterpretations is the signal.",
      },
      {
        q: "How would you handle an imbalanced classification dataset?",
        approach:
          "Start with the metric (accuracy is misleading; use precision/recall, F1, AUC-PR). Then techniques: resampling (SMOTE, undersampling), class weights, threshold tuning. Stress evaluating on the real distribution.",
      },
      {
        q: "When would you use random forest vs gradient boosting?",
        approach:
          "Contrast bagging (parallel, variance reduction, robust to overfitting) with boosting (sequential, bias reduction, higher accuracy but more tuning-sensitive). Mention training cost and interpretability trade-offs.",
      },
      {
        q: "Write a SQL query to find the second-highest salary per department.",
        approach:
          "Use a window function: DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC), filter rank = 2. Discuss the tie-handling difference between RANK, DENSE_RANK, and ROW_NUMBER.",
      },
      {
        q: "How do you detect and handle outliers?",
        approach:
          "Distinguish data errors from genuine extremes. Methods: IQR, z-score, domain thresholds, visualization. The judgment call to verbalize — removing real signal can bias the model; investigate before deleting.",
      },
      {
        q: "Design an A/B test for a new recommendation algorithm.",
        approach:
          "Define hypothesis, primary metric, and guardrails. Compute sample size from MDE and power. Address randomization unit, novelty effects, and when to stop. Pre-register the success criterion.",
      },
      {
        q: "Explain how you'd evaluate a model that's performing well offline but poorly in production.",
        approach:
          "Investigate distribution shift, train/serve skew, leakage in offline data, and feedback loops. Propose monitoring and a shadow deployment. The systems thinking is what's being tested.",
      },
      {
        q: "What's the difference between L1 and L2 regularization?",
        approach:
          "L1 (Lasso) induces sparsity and does feature selection; L2 (Ridge) shrinks coefficients smoothly. Explain geometrically why L1's corners zero out weights, and when each is preferable.",
      },
      {
        q: "Tell me about a time your analysis changed a business decision.",
        approach:
          "STAR. Show the question, your method, and crucially the communication that drove action. Quantify the outcome. Data scientists who can't influence decisions don't get hired.",
      },
    ],
    related: [
      { to: "/ai-interview-assistant", label: "AI Interview Assistant" },
      { to: "/interview-questions/ai-engineer", label: "AI Engineer Interview Questions" },
      { to: "/ai-coding-interview-helper", label: "AI Coding Interview Helper" },
      { to: "/interview-questions/software-engineer", label: "Software Engineer Interview Questions" },
    ],
  },
  {
    path: "/interview-questions/ai-engineer",
    role: "AI Engineer",
    title: "AI Engineer Interview Questions (2026) — LLMs, RAG & MLOps",
    description:
      "Common AI engineer interview questions for 2026 — LLMs, RAG, prompt engineering, evaluation, and ML systems — each with a clear approach to answering well.",
    h1: "AI Engineer Interview Questions (2026)",
    intro: [
      "The AI engineer role is newer and less standardized than software or data science, which means interviews vary widely — but a 2026 loop usually probes LLM fundamentals, retrieval-augmented generation (RAG), prompt and context engineering, evaluation, and the systems work of shipping AI features reliably. Many loops also keep a classic coding round, so don't neglect data structures.",
      "Interviewers are looking for someone who understands both the models and the engineering around them: how transformers and attention work at a conceptual level, how to ground a model with retrieval, how to evaluate non-deterministic systems, and how to control latency and cost in production. Hand-waving about 'just calling the API' is a fast way to fail.",
      "Because the field moves quickly, demonstrating that you reason from first principles — and that you ship and measure, not just prototype — matters more than reciting yesterday's benchmark numbers.",
    ],
    nativelyAngle:
      "Natively is itself a local-first AI application — on-device LLMs, local RAG with sqlite-vec, and a bring-your-own-key architecture. In a live AI engineering interview it can transcribe the question and surface a precise definition or trade-off in real time, on your device.",
    questions: [
      {
        q: "Explain how attention works in a transformer, at a high level.",
        approach:
          "Describe query/key/value, scaled dot-product attention, and why self-attention lets every token attend to every other — capturing long-range dependencies that RNNs struggle with. Mention multi-head attention's role and the quadratic cost.",
      },
      {
        q: "How would you design a RAG system for a company knowledge base?",
        approach:
          "Walk the pipeline: chunking strategy, embedding model choice, a vector store, retrieval (top-k, hybrid with keyword), reranking, and prompt assembly. Discuss chunk overlap, stale-data refresh, and citation of sources.",
      },
      {
        q: "How do you reduce hallucinations in an LLM application?",
        approach:
          "Ground with retrieval, constrain with structured outputs, lower temperature for factual tasks, add citation requirements, and verify with a second pass or rules. Stress evaluation: you can't reduce what you don't measure.",
      },
      {
        q: "How would you evaluate a non-deterministic LLM feature?",
        approach:
          "Build a labeled eval set, use rubric-based or LLM-as-judge scoring, track regression across prompt/model changes, and combine offline evals with online metrics. Mention the cost and bias caveats of LLM-as-judge.",
      },
      {
        q: "When would you fine-tune vs use RAG vs prompt engineering?",
        approach:
          "Prompt engineering first (cheapest, fastest). RAG for knowledge/freshness. Fine-tuning for behavior, format, or domain style that prompting can't reliably hit. Often a combination; justify by cost, latency, and maintainability.",
      },
      {
        q: "How do you control latency and cost in an LLM product?",
        approach:
          "Model selection by task (small models for easy turns), prompt/context trimming, caching, streaming for perceived latency, batching, and routing. Quantify: smaller context and a cheaper model can cut cost an order of magnitude.",
      },
      {
        q: "What are the trade-offs of running a model locally vs via a cloud API?",
        approach:
          "Local: privacy, no per-token cost, offline, but limited by hardware and model size. Cloud: top-tier models and scale, but cost, latency, and data leaving your device. Tie to the use case — exactly the trade-off Natively is built around.",
      },
      {
        q: "How would you choose an embedding model for retrieval?",
        approach:
          "Match the domain and language, check MTEB-style benchmarks, weigh dimension size vs storage/latency, and validate on YOUR data with a retrieval eval. Don't trust a leaderboard over a domain-specific test.",
      },
      {
        q: "Implement a simple semantic search over a set of documents.",
        approach:
          "Embed documents and the query, store vectors, compute cosine similarity (or use a vector index like sqlite-vec/FAISS), return top-k. Discuss normalization and the speed/accuracy trade-off of approximate nearest neighbor.",
      },
      {
        q: "Tell me about an AI feature you shipped and how you measured its success.",
        approach:
          "STAR. Emphasize the eval methodology and the production metric, not just the demo. AI engineers who ship and measure — rather than endlessly prototype — are what's being screened for.",
      },
    ],
    related: [
      { to: "/interview-questions/data-scientist", label: "Data Scientist Interview Questions" },
      { to: "/ai-coding-interview-helper", label: "AI Coding Interview Helper" },
      { to: "/system-design-interview-assistant", label: "System Design Interview Assistant" },
      { to: "/interview-questions/software-engineer", label: "Software Engineer Interview Questions" },
    ],
  },
];

export const ROLE_BY_PATH: Record<string, RoleQuestionSet> = Object.fromEntries(
  ROLE_QUESTION_SETS.map((r) => [r.path, r]),
);
