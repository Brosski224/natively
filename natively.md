# Natively Pro & API Service: Website Copy & UI Replication Brief

This document is specifically crafted for an AI website builder. It contains the complete breakdown of Natively Pro features, the Natively API service, exact pricing, checkout links, and the original React/Tailwind component code needed to faithfully replicate the high-end application UI on the marketing website.

---

## 1. Natively Pro: Standalone Features

The **Natively Pro** upgrade unlocks a suite of persistent context features. These ensure the AI is deeply personalized to the user's career rather than acting as a generic assistant.

### A. Professional Identity Graph (Profile Engine)

- **What it does:** Ingests the user's entire professional timeline—work experience, education, featured projects, and tech stacks—into a unified context graph.
- **How it works:** Instead of treating every session as a blank slate, the Profile Engine ensures the overarching AI always remembers the user’s exact skill level and past experiences. When answering questions or writing emails, the AI pulls directly from this graph to provide responses rooted in the user's actual lived experience.

### B. Job Description (JD) Intelligence & Persona Tuning

- **What it does:** Actively calibrates the AI's internal persona and coaching style to match the exact requirements of a specific job role.
- **How it works:** The user pastes a job description. The AI analyzes the implicit expectations, necessary sentiment, and core requirements of the role. It then performs a **Gap Analysis** against the user's Profile Engine data, identifying where the user aligns perfectly and where they have skill gaps that need to be addressed during an interview.

### C. Company Research & Salaries

- **What it does:** Arms the user with critical, real-time insights about the company they are interviewing with.
- **How it works:** Before an interview, the assistant pulls recent news, market positioning, company culture insights, and realistic salary bands. This provides leverage for compensation negotiations and allows the user to ask highly intelligent, context-aware questions.

### D. Mock Interviews & Intelligent Gap Analysis

- **What it does:** Conducts high-pressure, realistic practice interviews.
- **How it works:** Leveraging both the JD Intelligence and Profile Engine, the AI mimics a strict hiring manager. It doesn't just ask questions; it actively evaluates the user's responses, points out weak spots (Gap Analysis), and coaches the user on restructuring their answers using the STAR method to better highlight their accomplishments.

---

## 2. Natively API Service (Managed Backend)

The Natively API is a fully managed service for users who want a seamless experience without bringing their own API keys (BYOK) from OpenAI, Anthropic, or Deepgram. It provides managed AI generation, ultra-fast Speech-to-Text (STT), and live web searches.

_Note: All API tiers from 'Pro' and above automatically include the Natively Pro App features mentioned above._

### Plans & Pricing

All plans can use the checkout promo code **`INSIDER25`** for 25% off.

#### 1. Standard Plan — $8/month

- **Includes:** 500 AI requests/mo, 200 minutes STT/mo, 20 web searches/mo.
- **Checkout URL:** `https://checkout.dodopayments.com/buy/pdt_0NbFixGmD8CSeawb5qvVl`

#### 2. Pro Plan — $15/month _(Includes Natively Pro App)_

- **Includes:** 1,000 AI requests/mo, 500 minutes STT/mo, 100 web searches/mo.
- **Checkout URL:** `https://checkout.dodopayments.com/buy/pdt_0NcM6Aw0IWdspbsgUeCLA`

#### 3. Max Plan — $25/month _(Includes Natively Pro App)_

- **Includes:** 2,000 AI requests/mo, 1,000 minutes STT/mo, 200 web searches/mo.
- **Checkout URL:** `https://checkout.dodopayments.com/buy/pdt_0NcM7JElX4Af6LNVFS1Yf`

#### 4. Ultra Plan — $35/month _(Includes Natively Pro App)_

- **Includes:** 3,000 AI requests/mo, 2,000 minutes STT/mo, 300 web searches/mo.
- **Checkout URL:** `https://checkout.dodopayments.com/buy/pdt_0NcM7rC2kAb69TFKsZnUU`

### Free Trial Specs (No credit card needed)

- **Limits:** 10 minutes STT, 10 AI requests, 2 web searches.
- **Condition:** Bound to hardware device ID. If the local trial expires, they must upgrade.

---

## 3. Standalone Pro Licenses (Bring Your Own Key)

For users who already have OpenAI/Deepgram keys and just want to unlock the Natively Pro interface features.

- **Yearly License:** `https://checkout.dodopayments.com/buy/pdt_0NcM4QBwy0CDcPV9CXaNP`
- **Lifetime License:** `https://checkout.dodopayments.com/buy/pdt_0NbHo6EnXlNPqNcZ14OTi`

---

## 4. UI Replication Guide & Component Code

To ensure the website matches the premium aesthetic of the application, use the following React/Tailwind component snippets. They demonstrate the app's use of glassmorphism, subtle borders, high-end typography, and Framer Motion animations.

### A. The Profile Visualizer Timeline (UI Snippet)

This component visualizes the Professional Identity Graph in the app. Use this HTML/Tailwind structure on the website to showcase the "Profile Engine" feature.

```tsx
// Profile Timeline UI
<div className="bg-[#111111] rounded-xl p-5 border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 border border-green-500/20 flex items-center justify-center">
      <Briefcase size={14} />
    </div>
    <h3 className="text-sm font-bold text-white/90">Professional Timeline</h3>
  </div>

  <div className="relative pl-6 space-y-10 before:absolute before:inset-0 before:ml-[31px] before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-white/10 before:to-transparent">
    {/* Timeline Node Example */}
    <div className="relative flex gap-6 group">
      <div className="absolute left-[-29px] top-1.5 h-2 w-2 rounded-full border-[1.5px] border-white/30 bg-[#111111] group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors z-10" />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col mb-1.5">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-[13px] font-semibold text-white/90 tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
              Senior Software Engineer
            </h4>
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/40 uppercase tracking-wider shrink-0">
              <span>2020</span>
              <span className="text-white/20">—</span>
              <span>Present</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] font-medium text-white/60">
              Google
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### B. Premium Upgrade Modal & Pricing Cards (UI Snippet)

To replicate the exact look and feel of the app's upgrade screens and API quota cards. Notice the exact colors (e.g., `#FACC15` for the lifetime button) and subtle inset shadows.

```tsx
// Lifetime Purchase Button styling
<button className="w-full py-2.5 rounded-[10px] bg-[#FACC15] text-black text-[12px] font-semibold hover:bg-[#FDE047] active:scale-[0.98] transition-all duration-200 flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]">
    Purchase Lifetime
</button>

// API Plan Card styling (Dark Mode)
<div className="flex items-center gap-3 px-3.5 py-3 rounded-xl border bg-violet-500/10 border-violet-500/20">
    <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
            <span className="text-[13px] font-semibold text-violet-400">Pro</span>
            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 tracking-wide">
                + Pro App
            </span>
        </div>
        <p className="text-[10px] text-white/40 leading-relaxed">
            1,000 AI req / mo · 500 min STT · 100 searches
        </p>
    </div>
    <div className="flex items-center gap-2.5 shrink-0">
        <span className="text-[13px] font-semibold text-white/90 tabular-nums">$15<span className="text-[10px] font-normal text-white/40">/mo</span></span>
        <button className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all duration-150 flex items-center gap-1 shadow-sm">
            Get
        </button>
    </div>
</div>
```

### C. Quota Usage Bars (UI Snippet)

If building a dashboard preview on the website showing the API usage.

```tsx
// Smooth quota consumption visualizer
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Brain size={12} className="text-white/40" />
      <span className="text-[12px] text-white/60">AI Requests</span>
    </div>
    <span className="text-[12px] tabular-nums font-medium text-white/40">
      500 <span className="font-normal text-white/20">/ 1,000</span>
    </span>
  </div>
  <div className="h-[5px] w-full bg-white/5 rounded-full overflow-hidden border border-white/[0.02]">
    <div
      className="h-full rounded-full transition-all duration-700 ease-out bg-violet-500"
      style={{ width: "50%" }}
    />
  </div>
</div>
```

### Design Guidelines for AI Website Builder:

1. **Color Palette:** The app heavily uses deep dark aesthetics (`#111111` or `#000000` backgrounds), with borders set to `rgba(255,255,255,0.06)` or `border-white/[0.06]`.
2. **Typography:** Use highly legible, modern fonts (e.g., Inter or Geist). Keep text sizes generally small (`text-[12px]` to `text-[14px]`) but with tight tracking (`tracking-tight`) for an elegant, app-like feel.
3. **Pills & Badges:** Use translucent backgrounds with matching borders (e.g., `bg-green-500/10 border-green-500/20 text-green-400`).
4. **Motion:** Replicate `transition-all duration-200 ease-out` on interactive elements, with `active:scale-[0.98]` on buttons to create a spring-like feel.
5. **Shadows:** Avoid harsh solid shadows. Use diffuse colored glows (e.g., `shadow-[0_0_15px_rgba(250,204,21,0.15)]` for primary actions) and inset shadows `inset_0_1px_rgba(255,255,255,0.05)` for depth on dark cards.

# Natively: Comprehensive Product & Architecture Brief for AI Website Builders

This document contains a relentlessly detailed, exhaustive breakdown of Natively, a robust, privacy-first, desktop-native AI Meeting and Interview Assistant. This brief is designed to be fed into an AI website builder to generate long-form SEO content, massive feature grids, deep-dive technical pages, and highly-converting marketing copy.

**Core Identity:** Natively is the premier free, open-source alternative to expensive tools like Cluely, Final Round AI, LockedIn AI, and Interview Coder. It operates locally, supports any LLM via Bring-Your-Own-Key (BYOK), features sub-500ms latency, and has a flawless privacy record (unlike competitors who suffer massive data breaches).

---

## 1. The Real-Time Audio Capture Engine (Ultra-Low Latency)

Most generic electron-based meeting bots rely on browser Web APIs (like `getUserMedia`) for audio, resulting in high latency and frequent garbage-collection stuttering. Natively rebuilt this from the ground up.

- **Native Rust Core & Zero-Copy ABI:** The audio pipeline is written completely in Rust. It captures raw PCM chunks at the OS level and transfers them to the Electron Javascript layer using Zero-Copy ABI Transfers via `napi::Buffer`. This bypasses standard V8 garbage collection completely, ensuring continuous audio capture with minimal CPU usage and `<500ms` end-to-end latency.
- **Dual-Channel Intelligence:** Natively understands that listening to a meeting and speaking to an AI are two different tasks.
  - _System Audio:_ Captures high-fidelity output directly from the OS (what other people are saying) seamlessly without loopback cables.
  - _Microphone Audio:_ A dedicated channel strictly for the user's voice, allowing them to dictate private commands or questions without unmuting themselves in Zoom/Teams.
- **Hardware Sample Rate Auto-Detection:** Automatically handles high-end 48kHz audio interfaces and external studio microphones without distortion or forced downsampling artifacts.
- **Two-Stage Silence Processing (VAD):** Employs adaptive RMS (Root Mean Square) thresholding layered with WebRTC Machine Learning Voice Activity Detection (VAD) to actively reject typing noise, laptop fan noise, and background static from triggering false transcriptions.

## 2. Advanced Speech-to-Text (STT) Resilience Matrix

Live interviews cannot tolerate WebSocket crashes. Natively employs an incredibly sophisticated fault-tolerant networking system for Speech-to-Text providers (Deepgram, ElevenLabs, Google STT, Whisper, Soniox, etc.).

- **Provider Key Pooling & Round-Robin Rotation:** The app can hold up to 6 distinct API keys for providers like Deepgram. If a key hits a concurrency rate limit (1006 error), Natively instantly rotates to the next available key in the pool using a round-robin schedule without dropping the session.
- **Shadow Probing for Silent Failures:** If a primary STT provider (like Google STT) stops returning transcripts but doesn't close the connection (a "silent failure"), Natively triggers a parallel "Shadow Probe" after 90 seconds of silence using a secondary provider (like ElevenLabs) on the last 10 seconds of audio buffer. If the probe detects actual words, Natively proves the primary provider is frozen, kills the dead connection, marks it as failed, and instantly falls over to the backup.
- **Pre-Buffer Replay on Failover:** If a connection genuinely drops, Natively buffers the last 2 to 8 seconds of PCM audio. Upon successfully connecting to a fallback provider, it replays that exact audio frame so absolutely zero words are lost during the 1.5-second disconnect/reconnect window.

## 3. The Stealth & Invisiblity System (Anti-Proctoring)

A massive selling point for interview candidates is Natively's stealth.

- **Undetectable Floating Overlay:** The assistant's UI floats completely invisibly to screen-sharing architectures in Zoom, Google Meet, and MS Teams.
- **Process Disguise (Masquerading):** Proctoring tools scan task managers for suspicious executable names. Natively can instantly disguise its OS process tree to look like mundane applications ("Terminal", "System Settings", "Activity Monitor") to evade deep-level process scans.
- **No Dock/Taskbar Presence:** The application can run entirely hidden from the macOS dock or Windows taskbar, summoned only via configurable global keyboard shortcuts (e.g., `Cmd+K`).
- **Global Cross-Window Sync:** State (like the current active mode or screenshot triggers) synchronizes flawlessly between the hidden backend, the settings launcher, and the invisible overlay without relying on visible UI bridges.

## 4. Screenshot OCR & AI Coding Interview Support

Natively doubles as the ultimate technical coding assistant for platforms like LeetCode, HackerRank, CoderPad, Codility, and HackerEarth.

- **Instant Zero-Click Capture:** Users hit a single shortcut (`Cmd+Shift+Enter`) and Natively invisibly screenshots the bounding box of the active coding problem.
- **Multi-Part Problem Support:** Candidates can chain multiple screenshots together for huge systems design questions or multi-tab coding tests before calculating a single unified response.
- **Intelligent Vision Routing (Llama 4 Scout):** The image is passed through a high-speed OCR vision model (like Groq's Llama 4 Scout) to extract code instantly and feed it into the core LLM without the user typing a single word.
- _Crucially: The answer renders inside the invisible overlay. The candidate's live screen share never captures the AI's output._

## 5. Persona Stack & Active Mode Manager (7 Built-In Experts)

Natively doesn't give generic ChatGPT responses. It structurally acts out 7 meticulous personas, forcing the LLM to format answers using strict logic rules (like the STAR method).

1. **General / Co-Pilot:** Standard meeting assist.
2. **Technical Interview Mode:** Forces the AI to break down answers into: "Problem Statement", "My Approach", "Edge Cases", "Time & Space Complexity", and "Follow-up questions". Driven to output step-by-step thinking rather than just blurting out raw code.
3. **Sales Mode:** Tracks prospect objections, discovery questions, product fit, and closes.
4. **Recruiting Mode:** Correlates candidates against job requisitions.
5. **Looking For Work:** A mode optimized for behavioral interview prep.
6. **Team Meet:** Ideal for standups and blockers.
7. **Lecture Mode:** Optimized for translating educational concepts and generating formulas (LaTeX).

In the code, these aren't just suggested prompts. They are hard-overrides that rewrite the underlying instruction-set architecture of the API call before it touches the model.

## 6. Pro Intelligence (Profile Engine & Custom Context)

If a user upgrades to Natively Pro, the persona modes become supercharged.

- **Custom Context Injection:** Users have a real-time, 8,000-character custom context window where they can type dynamic "Ammunition" (e.g., "I just learned React 19, lean into that", or "My sale quota is 50k"). This is injected with priority into the `<user_context>` XML block of the prompt.
- **Reference Files Parsing:** Users can attach PDFs, DOCX, and TXT files directly to a Persona Mode. Natively extracts the text, truncates it intelligently to fit token window budgets (hard capped at 40kb to prevent overflow), and appends it to the prompt.
- **The Professional Identity Graph:** Ingests the user's exact Resume (Education, Experience, Featured Projects).
- **JD (Job Description) Intelligence:** Users paste the Job Description of the role they are interviewing for.
- **The Synergy Context Block:** During a live interview, the AI sees the spoken transcript, the user's Resume, the target Job Description, attached reference files, and the `Technical Interview` persona rules. This creates an AI that answers: _"Based on my time at Google, I used React to solve a similar challenge..."_ rather than giving generic MDN documentation.

## 7. Local RAG & Meeting Dashboard (Total Memory)

Natively doesn't just listen and forget.

- **Local Vector Database:** Uses an embedded SQLite database augmented with `sqlite-vec` to locally generate text embeddings of every meeting transcript. The data never goes to a cloud drive.
- **Sliding-Window Chunking:** When a meeting is over, Natively chunks the transcript into distinct segments with a 50-token overlap, ensuring context isn't lost at the exact point a chunk splits.
- **Conversational Recall:** Users can search the dashboard or directly ask the AI: _"What did the VP of Engineering say about the Kafka migration three weeks ago?"_ The semantic search isolates the exact transcript chunk and pulls it into context automatically.
- **Automated Mode-Specific Notes:** The moment a meeting ends, Natively generates highly structured Markdown notes. Because it is mode-aware, a Technical Interview generates notes segmented by "Algorithm Analysis", whereas a Team Meeting generates "Blockers" and "Action Items".
- **Export Power:** 1-click export to formatted Markdown, raw text, or structured JSON for Notion/Obsidian.

## 8. Anti-Chatbot Architecture

A primary feature of the LLM pipeline is the "Hard System Prompt" designed to make the AI sound like a genuine human candidate, not an AI language model.

- It strictly bans words like "Delve", "Tapestry", "Crucial", "Moreover", "Furthermore".
- It actively bans preambles like "Here is how you might answer that..." or lectures.
- It forces first-person perspective framing: _"I implemented X using Y..."_

## 9. Hosted API & Billing (Natively API Service)

For edge-case users who don't want to bring their own API keys (BYOK), Natively offers a vertically integrated cloud subscription via **Dodo Payments** using webhook integrations.

- **Plans:** Standard ($8), Pro ($15), Max ($25), Ultra ($35).
- **Features Bundle:** At Pro and above, users are automatically granted a "Pro License" for the desktop desktop app.
- **Trial Anti-Abuse:** Natively allows a fully functioning 10-Minute Free trial without an account or credit card. It utilizes hardware ID (HWID) combined with IP-hash generation to strictly lock the free trial to physical machines, preventing abuse of the free LLM and STT compute.

## 10. Apple / Tesla Tier User Interface (Web Design Guide)

The marketing website MUST reflect the absolute highest-tier precision of UI/UX design found within the app. Natively recently stripped away generic "neon AI glows" in favor of strict, structural minimalism, heavily influenced by Emil Kowalski and Apple Human Interface Guidelines.

- **Colors:** Dominant OLED Black (`#010101`, `#050505`, `#111111`) combined with very soft, desaturated accent colors. Pure, flat whites for high-emphasis text.
- **Depth & Materials:** Replicate the app's use of glassmorphism. Cards should have deep background blurs (`backdrop-blur-xl`), very soft hairline inner borders `inset 0 1px 0 rgba(255,255,255,0.05)`, and extremely diffuse box shadows instead of harsh drop-shadows.
- **Animations:** All transitions strictly use custom cubic-bezier timing functions (`cubic-bezier(0.23, 1, 0.32, 1)` or `0.32, 0.72, 0, 1`). Elements should cascade in slowly, buttons should scale down slightly on click (`active:scale-[0.98]`), and hover states should elegantly lift items up by 1 or 2 pixels while brightening their border. Do not use bounce or bouncy spring animations.
- **Typography:** The app relies on `SF Pro Display`, `-apple-system`, and `Inter`. Typography must utilize extremely tight tracking on headlines (`tracking-[-0.038em]`) and high-contrast font weights. Text is never "pure" white unless it's a hero headline; rely on `rgba(255,255,255,0.9)`, `0.6` for secondary, and `0.4` for tertiary text.
