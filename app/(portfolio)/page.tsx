"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  company,
  stats,
  services,
  testimonials,
} from "@/lib/portfolio-data";

/* ── Logo ──────────────────────────────────────────── */

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 142 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Müller Inc. logo"
    >
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0H107C109.761 0 112 2.23858 112 5V30H0V5Z"
        fill="currentColor"
      />
      <path
        d="M137 30C139.761 30 142 32.2386 142 35V137C142 139.761 139.761 142 137 142H112V30H137Z"
        fill="currentColor"
      />
      <path
        d="M97 73V142H72C69.2386 142 67 139.761 67 137V73H97Z"
        fill="currentColor"
      />
      <path
        d="M67 73H5C2.23858 73 0 70.7614 0 68V43H67V73Z"
        fill="currentColor"
      />
      <path
        d="M82 0H107C109.761 0 112 2.23858 112 5V58H82V0Z"
        fill="currentColor"
      />
      <path
        d="M0 117H54V142H5C2.23858 142 0 139.761 0 137V117Z"
        fill="currentColor"
      />
      <path
        d="M25 88V142H5C2.23858 142 0 139.761 0 137V88H25Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Scroll Reveal ─────────────────────────────────── */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section Label ─────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <span className="text-xs text-zinc-600 tracking-[0.3em] uppercase font-medium">
        {children}
      </span>
    </Reveal>
  );
}

/* ── Divider ───────────────────────────────────────── */

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Reveal>
        <div className="h-px bg-linear-to-r from-transparent via-zinc-800/60 to-transparent" />
      </Reveal>
    </div>
  );
}

/* ── Navigation ────────────────────────────────────── */

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/* ── Contact Links ─────────────────────────────────── */

const contactLinks = [
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    label: "GitHub",
    value: company.githubHandle,
    href: company.github,
  },
  {
    label: "X / Twitter",
    value: company.twitterHandle,
    href: company.twitter,
  },
];

/* ── Page ──────────────────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  return (
    <div className="min-h-screen">
      {/* Grain overlay */}
      <div className="grain" />

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      {/* ── Navigation ──────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#09090B]/80 backdrop-blur-2xl border-b border-zinc-800/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Logo className="w-5 h-5 text-zinc-100" />
            <span className="font-heading font-semibold text-xs tracking-[0.2em] uppercase">
              Müller Inc.
            </span>
          </motion.div>

          <div className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 tracking-wide"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          >
            <Logo className="w-20 h-20 md:w-28 md:h-28 text-zinc-100 mx-auto" />
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mt-10 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}
          >
            Müller Inc.
          </motion.h1>

          <motion.div
            className="w-10 h-px bg-zinc-700 mx-auto mt-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          <motion.p
            className="text-zinc-500 mt-8 text-lg md:text-xl max-w-md mx-auto leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            {company.tagline}
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-[10px] text-zinc-700 tracking-[0.4em] uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-6 bg-zinc-700 origin-top"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* ── About ───────────────────────────────── */}
      <section id="about" className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionLabel>01 — About</SectionLabel>
              <Reveal delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-6 leading-[1.2] tracking-tight">
                  Transformamos ideias em{" "}
                  <span className="text-zinc-500">produtos digitais</span> que
                  performam.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-500 mt-6 leading-relaxed">
                  {company.about}
                </p>
              </Reveal>
            </div>

            <div className="flex items-end">
              <Reveal delay={0.3} className="w-full">
                <div className="grid grid-cols-3 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-xs text-zinc-600 mt-2 tracking-[0.15em] uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Services ────────────────────────────── */}
      <section id="services" className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>02 — Services</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 bg-zinc-800/40 border border-zinc-800/40 overflow-hidden">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={0.1 * (i + 1)}>
                <div className="bg-[#09090B] p-8 md:p-10 h-full group hover:bg-zinc-900/40 transition-colors duration-500 cursor-default">
                  <span className="text-xs text-zinc-700 font-heading font-bold tracking-wider">
                    {service.number}
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold mt-4 tracking-tight group-hover:text-zinc-50 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Testimonials ────────────────────────── */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>03 — Trusted By</SectionLabel>

          <div className="mt-12 divide-y divide-zinc-800/40">
            {testimonials.map((t, i) => (
              <Reveal key={t.company} delay={0.1 * (i + 1)}>
                <div className="py-10 grid grid-cols-1 lg:grid-cols-[1fr_14rem] gap-6 items-start">
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="lg:text-right">
                    <p className="text-sm text-zinc-300 font-medium">
                      {t.author}
                    </p>
                    <p className="text-sm text-zinc-600 mt-0.5">{t.company}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Contact ─────────────────────────────── */}
      <section id="contact" className="py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>04 — Contact</SectionLabel>

          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-6 tracking-tight">
              Vamos conversar.
            </h2>
          </Reveal>

          <div className="mt-12">
            {contactLinks.map((link, i) => (
              <Reveal key={link.label} delay={0.15 * (i + 1)}>
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 border-b border-zinc-800/40 group cursor-pointer"
                >
                  <span className="text-xs text-zinc-600 uppercase tracking-[0.2em]">
                    {link.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400 group-hover:text-zinc-100 transition-colors duration-300">
                      {link.value}
                    </span>
                    <span className="text-zinc-700 group-hover:text-zinc-400 transition-all duration-300 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="py-10 px-6 border-t border-zinc-800/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-4 h-4 text-zinc-600" />
            <span className="text-xs text-zinc-600 tracking-wider">
              Müller Inc.
            </span>
          </div>
          <span className="text-xs text-zinc-700" suppressHydrationWarning>
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
