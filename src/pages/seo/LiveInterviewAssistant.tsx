import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function LiveInterviewAssistant() {
  return (
    <SEOTemplate
      title="Live Interview Assistant — Real-Time AI Help On Calls | Natively"
      description="A live interview assistant for real time during the call — live transcription, instant answers, and on-screen code analysis at sub-500 ms latency. Local, invisible, free."
      canonicalPath="/live-interview-assistant"
      h1="The Live Interview Assistant for Real-Time Calls"
      ru={{
        title: "Ассистент для живых собеседований — Помощь ИИ в реальном времени | Natively",
        description: "Natively — ассистент для живых собеседований, помогающий в реальном времени во время звонка: транскрипция, мгновенные ответы и анализ кода на экране с задержкой < 500 мс. Локально, незаметно и бесплатно.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is a live interview assistant</strong> that works in real time, during the call — not a prep tool you use beforehand. It transcribes the conversation, suggests answers, and reads code off your screen with end-to-end latency under 500&nbsp;milliseconds, all from an invisible overlay on your own device.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Prep tools vs live assistance</h2>
        <p className="mb-4">
          Most interview products help before the interview: practice questions, mock sessions, flashcards. Those matter, but the hardest moment is the live one — when you're on camera, the question lands, and you have a few seconds to respond well. A live interview assistant is built for that moment, surfacing help fast enough to use mid-answer without breaking your flow.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">What makes Natively work live</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Sub-500 ms latency</strong> — dual-channel audio capture in Rust with zero-copy transfers keeps help arriving in real time.</li>
          <li><strong>Live transcript intelligence</strong> — a rolling context window means suggestions reflect the whole conversation, not just the last sentence.</li>
          <li><strong>On-screen code analysis</strong> — screenshot + OCR reads LeetCode, HackerRank, CoderPad, and browser IDEs, then returns a solution with complexity analysis.</li>
          <li><strong>Contextual actions</strong> — "what should I answer?", shorten, recap, or suggest a follow-up, all on a keyboard shortcut.</li>
          <li><strong>Undetectable overlay</strong> — hidden from the dock/taskbar and from screen shares and recordings; zero outbound traffic in local mode.</li>
          <li><strong>Works on every call app</strong> — Zoom, Teams, Google Meet, and more, because it captures system audio rather than integrating with one platform.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Every round, one assistant</h2>
        <p className="mb-4">
          Because it runs live across the whole call, Natively covers each interview type as it comes: algorithms with the <LocaleLink to="/ai-coding-interview-helper" className="text-primary hover:underline">coding interview helper</LocaleLink>, architecture with the <LocaleLink to="/system-design-interview-assistant" className="text-primary hover:underline">system design assistant</LocaleLink>, and "tell me about a time…" with the <LocaleLink to="/behavioral-interview-assistant" className="text-primary hover:underline">behavioral assistant</LocaleLink>. For the privacy details, see <LocaleLink to="/undetectable-interview-ai" className="text-primary hover:underline">undetectable interview AI</LocaleLink>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">How is a live interview assistant different from interview prep?</h3>
        <p className="mb-4">
          Prep tools help before the interview; a live assistant helps during it. Natively transcribes the actual conversation and surfaces answers in real time, so you get help in the moment a question is asked rather than only when practicing.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can the interviewer see it?</h3>
        <p className="mb-4">
          No. The overlay is hidden from screen shares and recordings and doesn't appear in the call. In local mode it also generates zero network traffic. It is not, however, designed to defeat dedicated proctoring software like ProctorU or Respondus Lockdown Browser.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does it work on Zoom and Teams?</h3>
        <p className="mb-4">
          Yes. Because Natively captures your system audio rather than plugging into a specific platform, it works with Zoom, Microsoft Teams, Google Meet, and any other video call app.
        </p>
      </section>
    </SEOTemplate>
  );
}
