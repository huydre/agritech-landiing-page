"use client";

const testimonials = {
  left: {
    name: "Nguyễn Thị Mai,",
    role: "Trồng lúa,",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    quote:
      "Paulvante giúp tôi theo dõi cây trồng theo thời gian thực. Năng suất tăng 30% mà còn dùng ít nước hơn!",
    index: "01",
  },
  center: {
    name: "Trần Văn Thông",
    role: "Trồng rau,",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80",
    quote:
      "Hệ Thống Tưới Thông Minh Đã Thay Đổi Hoàn Toàn Cách Chúng Tôi Quản Lý Nông Trại. Hiệu Quả, Bền Vững Và Dễ Sử Dụng.",
    index: "02",
  },
  right: {
    name: "Lê Thị Hương",
    role: "Việt Nam",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    quote:
      "Nhờ Paulvante, tôi có thể đưa ra quyết định dựa trên dữ liệu, tiết kiệm thời gian và chi phí mỗi mùa.",
    index: "03",
  },
};

export default function TestimonialsCarousel() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-[1440px] px-6 pb-32 pt-8 sm:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <h2 className="col-span-8 text-[clamp(32px,4.6vw,68px)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-ink">
            Nông Dân Nói Gì
            <br />
            Về Chúng Tôi
          </h2>
          <p className="col-span-4 max-w-md text-[14px] leading-relaxed text-ink/55 lg:justify-self-end lg:pt-3">
            Câu chuyện thật từ những người nông dân trên khắp thế giới đã thay
            đổi nông trại nhờ đổi mới, công nghệ và giải pháp bền vững.
          </p>
        </div>

        {/* Three staggered cards */}
        <div className="relative mt-20 grid grid-cols-12 gap-6">
          {/* Left small */}
          <SideCard t={testimonials.left} className="col-span-12 sm:col-span-3 sm:mt-32" />

          {/* Featured */}
          <article className="col-span-12 rounded-[28px] bg-cream-100 p-5 shadow-[0_2px_30px_-12px_rgba(0,0,0,0.08)] sm:col-span-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[260px_1fr]">
              <img
                src={testimonials.center.photo}
                alt={testimonials.center.name}
                className="h-72 w-full rounded-[20px] object-cover sm:h-[340px]"
              />
              <div className="flex flex-col justify-between gap-6 px-2 pb-2 pt-3 sm:pt-1">
                <div>
                  <span className="block size-7 text-ink/30" aria-hidden>
                    <svg viewBox="0 0 32 32" fill="currentColor">
                      <path d="M9.5 8C5.4 8 2 11.4 2 15.5V24h8.5v-8.5H6.5C6.5 12.5 8 11 9.5 11V8Zm14 0c-4.1 0-7.5 3.4-7.5 7.5V24h8.5v-8.5H20c0-3 1.5-4.5 3-4.5V8Z" />
                    </svg>
                  </span>
                  <div className="mt-4">
                    <div className="text-[15px] font-medium text-ink">
                      {testimonials.center.name}
                    </div>
                    <div className="text-[13px] text-ink/55">
                      {testimonials.center.role}
                    </div>
                  </div>
                  <p className="mt-5 max-w-md text-[19px] font-medium leading-[1.45] text-ink">
                    &ldquo;{testimonials.center.quote}&rdquo;
                  </p>
                </div>
                <div className="flex justify-end pr-2 text-[24px] text-ink/30">
                  {testimonials.center.index}
                </div>
              </div>
            </div>
          </article>

          {/* Right small with arrows above */}
          <div className="col-span-12 sm:col-span-3">
            <div className="mb-6 flex items-center justify-end gap-3">
              <button
                aria-label="Đánh giá trước"
                className="grid size-12 place-items-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-ink hover:text-ink"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m15 6-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="Đánh giá tiếp theo"
                className="grid size-12 place-items-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-ink hover:text-ink"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m9 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <SideCard t={testimonials.right} className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SideCard({
  t,
  className,
}: {
  t: { name: string; role: string; photo: string; quote: string; index: string };
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[24px] bg-cream-100 p-6 shadow-[0_2px_30px_-12px_rgba(0,0,0,0.08)]",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <img
          src={t.photo}
          alt={t.name}
          className="size-11 rounded-full object-cover"
        />
        <div>
          <div className="text-[14px] font-medium text-ink">{t.name}</div>
          <div className="text-[12.5px] text-ink/55">{t.role}</div>
        </div>
      </div>
      <p className="mt-6 text-[13.5px] leading-relaxed text-ink/55">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-8 flex justify-end text-[16px] text-ink/30">
        {t.index}
      </div>
    </div>
  );
}
