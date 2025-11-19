export default function Features() {
  const features = [
    { title: "写真 × 導線で予約率UP", desc: "OTAと自社サイトの両面でCVRを底上げ。写真・説明文・導線設計まで一貫最適化。" },
    { title: "価格戦略の最適化", desc: "需要・競合・在庫・イベントに応じて柔軟に価格運用。利益と稼働のバランスを最大化。" },
    { title: "運営体制の整備", desc: "清掃・問い合わせ・レビュー運用を標準化。属人化を外して安定運用へ。" },
    { title: "MEO / SNS導線", desc: "Googleマップ・Instagram経由の自然流入を増やし、広告依存を下げる。" },
  ];

  return (
    <section id="features" className="py-24 md:py-28 scroll-mt-24 md:scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">選ばれる理由</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl bg-white p-6 md:p-8 shadow-card hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
