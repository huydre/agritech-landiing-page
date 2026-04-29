const stats = [
  {
    figure: "100%",
    title: "Khách hàng hài lòng",
    body: "Chúng tôi tạo ra giải pháp mà nông dân tin tưởng và gắn bó",
  },
  {
    figure: "20+",
    title: "Năm kinh nghiệm",
    body: "Hàng thập kỷ đổi mới thúc đẩy tiến bộ nông nghiệp toàn cầu.",
  },
  {
    figure: "100%",
    title: "Khách hàng hài lòng",
    body: "Chúng tôi tạo ra giải pháp mà nông dân tin tưởng và gắn bó",
  },
];

export default function InnovatingSection() {
  return (
    <section className="bg-forest-950 text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-24">
        {/* Top row: heading + intro */}
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <h2 className="col-span-8 text-[clamp(34px,5vw,72px)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-white">
            Đổi Mới Tương Lai
            <br />
            Nông Nghiệp
          </h2>
          <p className="col-span-4 max-w-md text-[14px] leading-relaxed text-white/65 lg:justify-self-end lg:pt-2">
            Paulvante kết hợp công nghệ hiện đại và phương pháp bền vững, giúp
            nông dân canh tác thông minh hơn, nhanh hơn và xanh hơn.
          </p>
        </div>

        {/* Bottom row: images + stats */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="col-span-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=85"
              alt="Sun-drenched terraced field with workers"
              className="h-[360px] w-full rounded-3xl object-cover sm:h-[460px]"
            />
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=85"
              alt="Aerial farm rows with farmer"
              className="h-[360px] w-full rounded-3xl object-cover sm:h-[460px]"
            />
          </div>

          <div className="col-span-4 flex flex-col justify-between gap-12 lg:pl-2">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-[clamp(48px,5.6vw,84px)] font-semibold leading-none tracking-[-0.02em] text-white">
                  {s.figure}
                </div>
                <div className="mt-3 text-[18px] font-medium text-white">
                  {s.title}
                </div>
                <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-white/55">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
