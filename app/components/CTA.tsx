// app/components/CTA.tsx

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* 見出し */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          まずは 30 分の無料オンライン相談から
        </h2>

        {/* リード文 */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
          「まだ売上も少ないし、自分なんかが相談していいのかな…」
          そんな小規模・副業オーナー様のための相談窓口です。
        </p>

        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
          現在の運営状況やお悩み、今後の目標をヒアリングしたうえで、
          固定報酬型・成果報酬型どちらが合うか、具体的な運営イメージを一緒にお伝えします。
        </p>

        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
          無理な勧誘や、その場でのご契約を迫ることは一切ありません。
          まずは現状整理と「今できる一歩」の発見からご一緒しましょう。
        </p>

        {/* ボタン */}
        <a
          href="/contact"
          className="mt-10 inline-block rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition"
        >
          無料オンライン相談を予約する
        </a>

        {/* 注釈 */}
        <p className="mt-6 text-sm text-gray-500">
          ※福岡市内の1〜10室規模の物件オーナー様を主な対象としています。
        </p>
      </div>
    </section>
  );
}
