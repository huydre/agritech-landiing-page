"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Paulvante cung cấp những giải pháp nông nghiệp nào?",
    a: "Chúng tôi cung cấp công cụ và công nghệ cho nông nghiệp chính xác, giám sát cây trồng và tưới tiêu thông minh, giúp nông dân tối ưu năng suất và hiệu quả.",
  },
  {
    q: "Làm thế nào để bắt đầu sử dụng nền tảng Paulvante?",
    a: "Hãy liên hệ qua biểu mẫu — đội ngũ của chúng tôi sẽ khảo sát nông trại và thiết kế bộ công cụ phù hợp cho bạn.",
  },
  {
    q: "Công nghệ của Paulvante có thân thiện với môi trường không?",
    a: "Mọi sản phẩm chúng tôi triển khai đều được thiết kế để giảm dùng nước, hạn chế hóa chất và hỗ trợ thực hành nông nghiệp tái sinh.",
  },
  {
    q: "Có hỗ trợ kỹ thuật và đào tạo không?",
    a: "Có — mọi tài khoản đều bao gồm đào tạo trực tiếp tại nông trại, hỗ trợ nông học chuyên sâu và kiểm tra định kỳ cùng đội ngũ.",
  },
  {
    q: "Tôi có thể tích hợp Paulvante với hệ thống hiện tại không?",
    a: "Chúng tôi cung cấp API mở và tích hợp với hầu hết các nền tảng quản lý nông trại lớn, dữ liệu hiện có của bạn vẫn liền mạch.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <h2 className="col-span-8 text-[clamp(32px,4.6vw,68px)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-ink">
            Còn Thắc Mắc?
            <br />
            Chúng Tôi Có Câu Trả Lời.
          </h2>
          <p className="col-span-4 max-w-md text-[14px] leading-relaxed text-ink/55 lg:justify-self-end lg:pt-3">
            Tìm câu trả lời nhanh cho những thắc mắc phổ biến về giải pháp,
            công nghệ nông nghiệp và cách Paulvante giúp nông dân canh tác
            thông minh, bền vững.
          </p>
        </div>

        <ul className="mt-16 divide-y divide-ink/10">
          {faqs.map((f, i) => {
            const isOpen = i === open;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="grid w-full grid-cols-[1fr_auto] items-start gap-6 py-7 text-left"
                >
                  <div>
                    <span className="block text-[18px] font-medium text-ink sm:text-[19px]">
                      {f.q}
                    </span>
                    {isOpen && (
                      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink/55">
                        {f.a}
                      </p>
                    )}
                  </div>
                  {isOpen ? (
                    <span
                      className="mt-1 grid size-11 shrink-0 place-items-center rounded-full bg-ink text-white"
                      aria-hidden
                    >
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
                  ) : (
                    <span
                      className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-ink/20 text-ink/60 transition-colors hover:border-ink hover:text-ink"
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14m0 0-6-6m6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
