export default function WordmarkHero() {
  return (
    <section className="bg-cream-50 pt-2">
      <div className="relative overflow-hidden px-4 pb-2 sm:px-6">
        <h2
          className="h-wordmark text-image-clip select-none text-center leading-[0.78] tracking-[-0.06em]"
          style={{
            fontSize: "clamp(80px, 22vw, 320px)",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2400&q=80')",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundSize: "100% auto",
            backgroundPosition: "center 65%",
          }}
          aria-label="Paulvante"
        >
          Paulvante
        </h2>
      </div>
    </section>
  );
}
