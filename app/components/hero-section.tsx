export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950">
      {/* Photographic background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=2400&q=85'), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2400&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      />
      {/* Mobile: full-area dark wash for legibility regardless of where text sits */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,15,11,0.55) 0%, rgba(10,15,11,0.45) 50%, rgba(10,15,11,0.7) 100%)",
        }}
      />
      {/* Desktop: soft top/bottom + right-side wash so left half of photo breathes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,36,24,0.22) 0%, rgba(14,36,24,0) 22%, rgba(14,36,24,0) 78%, rgba(14,36,24,0.6) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-[60%] lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-6 pb-24 pt-40 sm:px-10 sm:pt-44">
        {/* Left half intentionally empty so the farmer remains visible */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
          <div aria-hidden className="hidden lg:block" />

          <div className="max-w-[640px] lg:pl-4">
            <div className="inline-flex items-center rounded-full border border-white/55 bg-transparent px-4 py-1.5 text-[13px] text-white">
              Vì một trái đất bền vững
            </div>

            <h1
              className="mt-6 text-[clamp(36px,5.4vw,80px)] font-semibold leading-[1.06] tracking-tight text-white"
              style={{ textShadow: "0 1px 24px rgba(0,0,0,0.35)" }}
            >
              Gieo Tương Lai Bằng
              <br className="hidden sm:inline" /> Nông Nghiệp Bền Vững
            </h1>

            <p
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/90"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
            >
              Chúng tôi đồng hành cùng nông dân với phương pháp thân thiện môi
              trường, công cụ hiện đại và sứ mệnh chung nuôi dưỡng hành tinh,
              tự nhiên và đầy trách nhiệm.
            </p>

            <a
              href="#farms"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-lime py-3 pl-6 pr-2 text-[15px] font-medium text-ink shadow-[0_8px_30px_-8px_rgba(217,251,96,0.55)] transition-transform hover:scale-[1.02]"
            >
              <span>Khám phá nông trại</span>
              <span className="grid size-10 place-items-center rounded-full bg-ink text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
