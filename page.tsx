import { site, experience, skills, journey, achievements, resumes, projects } from "@/content";
import Work from "@/components/Work";
import Reveal from "@/components/Reveal";

const nav = [
  ["01", "Work", "#work"],
  ["02", "Experience", "#experience"],
  ["03", "Toolbox", "#toolbox"],
  ["04", "About", "#about"],
  ["05", "Contact", "#contact"],
];

function SectionHead({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div className="section-head">
      <span className="mono dim">
        {n} / {label}
      </span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Reveal />

      <header className="topbar">
        <a href="#top" className="brand mono">
          {site.short}<span className="dim">Portfolio / 2026</span>
        </a>
        <nav>
          {nav.map(([n, l, h]) => (
            <a key={h} href={h}>
              <span className="mono accent">{n}</span> {l}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="hero">
          <div className="hero-meta mono">
            <span>{site.location}</span>
            <span>{site.affiliation}</span>
            <span>{site.coords}</span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="monogram">{site.short}</div>
              <p className="mono dim">{site.role}</p>
            </div>
            <ul className="tag-cloud mono" aria-label="Focus areas">
              {site.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <h1 className="hero-title">
            I turn <em>data</em> into
            <br /> decisions &amp; products.
          </h1>
          <p className="lead">{site.intro}</p>

          <div className="cta-row">
            <a href="#work" className="btn primary">Explore my work →</a>
            <a href="#contact" className="btn">Get in touch</a>
            <a href={site.github} target="_blank" rel="noreferrer" className="btn ghost">GitHub ↗</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn ghost">LinkedIn ↗</a>
          </div>

          <dl className="stats">
            <div><dt>100K+</dt><dd>records analysed</dd></div>
            <div><dt>5+</dt><dd>BI dashboards shipped</dd></div>
            <div><dt>{projects.length}</dt><dd>projects</dd></div>
            <div><dt>373</dt><dd>GATE 2023 score</dd></div>
          </dl>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <SectionHead n="01" label="Selected work" title="Project archive" />
          <Work />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <SectionHead n="02" label="Experience" title="Where I've shipped" />
          <div className="exp-list">
            {experience.map((e) => (
              <article key={e.company} className="exp reveal">
                <div className="exp-side">
                  <span className="mono dim">{e.period}</span>
                </div>
                <div>
                  <h3>
                    {e.role} <span className="accent">@ {e.company}</span>
                  </h3>
                  <ul className="bullets">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TOOLBOX */}
        <section id="toolbox" className="section">
          <SectionHead n="03" label="Technical skills" title="Toolbox" />
          <div className="legend mono">
            <span><i className="dot full" /> Used at work / in a project</span>
            <span><i className="dot half" /> Coursework / practice</span>
          </div>
          <div className="skill-grid">
            {skills.map((g) => (
              <div key={g.group} className="skill-card reveal">
                <h3 className="mono">{g.group}</h3>
                <ul>
                  {g.items.map(([name, lvl]) => (
                    <li key={name}>
                      <i className={`dot ${lvl === 2 ? "full" : "half"}`} />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY + ABOUT */}
        <section id="about" className="section">
          <SectionHead n="04" label="About" title="Build log" />
          <div className="about-grid">
            <ol className="timeline">
              {journey.map((j, i) => (
                <li key={j.when + j.what} className="reveal">
                  <span className="mono accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{j.what}</strong>
                    <span className="dim">{j.where}</span>
                  </div>
                  <span className="mono dim when">{j.when}</span>
                </li>
              ))}
            </ol>

            <aside className="about-card reveal">
              <p>
                I&apos;m an M.Tech CSE student at NIT Goa. Before that I spent seven months as a Data
                Analyst at Wyscout, building KPI dashboards and data pipelines, and interned as a
                blockchain developer at D-Health. Right now I&apos;m focused on speech recognition for
                low-resource Indian languages. Off the keyboard, I play football — I represented NIT
                Goa at the Inter-NIT tournament.
              </p>
              <dl className="facts">
                <div><dt className="mono dim">Study</dt><dd>M.Tech, CSE</dd></div>
                <div><dt className="mono dim">Institute</dt><dd>NIT Goa</dd></div>
                <div><dt className="mono dim">Based in</dt><dd>{site.location}</dd></div>
                <div><dt className="mono dim">Open to</dt><dd>Data Analyst · Data Scientist · SDE roles</dd></div>
              </dl>
              <h3 className="mono small-head">Achievements</h3>
              <ul className="bullets">
                {achievements.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <SectionHead n="05" label="Contact" title="Have data worth digging into?" />
          <p className="lead">
            I&apos;m looking for Data Analyst, Data Scientist and Software Engineer roles. The fastest
            way to reach me is email.
          </p>
          <a className="big-mail" href={`mailto:${site.email}`}>{site.email}</a>
          <div className="cta-row">
            <a href={site.github} target="_blank" rel="noreferrer" className="btn">GitHub ↗</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn ↗</a>
          </div>
          <div className="resumes">
            <span className="mono dim">Download a résumé →</span>
            {resumes.map((r) => (
              <a key={r.file} href={r.file} target="_blank" rel="noreferrer" className="chip">
                {r.label} ↓
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer mono">
        <span>© {site.name} · {site.location}</span>
        <span>
          <a href="#work">Work</a> · <a href="#about">About</a> · <a href="#top">Back to top ↑</a>
        </span>
      </footer>
    </>
  );
}
