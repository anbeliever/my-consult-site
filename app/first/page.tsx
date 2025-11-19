// app/first/page.tsx

export default function FirstVisitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      
      {/* タイトル */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        初めての方へ
      </h1>

      <p className="text-slate-600 leading-relaxed mb-10">
        このページでは、民泊・小規模ホテル運営にお悩みのオーナー様へ、
        「まず何から相談できるのか」「どう進むのか」を分かりやすくまとめています。
      </p>

      {/* セクション1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">こんな方にご利用いただいています</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>稼働や売上が波打って安定しない</li>
          <li>料金設定が手探りで不安がある</li>
          <li>OTA管理やプラン調整に時間が取れない</li>
          <li>清掃やチェックイン対応が属人化している</li>
          <li>数字に弱く、改善ポイントが分かりづらい</li>
        </ul>
      </section>

      {/* セクション2 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">サービスご利用の流れ</h2>

        <ol className="list-decimal pl-6 space-y-4 text-slate-700">
          <li>
            <span className="font-medium">無料オンライン相談（30分）</span><br />
            まずは現状の悩みや施設の状況をお聞かせください。
          </li>
          <li>
            <span className="font-medium">改善ポイントのご提案</span><br />
            料金・稼働・お客様動線など、どこが「改善の伸びしろ」なのかを明確にします。
          </li>
          <li>
            <span className="font-medium">伴走または単発サポートの選択</span><br />
            月額での継続改善か、単発のスポット対応かをお選びいただけます。
          </li>
          <li>
            <span className="font-medium">運営改善スタート</span><br />
            データ分析と現場改善を組み合わせて、無理なく成果につなげます。
          </li>
        </ol>
      </section>

      {/* セクション3 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">相談前にご準備いただくもの</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>物件の基本情報（間取り・立地・運営形態）</li>
          <li>直近の稼働率・売上（ある場合）</li>
          <li>現在抱えている課題や不安点</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <a
          href="/contact"
          className="inline-block px-8 py-3 text-white bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition"
        >
          無料オンライン相談を予約する
        </a>
      </section>
    </div>
  );
}
