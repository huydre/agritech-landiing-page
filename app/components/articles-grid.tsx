const articles = [
  {
    title: "Nông Nghiệp Bền Vững Trong Thời Đại Biến Đổi Khí Hậu",
    body:
      "Khám phá cách nông dân khắp thế giới thích ứng với nhiệt độ tăng và thời tiết bất thường bằng giải pháp thân thiện môi trường và công nghệ.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
  },
  {
    title: "Công Nghệ Thông Minh Đang Thay Đổi Nông Nghiệp Hiện Đại",
    body:
      "Tìm hiểu cách AI, IoT và tự động hóa giúp nông dân theo dõi cây trồng, tăng năng suất và giảm lãng phí — định hình tương lai nông nghiệp.",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80",
  },
  {
    title: "Kiến Tạo Tương Lai Xanh Bằng Nông Nghiệp Tái Sinh",
    body:
      "Tìm hiểu cách nông nghiệp tái sinh phục hồi sức khỏe đất, tăng đa dạng sinh học và hỗ trợ sản xuất thực phẩm bền vững cho thế hệ mai sau.",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&q=80",
  },
  {
    title: "Nông Nghiệp Bền Vững Trong Kỷ Nguyên Hiện Đại",
    body:
      "Khám phá cách canh tác thân thiện môi trường đang thay đổi cách chúng ta trồng trọt và thu hoạch trên khắp thế giới.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80",
  },
];

export default function ArticlesGrid() {
  return (
    <section id="blog" className="bg-forest-950 text-white">
      <div className="mx-auto max-w-[1340px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <h2 className="h-display col-span-7 text-[clamp(32px,4.6vw,68px)]">
            Nơi Công Nghệ Gặp Gỡ
            <br />
            Cội Nguồn Thiên Nhiên
          </h2>
          <p className="col-span-5 max-w-md text-[14px] leading-relaxed text-white/65 lg:justify-self-end">
            Khai thác sức mạnh của công cụ hiện đại để nuôi dưỡng cây trồng, hỗ
            trợ nông dân và bảo vệ trái đất mà chúng ta cùng sống.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {articles.map((a) => (
            <article key={a.title} className="group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={a.image}
                  alt=""
                  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[300px]"
                />
              </div>
              <h3 className="mt-5 text-[18px] font-medium leading-snug">
                {a.title}
              </h3>
              <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-white/65">
                {a.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
