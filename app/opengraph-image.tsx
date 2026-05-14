/* biome-ignore-all lint/a11y/noSvgWithoutTitle: SVGs are rasterized to PNG by Satori, never rendered in the DOM */

import { ImageResponse } from "next/og"

export const alt =
  "Beach Roulette '26 — A Definitive July Shore Ranking"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Older browser UA forces Google Fonts to serve TTF/WOFF (Satori can't parse WOFF2)
const FONT_UA =
  "Mozilla/5.0 (X11; Linux i686; rv:1.9.2.13) Gecko/20101213 Ubuntu/9.10 (karmic) Firefox/3.6.13"

function Dot({ color }: { color: string }) {
  return (
    <div
      style={{
        width: 4,
        height: 4,
        borderRadius: 999,
        backgroundColor: color,
        opacity: 0.45,
      }}
    />
  )
}

async function loadFont(family: string, axis: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:${axis}&display=swap`
  const css = await (
    await fetch(url, { headers: { "User-Agent": FONT_UA } })
  ).text()
  const match = css.match(
    /src:\s*url\((https?:\/\/[^)]+)\)\s*format\('(opentype|truetype|woff)'\)/,
  )
  if (!match) throw new Error(`Failed to extract font URL for ${family}`)
  const res = await fetch(match[1])
  if (!res.ok) throw new Error(`Failed to download font binary for ${family}`)
  return await res.arrayBuffer()
}

export default async function OpengraphImage() {
  const [fraunces, frauncesBold, instrumentItalic] = await Promise.all([
    loadFont("Fraunces", "wght@500"),
    loadFont("Fraunces", "wght@700"),
    loadFont("Instrument Serif", "ital@1"),
  ])

  const cream = "#f4e8d0"
  const creamDeep = "#ecdcb9"
  const ink = "#0e2a47"
  const inkSoft = "#1a3c5e"
  const terra = "#c84b31"
  const sun = "#f2a900"
  const sea = "#2c7da0"
  const palm = "#6b8e4e"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: cream,
          backgroundImage: `radial-gradient(circle at 12% 8%, rgba(242, 169, 0, 0.32), transparent 45%), radial-gradient(circle at 92% 96%, rgba(200, 75, 49, 0.22), transparent 50%), radial-gradient(circle at 50% 100%, rgba(44, 125, 160, 0.14), transparent 60%)`,
          fontFamily: "Fraunces",
          color: ink,
          padding: "44px 64px",
          overflow: "hidden",
        }}
      >
        {/* Rotating sunburst — top-right */}
        <svg
          width="640"
          height="640"
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            opacity: 0.42,
          }}
        >
          <g transform="translate(100,100)">
            <circle r="22" fill={sun} />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24
              return (
                <rect
                  key={`ray-${angle}`}
                  x="-2.2"
                  y="-92"
                  width="4.4"
                  height="58"
                  fill={sun}
                  transform={`rotate(${angle})`}
                  rx="2"
                />
              )
            })}
          </g>
        </svg>

        {/* Decorative compass — mid-right */}
        <svg
          width="170"
          height="170"
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            right: 52,
            top: 220,
            opacity: 0.45,
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke={ink}
            strokeWidth="1.5"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke={ink}
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          <path d="M50 8 L55 50 L50 92 L45 50 Z" fill={terra} />
          <path d="M8 50 L50 45 L92 50 L50 55 Z" fill={ink} />
          <circle cx="50" cy="50" r="3" fill={sun} />
          {/* N marker — simple triangular tick */}
          <path d="M48 12 L50 6 L52 12 Z" fill={ink} />
        </svg>

        {/* Top kicker bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${ink}55`,
            paddingBottom: 14,
            fontSize: 16,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: inkSoft,
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: terra,
              }}
            />
            <span>The Atlas Quarterly</span>
            <Dot color={ink} />
            <span>Issue No. 01</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span>Filed July 2026</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: terra,
            marginTop: 28,
            fontSize: 16,
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span
            style={{ width: 52, height: 1.5, backgroundColor: terra }}
          />
          <span>A Definitive Ranking</span>
        </div>

        {/* Big editorial display */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 8,
            lineHeight: 0.84,
            letterSpacing: "-0.045em",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 168,
              fontWeight: 500,
              color: ink,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            Beach
          </div>
          <div
            style={{
              fontSize: 168,
              marginLeft: 72,
              marginTop: -8,
              display: "flex",
              alignItems: "flex-start",
              color: terra,
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Roulette
            <span
              style={{
                marginLeft: 14,
                marginTop: 8,
                fontSize: 44,
                color: sun,
                fontFamily: "Fraunces",
                fontStyle: "normal",
                fontWeight: 700,
                letterSpacing: 0,
              }}
            >
              ’26
            </span>
          </div>
        </div>

        {/* Subtitle row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 28,
            gap: 28,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 720,
            }}
          >
            <div
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1.1,
                color: inkSoft,
                display: "flex",
              }}
            >
              Eight sun-soaked candidates — vetted from Austin &amp; Dallas
              for the holiest week of summer.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 14,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: inkSoft,
                fontWeight: 500,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  backgroundColor: sea,
                  marginRight: 2,
                }}
              />
              <span>30A</span>
              <Dot color={ink} />
              <span>San Diego</span>
              <Dot color={ink} />
              <span>Miami</span>
              <Dot color={ink} />
              <span>Charleston</span>
              <Dot color={ink} />
              <span style={{ color: palm }}>&amp; four more</span>
            </div>
          </div>

          {/* Editor's Pick stamp */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 22px",
              border: `2.5px solid ${terra}`,
              outline: `2.5px solid ${terra}`,
              outlineOffset: "4px",
              color: terra,
              transform: "rotate(-7deg)",
              backgroundColor: `${creamDeep}d9`,
              gap: 2,
              marginRight: 28,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Editor’s Pick
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              JULY · 26
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: fraunces,
          style: "normal",
          weight: 500,
        },
        {
          name: "Fraunces",
          data: frauncesBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Instrument Serif",
          data: instrumentItalic,
          style: "italic",
          weight: 400,
        },
      ],
    },
  )
}
