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
      {/* Soft bottom + edge wash to keep text legible without dimming the photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,36,24,0.18) 0%, rgba(14,36,24,0) 22%, rgba(14,36,24,0) 78%, rgba(14,36,24,0.55) 100%)",
        }}
      />
      {/* Right-side text legibility wash */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 w-[60%]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.32) 100%)",
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

            <h1 className="mt-6 text-[clamp(40px,5.4vw,80px)] font-semibold leading-[1.04] tracking-tight text-white">
              Gieo Tương Lai Bằng
              <br />
              Nông Nghiệp Bền Vững
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/85">
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
