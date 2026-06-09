import SEOTemplate from "../SEOTemplate";
import { LocaleLink } from "@/components/LocaleLink";
import { DESIGN_BY_PATH, type SystemDesignCase } from "@/data/systemDesign";
import NotFound from "../NotFound";

/**
 * Renders one programmatic /system-design/<product> walk-through from typed data.
 * The route passes its canonicalPath; one template serves every case. Falls back
 * to NotFound for unknown paths.
 */
export default function SystemDesignPage({ canonicalPath }: { canonicalPath: string }) {
  const data: SystemDesignCase | undefined = DESIGN_BY_PATH[canonicalPath];
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

      {data.sections.map((s, i) => (
        <section key={i}>
          <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">{s.heading}</h2>
          {s.body.map((p, j) => (
            <p key={j} className="mb-4">
              {p}
            </p>
          ))}
          {s.bullets && (
            <ul className="list-disc list-inside space-y-2 mb-4">
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section>
        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
          Practice {data.product} system design with real-time help
        </h2>
        <p className="mb-4">
          Natively's <LocaleLink to="/system-design-interview-assistant" className="text-primary hover:underline">system design interview assistant</LocaleLink> can
          keep you structured during a live round — suggesting the next dimension to
          cover and surfacing trade-offs in real time, all on your own device.
        </p>
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
