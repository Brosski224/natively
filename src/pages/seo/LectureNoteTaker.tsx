import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";

export default function LectureNoteTaker() {
  return (
    <SEOTemplate
      title="AI Lecture Note Taker — Transcribe Classes Offline | Natively"
      description="Natively is a free AI lecture note taker that transcribes and summarizes classes locally on your laptop. Works offline, handles multi-hour lectures, and lets you search every class — no subscription, no cloud."
      canonicalPath="/lecture-note-taker"
      h1="An AI Lecture Note Taker That Works Offline, All Semester"
      ru={{
        title: "ИИ для конспектов лекций — Транскрипция офлайн | Natively",
        description: "Natively — бесплатный ИИ для конспектов лекций: расшифровывает и резюмирует занятия локально на ноутбуке. Работает офлайн, справляется с многочасовыми лекциями и ищет по всем занятиям — без подписки и облака.",
      }}
    >
      <section>
        <p className="mb-4 text-lg">
          <strong>Natively is a free AI lecture note taker</strong> that turns classes into clean, searchable notes — running entirely on your laptop. It transcribes the lecture, summarizes the key points, and keeps every class one search away, even when you're offline in a lecture hall with bad Wi-Fi.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Why students need a different kind of note taker</h2>
        <p className="mb-4">
          Most note-taking apps are built for 30-minute business calls, billed per seat, and dependent on a stable connection. Lectures are different: they run 60 to 180 minutes, often in rooms with weak internet, and a student's budget rarely covers another subscription. A lecture note taker has to handle long sessions, work offline, and cost nothing.
        </p>
        <p className="mb-4">
          Natively fits all three. Its <strong>Lecture persona mode</strong> is tuned for academic content, <strong>epoch summarization</strong> keeps multi-hour lectures coherent instead of degrading into noise, and with Ollama it runs <LocaleLink to="/offline-ai-interview" className="text-primary hover:underline">completely offline</LocaleLink> at zero cost.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Key features for lectures</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Long-session transcription</strong> — on-device Whisper handles full lectures without choking on length.</li>
          <li><strong>Epoch summarization</strong> — long lectures are summarized in coherent segments, so a three-hour seminar produces usable notes.</li>
          <li><strong>Lecture persona mode</strong> — summaries tuned for academic material and terminology.</li>
          <li><strong>Fully offline</strong> — transcription and summarization run locally via Ollama and on-device Whisper; no internet required.</li>
          <li><strong>Searchable across the semester</strong> — global semantic search finds that one definition across every class you've recorded.</li>
          <li><strong>Export to Markdown</strong> — notes drop straight into Notion, Obsidian, or your study docs.</li>
          <li><strong>Free</strong> — no per-seat subscription; run it on your own machine.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Privacy on campus</h2>
        <p className="mb-4">
          Recording lectures can be sensitive, and uploading a professor's class to a third-party cloud raises real questions. Natively keeps recordings and notes on your own device — in local mode, nothing is transmitted anywhere. It's <LocaleLink to="/local-ai-assistant" className="text-primary hover:underline">open source and local-first</LocaleLink>, so you control exactly where your study materials live.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">More than a transcript</h2>
        <p className="mb-4">
          Because the same engine powers Natively's <LocaleLink to="/ai-meeting-assistant" className="text-primary hover:underline">meeting assistant</LocaleLink> and <LocaleLink to="/ai-note-taker" className="text-primary hover:underline">note taker</LocaleLink>, you can also ask it to clarify a point in real time or recap the last few minutes if you zoned out. One free app covers lectures, study groups, and seminars.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Can it transcribe a lecture without internet?</h3>
        <p className="mb-4">
          Yes. With Ollama and on-device Whisper, Natively transcribes and summarizes entirely offline, so it works in lecture halls and basements where Wi-Fi is unreliable.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Does it handle long, multi-hour lectures?</h3>
        <p className="mb-4">
          Yes. Epoch summarization breaks long sessions into coherent segments, so even a three-hour seminar produces structured, readable notes rather than one giant unusable block of text.
        </p>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Is it really free for students?</h3>
        <p className="mb-4">
          Core transcription and note taking are free. Running fully local with Ollama costs nothing at all; if you prefer a cloud model you can bring your own API key and pay only for the tokens you use.
        </p>
      </section>
    </SEOTemplate>
  );
}
