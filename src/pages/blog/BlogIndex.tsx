import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LocaleLink, useLocalePath } from "@/components/LocaleLink";
import { BLOG_POSTS, type BlogPost } from "@/data/blogPosts";

const CATEGORY_ORDER: BlogPost["category"][] = ["Meetings & Calls", "Interviews"];

const CATEGORY_LABELS: Record<BlogPost["category"], { en: string; ru: string }> = {
  "Meetings & Calls": { en: "Meetings & Calls", ru: "Встречи и звонки" },
  Interviews: { en: "Interviews", ru: "Собеседования" },
};

function formatDate(iso: string, locale: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndex() {
  const { i18n } = useTranslation();
  const localePath = useLocalePath();
  const isRu = i18n.language === "ru";

  const title = isRu
    ? "Блог Natively — приватный ИИ для встреч и собеседований"
    : "Natively Blog — Private AI for Meetings & Interviews";
  const description = isRu
    ? "Руководства и сравнения по приватным ИИ-ассистентам для встреч, звонков и собеседований — приватность, помощь в реальном времени и локальная обработка."
    : "Guides and comparisons on private AI assistants for meetings, calls, and interviews — privacy, real-time help, and local on-device processing.";
  const h1 = isRu ? "Блог Natively" : "Natively Blog";
  const intro = isRu
    ? "Практические руководства и честные сравнения по приватным ИИ-ассистентам для встреч, звонков и собеседований."
    : "Practical guides and honest comparisons on private AI assistants for meetings, calls, and interviews.";

  // Newest first within each category.
  const sorted = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title={title} description={description} canonicalPath={localePath("/blog")} />
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 max-w-5xl mx-auto w-full">
        <header className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-foreground tracking-tight">
            {h1}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{intro}</p>
        </header>

        {CATEGORY_ORDER.map((category) => {
          const posts = sorted.filter((p) => p.category === category);
          if (posts.length === 0) return null;
          return (
            <section key={category} className="mb-14 md:mb-20">
              <h2 className="text-2xl font-semibold text-foreground mb-6 border-b border-border/50 pb-3">
                {isRu ? CATEGORY_LABELS[category].ru : CATEGORY_LABELS[category].en}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {posts.map((post) => (
                  <LocaleLink
                    key={post.slug}
                    to={post.slug}
                    className="group block rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/50"
                  >
                    <article className="flex h-full flex-col">
                      <time
                        dateTime={post.date}
                        className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                      >
                        {formatDate(post.date, i18n.language)}
                      </time>
                      <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {isRu ? post.ru.title : post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {isRu ? post.ru.excerpt : post.excerpt}
                      </p>
                      <span className="mt-4 text-sm font-medium text-primary">
                        {isRu ? "Читать →" : "Read article →"}
                      </span>
                    </article>
                  </LocaleLink>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-4 md:mt-8 bg-card border border-border/50 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {isRu ? "Готовы попробовать Natively?" : "Ready to try Natively?"}
          </h2>
          <p className="text-muted-foreground mb-6">
            {isRu
              ? "Приватный ИИ-ассистент для встреч, звонков и собеседований — с локальной или облачной работой."
              : "The private AI assistant for meetings, calls, and interviews — with local or cloud operation."}
          </p>
          <a
            href={localePath("/")}
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {isRu ? "Начать бесплатно" : "Get Started Free"}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
