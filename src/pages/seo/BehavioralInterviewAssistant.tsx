import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function BehavioralInterviewAssistant() {
  return (
    <SEOTemplate
      title="AI Behavioral Interview Assistant — STAR Answers Live | Natively"
      description="Natively is a local AI behavioral interview assistant. Get real-time STAR-method structure, natural human-sounding answers, and resume-grounded examples during live behavioral rounds — private and free."
      canonicalPath="/behavioral-interview-assistant"
      h1="The AI Behavioral Interview Assistant"
      ru={{
        title: "ИИ-ассистент для поведенческих собеседований — STAR | Natively",
        description: "Natively — локальный ИИ-ассистент для поведенческих собеседований. Реальное время: структура STAR, естественные ответы и примеры из вашего резюме — приватно и бесплатно.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is a local AI behavioral interview assistant</strong> that helps you answer "tell me about a time…" questions with a clear STAR structure and a natural, human delivery — in real time, during the call. It runs on your device, grounds answers in your own resume and the job description, and never sends your interview to the cloud.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why behavioral rounds trip people up</h2>
        <p className="mb-4">
          Strong engineers often stumble on behavioral questions, not technical ones. Put on the spot, people ramble, forget the result, or give a vague answer with no concrete example. The fix interviewers are looking for is structure: <strong>Situation, Task, Action, Result</strong> — a specific story with a measurable outcome.
        </p>
        <p className="mb-4">
          A behavioral assistant helps you recall the right story and frame it in STAR shape on the fly, so you sound prepared and specific instead of generic.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">How Natively helps</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>STAR structuring</strong> — turns a half-remembered example into a Situation → Task → Action → Result answer in real time.</li>
          <li><strong>Human persona system</strong> — Natively's anti-chatbot engine produces answers that sound like you, not like generated text read aloud.</li>
          <li><strong>Resume &amp; JD grounding (Pro)</strong> — load your resume and the job description so suggested stories come from your actual experience and match what the role values.</li>
          <li><strong>Shorten &amp; recap actions</strong> — tighten a rambling answer or recall what was just asked with a keyboard shortcut.</li>
          <li><strong>Real-time, &lt;500 ms</strong> — help arrives while you're thinking, not after the moment passes.</li>
          <li><strong>Private &amp; local</strong> — runs as a hidden overlay with zero outbound traffic in local mode.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Part of a complete interview toolkit</h2>
        <p className="mb-4">
          Behavioral is one round of many. Natively covers the others too: the <LocaleLink to="/ai-coding-interview-helper" className="text-primary hover:underline">coding interview helper</LocaleLink> for algorithms, the <LocaleLink to="/system-design-interview-assistant" className="text-primary hover:underline">system design assistant</LocaleLink> for architecture rounds, and the <LocaleLink to="/interview-answer-generator" className="text-primary hover:underline">answer generator</LocaleLink> for fast, on-brand responses to any question.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Will the answers sound robotic?</h3>
        <p className="mb-4">
          No — that's the point of the human persona system. Suggestions are phrased to sound natural and conversational, matching your tone, so you can deliver them authentically rather than reading stilted, obviously-generated text.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can it use my real experience?</h3>
        <p className="mb-4">
          Yes. With Natively Pro you can load your resume and the job description, so the assistant suggests STAR stories drawn from your actual background and aligned with what the role is screening for.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is it private during the interview?</h3>
        <p className="mb-4">
          In local mode, all processing happens on your device with zero outbound network traffic, and the overlay stays hidden from screen shares and recordings.
        </p>
      </section>
    </SEOTemplate>
  );
}
