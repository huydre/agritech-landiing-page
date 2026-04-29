export default function VideoShowcase() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-24 sm:px-10 sm:pb-32 sm:pt-28">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <h2 className="col-span-8 text-[clamp(32px,4.6vw,68px)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-ink">
            Nơi Công Nghệ Gặp Gỡ
            <br />
            Cội Nguồn Thiên Nhiên
          </h2>
          <p className="col-span-4 max-w-md text-[14px] leading-relaxed text-ink/55 lg:justify-self-end lg:pt-3">
            Khai thác sức mạnh của công cụ hiện đại để nuôi dưỡng cây trồng, hỗ
            trợ nông dân và bảo vệ trái đất mà chúng ta cùng sống.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[32px]">
          <img
            src="https://images.unsplash.com/photo-1492496913980-501348b61469?w=2400&q=85"
            alt="Aerial view of terraced rice fields"
            className="h-[300px] w-full object-cover sm:h-[460px] lg:h-[620px]"
          />
          <button
            type="button"
            aria-label="Phát video giới thiệu nông trại"
            className="group absolute left-1/2 top-1/2 grid size-[88px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/90 text-white transition-transform hover:scale-105"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 6.2v11.6L18 12 9 6.2Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
