"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Category, type Project } from "@/content";

const ALL = "All" as const;
type Filter = Category | typeof ALL;

export default function Work() {
  const [filter, setFilter] = useState<Filter>(ALL);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<Project | null>(null);
  const track = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const counts = new Map<Category, number>();
    projects.forEach((p) => p.categories.forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return [...counts.entries()];
  }, []);

  const list = filter === ALL ? projects : projects.filter((p) => p.categories.includes(filter));

  // keep index in range & scroll the track to the active card
  useEffect(() => setIndex(0), [filter]);
  useEffect(() => {
    const el = track.current?.children[index] as HTMLElement | undefined;
    if (el && track.current) {
      track.current.scrollTo({ left: el.offsetLeft - track.current.offsetLeft, behavior: "smooth" });
    }
  }, [index, filter]);

  // update index when the user scrolls/drags the track
  const onScroll = () => {
    const t = track.current;
    if (!t) return;
    const card = t.children[0] as HTMLElement | undefined;
    if (!card) return;
    const step = card.offsetWidth + 20;
    const i = Math.round(t.scrollLeft / step);
    if (i !== index) setIndex(Math.min(Math.max(i, 0), list.length - 1));
  };

  const go = (d: number) => setIndex((i) => Math.min(Math.max(i + d, 0), list.length - 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open && e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter projects">
        <button role="tab" aria-selected={filter === ALL} onClick={() => setFilter(ALL)}>
          All <span className="mono dim">{projects.length}</span>
        </button>
        {categories.map(([c, n]) => (
          <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)}>
            {c} <span className="mono dim">{n}</span>
          </button>
        ))}
      </div>

      <div
        className="track"
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Projects carousel"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
      >
        {list.map((p) => (
          <article key={p.id} className="card">
            <div className="card-top mono">
              <span className="accent">{String(projects.indexOf(p) + 1).padStart(2, "0")}</span>
              <span className={`status ${p.status === "In progress" ? "live" : ""}`}>{p.status}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="dim small">{p.subtitle}</p>
            <p>{p.summary}</p>
            <ul className="stack mono">
              {p.stack.slice(0, 6).map((s) => <li key={s}>{s}</li>)}
              {p.stack.length > 6 && <li>+{p.stack.length - 6}</li>}
            </ul>
            <div className="card-foot">
              <span className="mono dim small">{p.period}</span>
              <button className="link" onClick={() => setOpen(p)}>Read case study →</button>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-ctrl mono">
        <button onClick={() => go(-1)} disabled={index === 0} aria-label="Previous project">←</button>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
        </span>
        <button onClick={() => go(1)} disabled={index >= list.length - 1} aria-label="Next project">→</button>
        <span className="dim hint">drag · arrow keys · buttons</span>
      </div>

      {open && (
        <div className="modal-bg" onClick={() => setOpen(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={open.title} onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(null)} aria-label="Close">×</button>
            <span className="mono dim">{open.period} · {open.status}</span>
            <h3>{open.title}</h3>
            <p className="dim">{open.subtitle}</p>
            <p>{open.summary}</p>
            <ul className="bullets">
              {open.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="stack mono">
              {open.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
            {open.link && (
              <a className="btn primary" href={open.link} target="_blank" rel="noreferrer">View code ↗</a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
