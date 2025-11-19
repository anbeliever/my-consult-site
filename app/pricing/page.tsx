// app/pricing/page.tsx

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      {/* タイトル */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        料金・プラン
      </h1>

      <p className="text-slate-600 leading-relaxed mb-10">
        物件の規模や現在の状況によって、最適な支援内容と料金は変わります。
        ここでは「どのくらいのイメージで相談できるのか」をつかんでいただくための目安を載せています。
        正式なお見積もりは、初回の無料オンライン相談のあとに個別にご案内します。
      </p>

      {/* プラン一覧 */}
      <section className="grid gap-6 md:grid-cols-3 mb-16 text-sm text-slate-700">
        {/* 単発相談 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col">
          <p className="text-xs font-semibold text-sky-700 mb-1">スポット相談</p>
          <p className="text-2xl font-bold mb-2">単発プラン</p>
          <p className="mb-4 text-xs text-slate-500">まずは一度話を聞きたい方向け</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 flex-1">
            <li>Zoomによる60分のオンライン相談</li>
            <li>現状整理と「今すぐできる一歩」のご提案</li>
            <li>簡単なアクションプランの共有</li>
          </ul>
          <p className="text-xs text-slate-500">
            ※料金は物件規模・相談内容により変動します。
          </p>
        </div>

        {/* 月額伴走 */}
        <div className="rounded-2xl border border-sky-500 bg-sky-50 p-5 flex flex-col">
          <p className="text-xs font-semibold text-sky-700 mb-1">おすすめ</p>
          <p className="text-2xl font-bold mb-2">月額伴走プラン</p>
          <p className="mb-4 text-xs text-slate-500">レベニュー・OTA・オペレーションを継続的に改善</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 flex-1">
            <li>月1回のオンラインミーティング</li>
            <li>チャット等での随時相談</li>
            <li>Beds24 等の設定見直し・運用アドバイス</li>
            <li>料金・稼働の簡易レポートと改善提案</li>
          </ul>
          <p className="text-xs text-slate-500">
            月額固定＋成果報酬（売上アップ分の◯％ など）を組み合わせてご提案します。
          </p>
        </div>

        {/* 新規開業 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col">
          <p className="text-xs font-semibold text-sky-700 mb-1">新規案件向け</p>
          <p className="text-2xl font-bold mb-2">開業サポート</p>
          <p className="mb-4 text-xs text-slate-500">これから民泊・小規模ホテルを始めたい方向け</p>
          <ul className="list-disc pl-5 space-y-1 mb-4 flex-1">
            <li>物件・エリアの方向性相談</li>
            <li>初期の料金・プラン設計</li>
            <li>開業準備〜運営スタートまでの伴走</li>
          </ul>
          <p className="text-xs text-slate-500">
            ボリュームに応じて個別にお見積もりいたします。
          </p>
        </div>
      </section>

      {/* 注意書き */}
      <section className="mb-16 text-sm text-slate-600 space-y-2">
        <h2 className="text-lg font-semibold mb-2">料金についての考え方</h2>
        <p>
          ・小規模オーナー様でも無理なく始められることを重視して、固定費を抑えた設計にしています。
        </p>
        <p>
          ・「まずはスポット相談だけ」「最初の数ヶ月だけ伴走してほしい」といったご相談も歓迎です。
        </p>
        <p>
          ・成果報酬型については、目標売上や改善幅を踏まえて個別に設定します。
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <p className="mb-4 text-slate-700">
          具体的な料金は、物件の状況やご希望のサポート内容を伺ったうえでお伝えしています。
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 text-white bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition"
        >
          無料オンライン相談で見積もりの目安を確認する
        </a>
      </section>
    </div>
  );
}
