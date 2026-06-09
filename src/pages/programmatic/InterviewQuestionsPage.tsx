import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";
import { ROLE_BY_PATH, type RoleQuestionSet } from "@/data/interviewQuestions";
import NotFound from "../NotFound";

/**
 * Renders one programmatic /interview-questions/<role> page from typed data.
 * The route component passes its own canonicalPath so a single template serves
 * every role. Falls back to NotFound if the path isn't in the data set (keeps
 * the route table and data file from silently drifting).
 */
export default function InterviewQuestionsPage({ canonicalPath }: { canonicalPath: string }) {
  const data: RoleQuestionSet | undefined = ROLE_BY_PATH[canonicalPath];
  if (!data) return <NotFound />;

  return (
    <SEOTemplate
      title={data.title}
      description={data.description}
      canonicalPath={data.path}
      h1={data.h1}
      ru={{ title: data.title, description: data.description }}
    >
      <section>
        {data.intro.map((p, i) => (
          <p key={i} className={i === 0 ? "mb-4 text-lg" : "mb-4"}>
            {p}
          </p>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
          {data.role} Interview Questions &amp; How to Answer Them
        </h2>
        <div className="space-y-8">
          {data.questions.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {i + 1}. {item.q}
              </h3>
              <p className="mb-0">
                <span className="font-semibold text-foreground">Approach: </span>
                {item.approach}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
          Get real-time help in your {data.role.toLowerCase()} interview
        </h2>
        <p className="mb-4">{data.nativelyAngle}</p>
        <ul className="grid gap-3 sm:grid-cols-2 mt-6 list-none">
          {data.related.map((r) => (
            <li key={r.to}>
              <LocaleLink
                to={r.to}
                className="block rounded-lg border border-border/50 bg-card/50 px-4 py-3 text-foreground transition-colors hover:bg-card hover:border-primary/50"
              >
                {r.label}
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>
    </SEOTemplate>
  );
}
