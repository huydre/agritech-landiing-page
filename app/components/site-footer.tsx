const columns = [
  {
    title: "Công ty",
    links: ["Trang chủ", "Nông trại", "Sứ mệnh", "Tuyển dụng"],
  },
  {
    title: "Thông tin",
    links: ["Công nghệ", "Giải pháp", "Sản phẩm", "Đối tác"],
  },
  {
    title: "Cộng đồng",
    links: ["Mạng lưới nông dân", "Sự kiện", "Câu chuyện thành công", "Bản tin"],
  },
  {
    title: "Hỗ trợ",
    links: ["Trung tâm trợ giúp", "Liên hệ", "Câu hỏi thường gặp", "Tài liệu"],
  },
  {
    title: "Tài nguyên",
    links: ["Tin tức", "Hướng dẫn", "Hội thảo", "Báo chí"],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-cream-50">
      <div className="mx-auto max-w-[1340px] px-6 pb-10 pt-8 sm:px-10">
        <div className="grid grid-cols-2 gap-10 border-y border-ink/15 py-12 md:grid-cols-3 lg:grid-cols-6">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[13.5px] font-medium text-ink">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-ink/65">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 flex items-start justify-end gap-3 md:col-span-3 lg:col-span-1">
            <a
              href="#"
              aria-label="X"
              className="grid size-9 place-items-center rounded-full border border-ink/15 text-ink/70 hover:bg-ink hover:text-cream-50"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.24L4.8 22H2.04l6.97-7.96L2 2h6.99l4.31 5.7L18.244 2Zm-1.2 18h1.5L7.04 4H5.46l11.58 16Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-ink/15 text-ink/70 hover:bg-ink hover:text-cream-50"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[12px] text-ink/55 sm:flex-row">
          <a href="#" className="hover:text-ink">
            Chính sách bảo mật
          </a>
          <span>Bản quyền © Paulvante 2090</span>
          <a href="#" className="hover:text-ink">
            Điều khoản sử dụng
          </a>
        </div>
      </div>
    </footer>
  );
}
