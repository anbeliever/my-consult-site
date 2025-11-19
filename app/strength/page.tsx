// app/strength/page.tsx

export default function StrengthPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-slate-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Atsushi の強み
      </h1>

      <p className="text-slate-600 leading-relaxed mb-10">
        宿泊業界での実務経験と、データ分析・レベニュー運用の両面から、
        小規模オーナー様の「売上アップ」「運営負担の軽減」を支援します。
      </p>

      {/* ポイント3つ */}
      <section className="space-y-12">
        
        <div>
          <h2 className="text-xl font-semibold mb-3">① 宿泊現場で培った“実務”の知識</h2>
          <p className="text-slate-700 leading-relaxed">
            フロント・清掃手配・チェックイン導線など、現場の動きを理解したうえで改善提案ができます。
            「机上の理論だけのコンサル」ではなく、すぐに現場で使える改善策を提案します。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">② レベニュー・OTA運用が得意</h2>
          <p className="text-slate-700 leading-relaxed">
            料金設定、在庫の配分、プラン整理など、利益を最大化するための仕組みづくりをサポート。
            Beds24 の設定見直しや動的価格調整のアドバイスも可能です。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">③ コミュニケーションが丁寧で分かりやすい</h2>
          <p className="text-slate-700 leading-relaxed">
            専門用語をできるだけ使わず、オーナー様の目線に合わせて説明します。
            「何から手を付ければいいか分からない」という段階でも、一緒に整理して進めていきます。
          </p>
        </div>

      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block px-8 py-3 text-white bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition"
        >
          無料オンライン相談を申し込む
        </a>
      </div>
    </div>
  );
}
