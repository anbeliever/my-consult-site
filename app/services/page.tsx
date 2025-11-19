// app/services/page.tsx

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-slate-800">
      {/* タイトル */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        サービス内容
      </h1>
      <p className="text-slate-600 leading-relaxed mb-10">
        民泊・小規模ホテルを運営されているオーナー様向けに、
        「数字（レベニュー・OTA）」と「現場オペレーション」の両面から
        実務に落とし込めるサポートを行っています。
        ここでは、主なサービス内容を4つの切り口でご紹介します。
      </p>

      {/* グリッド：サービス4つ */}
      <section className="grid gap-6 md:grid-cols-2 mb-16 text-sm text-slate-700">
        {/* 1. レベニュー */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold text-sky-700 mb-1">Revenue Management</p>
          <h2 className="text-lg font-semibold mb-3">レベニューマネジメント設計</h2>
          <p className="mb-3">
            需要・曜日・在庫状況に応じた料金ルールを一緒に設計します。
            「毎日感覚で値付けする」のではなく、「あらかじめ決めたルールに沿って動かす」状態を目指します。
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>現状の料金カレンダー・稼働の診断</li>
            <li>繁忙期・閑散期・平日/週末の料金レンジ設計</li>
            <li>イベントや残室数に応じた値上げ・値下げルール作り</li>
          </ul>
        </div>

        {/* 2. OTA管理 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold text-sky-700 mb-1">OTA Operation</p>
          <h2 className="text-lg font-semibold mb-3">OTA・在庫管理の整理</h2>
          <p className="mb-3">
            楽天トラベル・じゃらん・Booking.com 等のプラン・在庫・料金の構成を整理し、
            「シンプルでミスの少ない」運用に組み直します。
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>プラン整理（売れていないプランの統合・削減）</li>
            <li>サイトコントローラー（Beds24 等）の設定見直し</li>
            <li>ダブルブッキングを防ぐ在庫連携ルールの設計</li>
          </ul>
        </div>

        {/* 3. オペ改善 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold text-sky-700 mb-1">Operation Design</p>
          <h2 className="text-lg font-semibold mb-3">オペレーション改善</h2>
          <p className="mb-3">
            清掃・チェックイン・問い合わせ対応など、日々の業務フローを整理し、
            属人化やムダな二度手間を減らします。
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>現行フローの棚卸し（誰が・いつ・何をしているか）</li>
            <li>チェックイン方法（対面/セルフ）の整理と導線設計</li>
            <li>清掃手配・報告の仕組みづくり（チャット/表ツール等）</li>
          </ul>
        </div>

        {/* 4. 新規開業 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold text-sky-700 mb-1">New Opening</p>
          <h2 className="text-lg font-semibold mb-3">新規開業・立ち上げ支援</h2>
          <p className="mb-3">
            これから民泊・小規模ホテルを始めたい方向けに、
            物件検討から開業準備、運営スタートまでを一緒に設計します。
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>エリア・ターゲットに合ったコンセプトの整理</li>
            <li>初期の料金・プラン構成の設計</li>
            <li>開業後3か月を見据えた運営フローの構築</li>
          </ul>
        </div>
      </section>

      {/* 追加：サポートのスタイル */}
      <section className="mb-16 text-sm text-slate-700">
        <h2 className="text-xl font-semibold mb-3">サポートのスタイル</h2>
        <p className="mb-2">
          原則として、現場のオペレーションを大きく変えすぎず、
          「今ある仕組みを活かしながら、一歩ずつ改善する」ことを大切にしています。
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>オンライン（Zoom）中心で、全国どこからでも相談可能</li>
          <li>チャットでのちょっとした質問も歓迎</li>
          <li>レポートだけ出して終わりではなく、「どう動くか」まで一緒に考える伴走型</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <p className="mb-4 text-slate-700">
          「この中のどのサービスが自分に合うのか分からない」という段階でも大丈夫です。
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 text-white bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition"
        >
          無料オンライン相談で、必要なサポートを一緒に整理する
        </a>
      </section>
    </div>
  );
}
