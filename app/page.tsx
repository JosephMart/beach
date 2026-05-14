"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Destination = {
  rank: number;
  destination: string;
  area: string;
  ausFlightTime: string;
  dallasFlightTime: string;
  airportCode: string;
  transferTime: string;
  bestFit: string;
  tagline: string;
  verdict: string;
  highlight:
    | "top-pick"
    | "beach"
    | "couples"
    | "relaxed"
    | "food"
    | "family"
    | "wow"
    | "designed";
  accent: "sun" | "sea" | "coral" | "palm" | "terra" | "rose" | "ink";
  image: string;
  state: string;
  longitude: string;
  latitude: string;
  walkScore: number;
  walkRemark: string;
};

const destinations: Destination[] = [
  {
    rank: 1,
    destination: "30A",
    area: "Rosemary / Alys / Seaside / WaterColor",
    ausFlightTime: "~1h 50m to VPS / 1-stop ECP",
    dallasFlightTime: "~1h 55m – 2h 05m to ECP / VPS",
    airportCode: "ECP / VPS",
    transferTime: "30 – 60 min",
    bestFit: "Upscale beach towns, group houses, walkable vibe",
    tagline: "Twenty-six miles of pastel cottages & pearl-white sand",
    verdict: "Bring the bicycle",
    highlight: "top-pick",
    accent: "sun",
    image: "/images/30a.jpg",
    state: "Florida (Panhandle)",
    longitude: "86.14°W",
    latitude: "30.32°N",
    walkScore: 74,
    walkRemark: "New Urbanism: engineered so you'd never need shoes.",
  },
  {
    rank: 2,
    destination: "San Diego",
    area: "Coronado / La Jolla",
    ausFlightTime: "~3h 00m nonstop",
    dallasFlightTime: "~3h 00m – 3h 30m",
    airportCode: "SAN",
    transferTime: "15 – 30 min",
    bestFit: "Best July weather, baby-friendly, easy USA",
    tagline: "Eternal seventy degrees on the Pacific",
    verdict: "Bring the baby",
    highlight: "beach",
    accent: "coral",
    image: "/images/san-diego.jpg",
    state: "California",
    longitude: "117.16°W",
    latitude: "32.71°N",
    walkScore: 47,
    walkRemark: "Stroll the strand. Eat a taco. Repeat until tan.",
  },
  {
    rank: 3,
    destination: "Fort Lauderdale",
    area: "Hollywood Beach",
    ausFlightTime: "~2h 35m – 3h 05m",
    dallasFlightTime: "~2h 35m – 3h 00m",
    airportCode: "FLL",
    transferTime: "15 – 25 min",
    bestFit: "Easiest true beach/resort feel",
    tagline: "Boardwalks, daiquiris, the genuine resort article",
    verdict: "Bring the spritz",
    highlight: "beach",
    accent: "sea",
    image: "/images/fort-lauderdale.jpg",
    state: "Florida",
    longitude: "80.13°W",
    latitude: "26.12°N",
    walkScore: 58,
    walkRemark: "Boardwalk is doing the Lord's pedestrian work.",
  },
  {
    rank: 4,
    destination: "Miami Beach",
    area: "Surfside / Bal Harbour",
    ausFlightTime: "~2h 40m – 3h 00m",
    dallasFlightTime: "~2h 45m – 3h 10m",
    airportCode: "MIA",
    transferTime: "25 – 45 min",
    bestFit: "Fun couples trip, restaurants, beach",
    tagline: "Neon nights with a turquoise hangover",
    verdict: "Bring the linen",
    highlight: "couples",
    accent: "rose",
    image: "/images/miami-beach.jpg",
    state: "Florida",
    longitude: "80.13°W",
    latitude: "25.79°N",
    walkScore: 71,
    walkRemark: "Leave the car keys in Texas. Walk in linen.",
  },
  {
    rank: 5,
    destination: "St. Pete Beach",
    area: "Clearwater, FL",
    ausFlightTime: "~2h 30m – 2h 40m",
    dallasFlightTime: "~2h 15m – 2h 35m",
    airportCode: "TPA",
    transferTime: "30 – 45 min",
    bestFit: "Relaxed Gulf Coast beach trip",
    tagline: "Powder-sugar sand on the Gulf's quiet edge",
    verdict: "Bring a paperback",
    highlight: "relaxed",
    accent: "palm",
    image: "/images/st-pete-beach.jpg",
    state: "Florida",
    longitude: "82.74°W",
    latitude: "27.72°N",
    walkScore: 39,
    walkRemark: "Walkable in a three-block radius. The radius is the bar.",
  },
  {
    rank: 6,
    destination: "Charleston",
    area: "Isle of Palms, SC",
    ausFlightTime: "~2h 30m – 2h 40m",
    dallasFlightTime: "~2h 30m – 2h 55m",
    airportCode: "CHS",
    transferTime: "25 – 40 min",
    bestFit: "Beach + charming city + great food",
    tagline: "Shrimp & grits, then a soft Atlantic breeze",
    verdict: "Bring the appetite",
    highlight: "food",
    accent: "terra",
    image: "/images/charleston.jpg",
    state: "South Carolina",
    longitude: "79.93°W",
    latitude: "32.78°N",
    walkScore: 22,
    walkRemark: "Golf cart > sneaker. A finding peer-reviewed by humidity.",
  },
  {
    rank: 7,
    destination: "Hilton Head",
    area: "Savannah Area",
    ausFlightTime: "~2h 15m – 3h 00m*",
    dallasFlightTime: "~2h 15m – 2h 45m*",
    airportCode: "SAV",
    transferTime: "45 – 60 min",
    bestFit: "Calm family beach, condos, low stress",
    tagline: "Bicycles on the sand, slow time, slow tides",
    verdict: "Bring the helmet",
    highlight: "family",
    accent: "palm",
    image: "/images/hilton-head.jpg",
    state: "South Carolina",
    longitude: "80.75°W",
    latitude: "32.21°N",
    walkScore: 18,
    walkRemark: "Rent a cruiser. The cruiser is now your personality.",
  },
  {
    rank: 8,
    destination: "Oahu / Waikiki",
    area: "Hawaii",
    ausFlightTime: "~8h 25m+ / 1-stop",
    dallasFlightTime: "~8h 20m nonstop",
    airportCode: "HNL",
    transferTime: "20 – 30 min",
    bestFit: 'Best "wow" beach, but long for 5 days',
    tagline: "The dream itself, just an ocean away",
    verdict: "Bring everything",
    highlight: "wow",
    accent: "sea",
    image: "/images/waikiki.jpg",
    state: "Hawaii",
    longitude: "157.86°W",
    latitude: "21.31°N",
    walkScore: 64,
    walkRemark: "Sidewalks contain at least one ukulele. Saunter accordingly.",
  },
  {
    rank: 9,
    destination: "Destin",
    area: "Miramar Beach, FL",
    ausFlightTime: "~1h 50m nonstop*",
    dallasFlightTime: "~1h 50m nonstop",
    airportCode: "VPS",
    transferTime: "25 – 40 min",
    bestFit: "Pretty Gulf beach, condos, family-friendly",
    tagline: "Emerald water, white sand, condo towers in the pines",
    verdict: "Bring the floaties",
    highlight: "family",
    accent: "sea",
    image: "/images/destin.jpg",
    state: "Florida",
    longitude: "86.48°W",
    latitude: "30.39°N",
    walkScore: 32,
    walkRemark: "The beach is the sidewalk. The sidewalk is also sand.",
  },
];

const accentColorMap: Record<Destination["accent"], string> = {
  sun: "var(--sun)",
  sea: "var(--sea)",
  coral: "var(--coral)",
  palm: "var(--palm)",
  terra: "var(--terra)",
  rose: "var(--rose)",
  ink: "var(--ink)",
};

function getHighlightColor(highlight: string) {
  const colors: Record<string, string> = {
    "top-pick": "border-l-amber-500",
    beach: "border-l-cyan-500",
    couples: "border-l-pink-500",
    relaxed: "border-l-teal-500",
    food: "border-l-orange-500",
    family: "border-l-green-500",
    wow: "border-l-purple-500",
    upscale: "border-l-indigo-500",
  };
  return colors[highlight] || "border-l-slate-300";
}

// ---------- Decorative SVG components ----------

function SunburstSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="presentation"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="100" cy="100" r="34" />
        <circle cx="100" cy="100" r="42" strokeDasharray="2 4" />
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i / 36) * Math.PI * 2;
          const r = (n: number) => Math.round(n * 100) / 100;
          const x1 = r(100 + Math.cos(angle) * 48);
          const y1 = r(100 + Math.sin(angle) * 48);
          const len = i % 2 === 0 ? 38 : 24;
          const x2 = r(100 + Math.cos(angle) * (48 + len));
          const y2 = r(100 + Math.sin(angle) * (48 + len));
          // biome-ignore lint/suspicious/noArrayIndexKey: rays are positional and stable
          return <line key={`ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <text
        x="100"
        y="106"
        textAnchor="middle"
        fontFamily="var(--font-serif), serif"
        fontStyle="italic"
        fontSize="18"
        fill="currentColor"
      >
        sol
      </text>
    </svg>
  );
}

function PalmSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      className={className}
      role="presentation"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M48 140 Q52 100 50 60 Q49 50 48 140Z" />
        <path d="M50 60 Q20 50 10 40 Q35 50 50 60 Q52 48 60 35 Q55 50 50 60 Q70 50 95 30 Q75 52 50 60 Q60 70 88 80 Q60 65 50 60 Q40 75 18 95 Q35 70 50 60Z" />
        <circle cx="48" cy="62" r="2" />
        <circle cx="55" cy="64" r="1.6" />
        <circle cx="44" cy="65" r="1.4" />
      </g>
    </svg>
  );
}

function WaveSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 30"
      className={className}
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15 Q 25 0 50 15 T 100 15 T 150 15 T 200 15 T 250 15 T 300 15 T 350 15 T 400 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M0 22 Q 25 7 50 22 T 100 22 T 150 22 T 200 22 T 250 22 T 300 22 T 350 22 T 400 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.4"
      />
    </svg>
  );
}

function CompassSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="presentation"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="50" cy="50" r="44" />
        <circle cx="50" cy="50" r="36" strokeDasharray="1 3" />
        <path d="M50 6 L56 50 L50 94 L44 50 Z" fill="currentColor" />
        <path
          d="M6 50 L50 44 L94 50 L50 56 Z"
          fill="currentColor"
          opacity="0.35"
        />
      </g>
      <text
        x="50"
        y="16"
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize="7"
        fill="currentColor"
      >
        N
      </text>
    </svg>
  );
}

function walkVerdict(score: number) {
  if (score >= 60) return "Stridable";
  if (score >= 45) return "Sufficiently Strollable";
  if (score >= 30) return "Sidewalks, Allegedly";
  if (score >= 15) return "Bring a Bicycle";
  return "Pedestrian Hostile";
}

function WalkabilityGauge({
  score,
  remark,
  accent,
  variant = "default",
}: {
  score: number;
  remark: string;
  accent: string;
  variant?: "default" | "hero";
}) {
  const pct = Math.min(100, Math.max(0, (score / 77) * 100));
  const ticks = [0, 19, 38, 58, 77];
  const verdict = walkVerdict(score);
  const isHero = variant === "hero";

  return (
    <div
      className={`relative border-2 border-ink bg-card ${isHero ? "p-5 md:p-6" : "p-4"}`}
    >
      {/* Header row */}
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            Walkability Index
          </span>
          <span
            className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-ink-soft/70 sm:inline"
            aria-hidden
          >
            ™
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span
            className={`font-display font-medium leading-none tracking-tight text-ink ${
              isHero ? "text-5xl md:text-6xl" : "text-3xl"
            }`}
          >
            {score}
          </span>
          <span
            className={`font-display font-medium leading-none text-ink/40 ${
              isHero ? "text-2xl" : "text-base"
            }`}
          >
            /77
          </span>
        </div>
      </div>

      {/* Verdict pill */}
      <div className="mt-2 flex items-center gap-2">
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ background: accent }}
          aria-hidden
        />
        <span className="font-serif-italic text-base text-ink-soft">
          “{verdict}”
        </span>
      </div>

      {/* Scale bar */}
      <div className="relative mt-4">
        <div className="relative h-3 w-full border border-ink bg-cream">
          <div
            className="h-full transition-all duration-700"
            style={{ width: `${pct}%`, background: accent }}
          />
          {/* Triangle indicator */}
          <div
            className="absolute top-0 -translate-x-1/2 -translate-y-[calc(100%+2px)]"
            style={{ left: `${pct}%` }}
            aria-hidden
          >
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              className="block"
              role="presentation"
              aria-hidden="true"
            >
              <path d="M6 9 L0 0 H12 Z" fill="var(--ink)" />
            </svg>
          </div>
        </div>
        {/* Tick marks */}
        <div className="relative mt-1 h-2">
          {ticks.map((tick) => (
            <span
              key={tick}
              className="absolute top-0 h-2 w-px bg-ink/60"
              style={{ left: `${(tick / 77) * 100}%` }}
              aria-hidden
            />
          ))}
        </div>
        {/* Tick labels */}
        <div className="mt-1 flex justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-ink-soft">
          <span>0</span>
          <span>19</span>
          <span>38</span>
          <span>58</span>
          <span>77</span>
        </div>
      </div>

      {/* Remark */}
      <p
        className={`mt-4 font-serif-italic leading-tight text-ink ${
          isHero ? "text-2xl md:text-[1.6rem]" : "text-lg"
        }`}
      >
        “{remark}”
      </p>

      {/* Calibration note */}
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-soft/70">
        ✦ Atlas Quarterly Calibration ✦ 77 = unmissable saunter potential
      </p>
    </div>
  );
}

function StampBadge({
  rank,
  label,
  rotate = -8,
  className = "",
}: {
  rank: number;
  label: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`stamp inline-flex flex-col items-center gap-0 px-4 py-2 text-ink ${className}`}
      style={{
        ["--tilt" as string]: `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-75">
        №{String(rank).padStart(2, "0")}
      </span>
      <span className="font-display text-[11px] font-medium uppercase tracking-[0.22em]">
        {label}
      </span>
    </div>
  );
}

// ---------- Sub components ----------

function Marquee() {
  const items = [
    "BEACH ROULETTE '26",
    "JULY GETAWAY",
    "AUSTIN ✈ DALLAS",
    "VOL. ∞  •  ISSUE №01",
    "EIGHT SHORES",
    "ONE WINNER",
    "DEPART JULY",
    "RETURN TANNED",
  ];
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-ink py-2.5 text-cream">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {(["a", "b"] as const).map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {items.map((t) => (
              <span
                key={`${dup}-${t}`}
                className="flex items-center gap-6 px-6 font-display text-sm uppercase tracking-[0.32em]"
              >
                {t}
                <span className="text-sun">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden border-b-2 border-ink">
      {/* Rotating sun behind everything */}
      <div
        className="pointer-events-none absolute -right-32 -top-40 z-0 h-[640px] w-[640px] text-terra/35 animate-spin-slow"
        aria-hidden
      >
        <SunburstSVG className="h-full w-full" />
      </div>
      {/* Compass top-left */}
      <div
        className="pointer-events-none absolute left-6 top-6 z-0 hidden h-28 w-28 text-ink/30 md:block animate-wiggle-slow"
        aria-hidden
      >
        <CompassSVG className="h-full w-full" />
      </div>
      {/* Palms bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-4 left-[6%] z-0 hidden h-72 w-52 text-palm/45 md:block animate-float"
        style={{ ["--tilt" as string]: "-10deg" }}
        aria-hidden
      >
        <PalmSVG className="h-full w-full" />
      </div>
      <div
        className="pointer-events-none absolute -bottom-6 right-[8%] z-0 hidden h-80 w-56 text-palm/35 md:block animate-float"
        style={{ ["--tilt" as string]: "8deg", animationDelay: "1.4s" }}
        aria-hidden
      >
        <PalmSVG className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-12 md:pt-12">
        {/* Top kicker bar */}
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/30 pb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink-soft">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-terra" />
            <span>The Atlas Quarterly</span>
            <span className="opacity-50">·</span>
            <span>Issue №01</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Filed July 2026</span>
            <span className="opacity-50">·</span>
            <span>Pages I — XIV</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div data-rise className="mt-10 flex items-center gap-3 text-terra">
          <span className="h-px w-12 bg-terra" />
          <span className="font-mono text-xs uppercase tracking-[0.4em]">
            A Definitive Ranking
          </span>
          <span className="h-px w-12 bg-terra" />
        </div>

        {/* Big editorial display */}
        <h1
          data-rise
          style={{ animationDelay: "0.05s" }}
          className="mt-6 font-display font-medium leading-[0.84] tracking-[-0.04em] text-ink"
        >
          <span className="block text-[clamp(3.4rem,15.5vw,10.5rem)]">
            Beach
          </span>
          <span className="block text-[clamp(3rem,14vw,10.5rem)] md:pl-[8%]">
            <em className="font-serif-italic font-normal text-terra">
              Roulette
            </em>
            <span className="ml-2 align-top font-mono text-base font-normal text-sun md:ml-3 md:text-3xl">
              ’26
            </span>
          </span>
        </h1>

        <div
          data-rise
          style={{ animationDelay: "0.15s" }}
          className="mt-10 flex flex-col gap-8 md:grid md:grid-cols-12"
        >
          <p className="font-serif-italic text-xl leading-tight text-ink-soft sm:text-2xl md:col-span-7 md:col-start-2 md:text-[2rem]">
            Eight sun-soaked candidates, vetted from{" "}
            <span className="marker font-display not-italic text-ink">
              Austin
            </span>{" "}
            &{" "}
            <span className="marker font-display not-italic text-ink">
              Dallas
            </span>{" "}
            — for the holiest week of summer.
          </p>
          <div className="md:col-span-3 md:col-start-10 md:flex md:justify-end">
            <div className="flex flex-col gap-2 border-l-2 border-ink pl-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              <span>Sample size · 08</span>
              <span>Method · Vibes & maths</span>
              <span>Editor · You</span>
              <span>Bias · Toward sand</span>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="mt-12 text-ink/50">
          <WaveSVG className="h-6 w-full" />
        </div>
      </div>
    </header>
  );
}

function FactRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink/30 py-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
        {label}
      </span>
      <span
        className={`${mono ? "font-mono" : "font-display"} text-sm text-ink`}
      >
        {value}
      </span>
    </div>
  );
}

function TopPickSpread({ dest }: { dest: Destination }) {
  return (
    <section className="relative border-b-2 border-ink bg-cream-deep/40 py-16 md:py-24">
      {/* Decorative sunburst behind the image */}
      <div
        className="pointer-events-none absolute right-[4%] top-12 z-0 hidden h-72 w-72 text-sun/55 animate-spin-slow lg:block"
        aria-hidden
      >
        <SunburstSVG className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column — meta */}
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-4">
            <div className="font-display text-[7.5rem] font-medium leading-none tracking-[-0.06em] text-terra sm:text-[10rem] md:text-[14rem]">
              01
            </div>
            <div className="flex flex-col gap-3">
              <StampBadge rank={1} label="Editor's Pick" rotate={-9} />
              <StampBadge rank={1} label="Top Choice" rotate={4} />
            </div>
          </div>

          <h2 className="mt-6 font-display text-5xl font-medium leading-[0.92] tracking-[-0.03em] sm:text-6xl md:text-7xl">
            {dest.destination}
            <em className="ml-2 block font-serif-italic text-2xl font-normal text-ink-soft sm:ml-3 sm:inline sm:text-3xl md:text-4xl">
              — {dest.area}
            </em>
          </h2>

          <p className="mt-6 max-w-lg font-serif-italic text-2xl leading-tight text-ink">
            “{dest.tagline}.”
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6">
            <div>
              <FactRow label="From AUS" value={dest.ausFlightTime} mono />
              <FactRow label="From DAL" value={dest.dallasFlightTime} mono />
              <FactRow label="Airport" value={dest.airportCode} mono />
              <FactRow label="To beach" value={dest.transferTime} mono />
            </div>
            <div>
              <FactRow label="State" value={dest.state} />
              <FactRow label="Latitude" value={dest.latitude} mono />
              <FactRow label="Longitude" value={dest.longitude} mono />
              <FactRow label="Verdict" value={dest.verdict} />
            </div>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 border-2 border-ink bg-ink px-5 py-3 text-cream">
            <span className="font-mono text-[11px] uppercase tracking-[0.32em]">
              Best fit
            </span>
            <span className="h-3 w-px bg-cream/40" />
            <span className="font-display text-base">{dest.bestFit}</span>
          </div>

          <div className="mt-8">
            <WalkabilityGauge
              score={dest.walkScore}
              remark={dest.walkRemark}
              accent={accentColorMap[dest.accent]}
              variant="hero"
            />
          </div>
        </div>

        {/* Right column — postcard */}
        <div className="lg:col-span-7">
          <PostcardImage dest={dest} rotate={2.5} />
        </div>
      </div>
    </section>
  );
}

function PostcardImage({
  dest,
  rotate = 0,
  size = "lg",
}: {
  dest: Destination;
  rotate?: number;
  size?: "lg" | "md";
}) {
  const accent = accentColorMap[dest.accent];
  const heights =
    size === "lg" ? "h-[320px] md:h-[560px]" : "h-[240px] md:h-[320px]";

  return (
    <div
      className="relative md:rotate-(--tilt)"
      style={{ ["--tilt" as string]: `${rotate}deg` }}
    >
      {/* Tape pieces */}
      <span className="tape absolute -top-3 left-8 z-20 h-6 w-24 -rotate-6" />
      <span className="tape absolute -top-3 right-12 z-20 h-6 w-20 rotate-3" />

      {/* Frame */}
      <div className="relative border-2 border-ink bg-card p-3 shadow-[8px_10px_0_0_var(--ink)] transition-all duration-500 hover:rotate-0 hover:shadow-[4px_5px_0_0_var(--ink)] md:shadow-[14px_18px_0_0_var(--ink)] md:hover:shadow-[6px_8px_0_0_var(--ink)]">
        {/* Decorative ticker top */}
        <div className="mb-2 flex items-center justify-between gap-3 px-1 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
          <span>Postmark · {dest.airportCode}</span>
          <span>
            {dest.latitude} / {dest.longitude}
          </span>
        </div>

        <div className={`relative w-full overflow-hidden ${heights}`}>
          <Image
            src={dest.image}
            alt={`${dest.destination} beach`}
            fill
            className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={dest.rank === 1}
          />
          {/* Vintage color wash + grain */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-multiply"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 204, 102, 0.18), rgba(20, 20, 30, 0.08) 60%, rgba(200, 75, 49, 0.18))",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Corner caption */}
          <div className="absolute bottom-4 left-4 z-10 max-w-sm">
            <div
              className="inline-block bg-cream/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-ink"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              Plate {String(dest.rank).padStart(2, "0")} · {dest.destination}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-2 flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
          <span>Kodachrome — July ’26</span>
          <span className="flex items-center gap-1">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: accent }}
            />
            {dest.highlight.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* "PAR AVION" stripe */}
      <div className="absolute -bottom-3 left-6 z-30 hidden border-2 border-ink bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-[0.32em] text-terra md:block">
        Par Avion ✈
      </div>
    </div>
  );
}

function RankingCard({ dest, index }: { dest: Destination; index: number }) {
  // Asymmetric layouts: alternate image side, vary tilt
  const isEven = index % 2 === 0;
  const tilt = [-2.2, 1.8, -1.4, 2.4, -2.6, 1.4][index % 6];
  const accent = accentColorMap[dest.accent];

  return (
    <article
      className="group relative grid items-start gap-8 md:grid-cols-12 md:gap-10"
      data-rise
      style={{ animationDelay: `${0.06 * index}s` }}
    >
      {/* Number column */}
      <div
        className={`md:col-span-2 ${isEven ? "md:order-1" : "md:order-3"} flex items-start justify-start md:justify-center`}
      >
        <div className="relative">
          <div
            className="font-display text-[6rem] font-medium leading-[0.85] tracking-[-0.06em] md:text-[10rem]"
            style={{
              WebkitTextStroke: `2px ${accent}`,
              color: "transparent",
            }}
          >
            {String(dest.rank).padStart(2, "0")}
          </div>
          <div
            className="absolute inset-0 -z-10 translate-x-2 translate-y-2 font-display text-[6rem] font-medium leading-[0.85] tracking-[-0.06em] md:text-[10rem]"
            style={{ color: accent, opacity: 0.18 }}
          >
            {String(dest.rank).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Text column */}
      <div className={`md:col-span-5 ${isEven ? "md:order-2" : "md:order-2"}`}>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink-soft">
          <span className="h-px w-8" style={{ background: accent }} />
          <span>{dest.highlight.replace("-", " ")}</span>
          <span className="opacity-50">·</span>
          <span>{dest.state}</span>
        </div>

        <h3 className="mt-3 font-display text-5xl font-medium leading-[0.92] tracking-tight text-ink md:text-6xl">
          {dest.destination}
        </h3>
        <p className="mt-1 font-serif-italic text-2xl text-ink-soft">
          {dest.area}
        </p>

        <p className="mt-5 max-w-md font-serif-italic text-xl leading-[1.3] text-ink">
          “{dest.tagline}.”
        </p>

        {/* Boarding pass-ish info strip */}
        <div className="mt-7 border-2 border-ink bg-card">
          <div className="flex items-stretch">
            <div className="flex-1 border-r-2 border-dashed border-ink p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                Austin → {dest.airportCode}
              </div>
              <div className="mt-1 font-mono text-sm text-ink">
                {dest.ausFlightTime}
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                Dallas → {dest.airportCode}
              </div>
              <div className="mt-1 font-mono text-sm text-ink">
                {dest.dallasFlightTime}
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-between border-t-2 border-ink px-4 py-3 text-cream"
            style={{ background: "var(--ink)" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
              ✈ {dest.airportCode}
            </span>
            <span className="font-display text-sm">{dest.bestFit}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
              {dest.transferTime}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <WalkabilityGauge
            score={dest.walkScore}
            remark={dest.walkRemark}
            accent={accent}
          />
        </div>
      </div>

      {/* Image column */}
      <div className={`md:col-span-5 ${isEven ? "md:order-3" : "md:order-1"}`}>
        <PostcardImage dest={dest} rotate={tilt} size="md" />
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="relative border-t-2 border-ink bg-ink text-cream">
      {/* Tiny rotating sun in corner */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 hidden h-44 w-44 text-sun/70 md:block animate-spin-slow"
        aria-hidden
      >
        <SunburstSVG className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-4xl leading-[1.05] md:text-5xl">
              Wherever you go,{" "}
              <em className="font-serif-italic text-sun">
                bring sandals you can lose.
              </em>
            </p>
            <p className="mt-6 max-w-xl font-mono text-xs uppercase tracking-[0.24em] text-cream/70">
              * Flight times sourced from August ’25 schedules and subject to
              the whims of the Atlantic. Transfer times approximated by hopeful
              cartographers. Vibes guaranteed.
            </p>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/80">
            <div className="col-span-2 mb-2 h-px bg-cream/30" />
            <span>Editor</span>
            <span className="text-right text-cream">You</span>
            <span>Cartographer</span>
            <span className="text-right text-cream">Also you</span>
            <span>Filed</span>
            <span className="text-right text-cream">July 2026</span>
            <span>Pressing</span>
            <span className="text-right text-cream">First, of one</span>
            <span>Copyright</span>
            <span className="text-right text-cream">© Beach Roulette</span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-cream/20 pt-6">
          <div className="font-display text-7xl tracking-[-0.04em] text-cream md:text-9xl">
            BEACH<em className="font-serif-italic text-sun">•</em>26
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/60">
            Made with sunscreen and serif fonts
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Page ----------

export default function DestinationsTable() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const nodes = document.querySelectorAll<HTMLElement>("[data-rise-scroll]");
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-rise");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    for (const n of nodes) observerRef.current?.observe(n);
    return () => observerRef.current?.disconnect();
  }, []);

  const topPick = destinations[0];
  const rest = destinations.slice(1);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Marquee />
      <Hero />
      <TopPickSpread dest={topPick} />

      {/* Index transition */}
      <section className="relative border-b-2 border-ink py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-wrap items-baseline justify-between gap-6 border-b border-ink/30 pb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            <span>Section II</span>
            <span>The Runners-Up</span>
            <span>pp. 04 — 14</span>
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.03em] sm:text-6xl md:text-8xl">
            Seven more
            <span className="ml-2 font-serif-italic text-coral sm:ml-3">
              contenders
            </span>
            <span className="text-ink/30">.</span>
          </h2>
          <p className="mt-4 max-w-2xl font-serif-italic text-xl text-ink-soft md:text-2xl">
            In descending order of editorial enthusiasm, charm-per-mile, and
            general willingness to put up with us.
          </p>

          {/* Note about the Walkability Index */}
          <aside className="mt-10 grid gap-4 border-t border-ink/30 pt-6 md:grid-cols-12">
            <div className="md:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-terra">
                Appendix A
              </span>
            </div>
            <p className="font-serif-italic text-lg text-ink md:col-span-7 md:text-xl">
              On the matter of the{" "}
              <span className="font-display not-italic">Walkability Index</span>
              : we have, after considerable deliberation and one ill-advised gin
              martini, declared{" "}
              <span className="font-display not-italic">77</span> the perfect
              upper bound. Anything higher would be showing off.
            </p>
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-ink-soft md:col-span-3">
              0 — flee on wheels
              <br />
              19 — bring a hat
              <br />
              38 — passable
              <br />
              58 — genuinely strollable
              <br />
              77 — biblical saunter
            </p>
          </aside>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl space-y-24 px-6 py-20 md:px-12 md:space-y-32 md:py-28">
          {rest.map((d, i) => (
            <RankingCard key={d.rank} dest={d} index={i} />
          ))}
        </div>
      </section>

      {/* Final marquee outro */}
      <Marquee />

      <Footer />
    </div>
  );
}
