"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { VT323, IBM_Plex_Mono } from "next/font/google";
import {
  personalInfo,
  heroDescription,
  aboutTexts,
  skills,
  projects,
  testimonials,
  stats,
  timeline,
  statusColor,
} from "../../lib/portfolio-data";

const vt323 = VT323({ subsets: ["latin"], weight: ["400"] });
const ibmPlex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"] });

/* ── types ──────────────────────────────────────────────── */

type Section = "home" | "about" | "projects" | "log";

/* ── retro window ───────────────────────────────────────── */

function RetroWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-[#33ff33]/30 rounded-sm bg-[#0c0c1d]/80 overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#33ff33]/10 border-b border-[#33ff33]/20">
        <span className="w-2 h-2 rounded-full bg-[#ff4444]" />
        <span className="w-2 h-2 rounded-full bg-[#ffb300]" />
        <span className="w-2 h-2 rounded-full bg-[#33ff33]" />
        <span className="ml-2 text-xs text-[#33ff33]/50">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/* ── main ───────────────────────────────────────────────── */

export default function Home() {
  const [section, setSection] = useState<Section>("home");

  const navigate = useCallback((s: Section) => {
    setSection(s);
  }, []);

  return (
    <div
      className={`${ibmPlex.className} min-h-screen bg-[#0c0c1d] text-[#33ff33] selection:bg-[#33ff33]/20 relative overflow-hidden`}
    >
      {/* CRT scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />

      {/* phosphor glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(51,255,51,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {/* ── top bar ─────────────────────────────── */}
        <div className="flex items-center justify-between mb-6 border-b border-[#33ff33]/15 pb-3">
          <span className={`${vt323.className} text-lg text-[#33ff33]`}>
            GUILHERME_MÜLLER.EXE
          </span>
          <div className="flex items-center gap-2 text-xs text-[#33ff33]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#33ff33] animate-pulse" />
            <span suppressHydrationWarning>
              {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* ── nav tabs ────────────────────────────── */}
        <div className="flex gap-1 mb-6">
          {(
            [
              { id: "home", label: "HOME" },
              { id: "about", label: "ABOUT.TXT" },
              { id: "projects", label: "PROJECTS/" },
              { id: "log", label: "CHANGELOG" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => navigate(tab.id)}
              className={`px-4 py-2 text-xs border transition-colors ${section === tab.id
                  ? "bg-[#33ff33]/10 border-[#33ff33]/40 text-[#33ff33]"
                  : "border-[#33ff33]/10 text-[#33ff33]/30 hover:text-[#33ff33]/60 hover:border-[#33ff33]/20"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── HOME ────────────────────────────────── */}
        {section === "home" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
              <RetroWindow title="identity.cfg">
                <div className="flex gap-6 items-start">
                  <div className="w-20 h-20 border border-[#33ff33]/30 overflow-hidden shrink-0">
                    <Image
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover brightness-85 contrast-120"
                    />
                  </div>
                  <div>
                    <h1 className={`${vt323.className} text-3xl md:text-4xl`}>
                      {personalInfo.name.toUpperCase()}
                    </h1>
                    <p className="text-[#ffb300] text-xs mt-1">
                      {personalInfo.role.toUpperCase()}
                    </p>
                    <p className="text-[#33ff33]/40 text-xs mt-1">
                      {personalInfo.location} · {personalInfo.education}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#33ff33]/50 mt-4 leading-relaxed">
                  {heroDescription}
                </p>
              </RetroWindow>

              <RetroWindow title="stats.dat" className="md:w-52">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between py-2 border-b border-[#33ff33]/10 last:border-0"
                  >
                    <span className="text-[10px] text-[#33ff33]/40 uppercase">
                      {s.label}
                    </span>
                    <span className={`${vt323.className} text-2xl text-[#ffb300]`}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </RetroWindow>
            </div>

            {/* skills */}
            <RetroWindow title="skills.conf">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {skills.map((s) => (
                  <div key={s.category}>
                    <p className="text-[#ffb300] text-xs font-bold mb-2">
                      [{s.category.toUpperCase()}]
                    </p>
                    {s.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs mb-1">
                        <span className="text-[#33ff33]/30">├─</span>
                        <span className="text-[#33ff33]/70">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </RetroWindow>

            {/* testimonials */}
            <RetroWindow title="reviews.log">
              {testimonials.map((t) => (
                <div
                  key={t.client}
                  className="py-3 border-b border-[#33ff33]/10 last:border-0"
                >
                  <p className="text-xs text-[#33ff33]/50 italic">
                    &gt; &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-[10px] text-[#ffb300]/50 mt-1">
                    -- {t.author}, {t.client}
                  </p>
                </div>
              ))}
            </RetroWindow>

            {/* contact */}
            <RetroWindow title="contact.sh">
              <div className="space-y-2">
                {[
                  { cmd: "email", val: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { cmd: "github", val: `github.com/${personalInfo.username}`, href: personalInfo.github },
                  { cmd: "twitter", val: `@${personalInfo.username}`, href: personalInfo.twitter },
                ].map((c) => (
                  <a
                    key={c.cmd}
                    href={c.href}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs hover:text-[#ffb300] transition-colors group"
                  >
                    <span className="text-[#33ff33]/30">$</span>
                    <span className="text-[#ffb300]">{c.cmd}</span>
                    <span className="text-[#33ff33]/30">--open</span>
                    <span className="text-[#33ff33]/60 group-hover:text-[#ffb300]">
                      {c.val}
                    </span>
                  </a>
                ))}
              </div>
            </RetroWindow>
          </div>
        ) : null}

        {/* ── ABOUT ───────────────────────────────── */}
        {section === "about" ? (
          <RetroWindow title="about.txt">
            <div className="space-y-4">
              {aboutTexts.map((t, i) => (
                <p key={i} className="text-xs text-[#33ff33]/60 leading-relaxed">
                  {t}
                </p>
              ))}
            </div>
          </RetroWindow>
        ) : null}

        {/* ── PROJECTS ────────────────────────────── */}
        {section === "projects" ? (
          <div className="space-y-3">
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <RetroWindow title={`${p.title.toLowerCase().replace(/\s/g, "_")}.app`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`${vt323.className} text-2xl group-hover:text-[#ffb300] transition-colors`}>
                        {String(i + 1).padStart(2, "0")}. {p.title.toUpperCase()}
                      </h3>
                      <p className="text-xs text-[#33ff33]/40 mt-2 leading-relaxed max-w-lg">
                        {p.description}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-sm font-bold ${statusColor[p.status] ?? ""}`}
                    >
                      {p.status.toUpperCase()}
                    </span>
                  </div>
                </RetroWindow>
              </a>
            ))}
          </div>
        ) : null}

        {/* ── CHANGELOG ───────────────────────────── */}
        {section === "log" ? (
          <RetroWindow title="CHANGELOG.md">
            <div className="space-y-3">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-4">
                  <span className={`${vt323.className} text-xl text-[#ffb300] w-14 shrink-0 text-right`}>
                    {t.year}
                  </span>
                  <div className="border-l border-[#33ff33]/20 pl-4">
                    <p className="text-xs font-bold">{t.title}</p>
                    <p className="text-[10px] text-[#33ff33]/40">{t.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </RetroWindow>
        ) : null}

        {/* footer */}
        <div className="mt-8 text-center">
          <p className={`${vt323.className} text-xs text-[#33ff33]/20`}>
            SYSTEM READY. PRESS ANY KEY TO CONTINUE_
            <span className="animate-pulse">█</span>
          </p>
        </div>
      </div>
    </div>
  );
}
