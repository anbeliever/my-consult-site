export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-28 scroll-mt-24 md:scroll-mt-28 bg-gradient-to-b from-white to-brand-50 text-center"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          収益を底上げする打ち手、今すぐ始めませんか？
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
          施設特性と需要動線に合わせた価格・在庫・販路の最適化プランをご提案。最短翌日から運用改善を実現します。
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-full bg-brand-600 px-8 py-3 font-semibold text-white shadow-glow hover:bg-brand-700 transition"
        >
          無料ヒアリングを予約
        </a>
      </div>
    </section>
  );
}
