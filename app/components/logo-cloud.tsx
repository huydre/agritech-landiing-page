const partners = [
  { name: "FocalPoint", icon: "burst" },
  { name: "Screentime", icon: "screen" },
  { name: "Segment", icon: "spiral" },
  { name: "Shutterframe", icon: "shutter" },
  { name: "Lightspeed", icon: "rings" },
  { name: "Mastermail", icon: "diamonds" },
] as const;

function Glyph({ kind }: { kind: (typeof partners)[number]["icon"] }) {
  const stroke = "currentColor";
  switch (kind) {
    case "burst":
      // sun-burst — 12 rays of varying length
      return (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            const x1 = 16 + Math.cos(a) * 4.5;
            const y1 = 16 + Math.sin(a) * 4.5;
            const x2 = 16 + Math.cos(a) * 14;
            const y2 = 16 + Math.sin(a) * 14;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="16" cy="16" r="2.6" fill={stroke} />
        </svg>
      );
    case "screen":
      return (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" fill={stroke} />
          <path
            d="M16 6.5a9.5 9.5 0 0 0 0 19A6.5 6.5 0 0 1 16 6.5Z"
            fill="#13301F"
          />
        </svg>
      );
    case "spiral":
      return (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <path
            d="M22.5 15.5a7 7 0 1 0-2 5.4"
            stroke={stroke}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M22.5 15.5v5.4h-5.4"
            stroke={stroke}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shutter":
      return (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 4 27 10v12L16 28 5 22V10L16 4Z"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="3" fill={stroke} />
        </svg>
      );
    case "rings":
      return (
        <svg width="40" height="34" viewBox="0 0 40 32" fill="none">
          <circle cx="13" cy="16" r="8" stroke={stroke} strokeWidth="2.4" />
          <circle cx="27" cy="16" r="8" stroke={stroke} strokeWidth="2.4" />
        </svg>
      );
    case "diamonds":
      return (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          {[
            { cx: 16, cy: 5 },
            { cx: 27, cy: 16 },
            { cx: 16, cy: 27 },
            { cx: 5, cy: 16 },
          ].map((p, i) => (
            <rect
              key={i}
              x={p.cx - 3}
              y={p.cy - 3}
              width="6"
              height="6"
              transform={`rotate(45 ${p.cx} ${p.cy})`}
              fill={stroke}
            />
          ))}
        </svg>
      );
  }
}

export default function LogoCloud() {
  return (
    <section className="bg-forest-950 pt-12 text-white sm:pt-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
        <div className="no-scrollbar flex items-center justify-between gap-10 overflow-x-auto whitespace-nowrap text-white">
          {partners.map((p) => (
            <div
              key={p.name}
              className="inline-flex items-center gap-3 text-[22px] font-semibold tracking-[-0.01em] sm:text-[26px]"
            >
              <Glyph kind={p.icon} />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
