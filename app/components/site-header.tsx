export default function SiteHeader() {
  const links = [
    { label: "Trang chủ", href: "#", active: true },
    { label: "Giới thiệu", href: "#about" },
    { label: "Nông trại", href: "#farms" },
    { label: "Sản phẩm", href: "#products" },
    { label: "Bền vững", href: "#sustainability" },
    { label: "Tin tức", href: "#blog" },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-6 pt-6 sm:px-10 sm:pt-8">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
        <a href="#" className="text-white">
          <span className="font-grotesk text-[22px] font-bold uppercase tracking-[0.04em]">
            Paulvante
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-forest-950/90 p-1.5 text-[14px] text-white shadow-[0_4px_30px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={[
                "rounded-full px-5 py-2 transition-colors",
                l.active
                  ? "bg-lime text-forest-950 font-medium"
                  : "text-white/95 hover:text-white",
              ].join(" ")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-6 pr-2 text-[14px] font-medium text-ink transition-transform hover:scale-[1.02]"
        >
          <span>Liên hệ</span>
          <span className="grid size-9 place-items-center rounded-full bg-ink text-white">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
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
    </header>
  );
}
