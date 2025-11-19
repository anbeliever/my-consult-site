// app/page.tsx

export default function HomePage() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="mb-3 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800">
            民泊・小規模ホテル専門コンサルティング
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            「埋まらない」「回らない」民泊・ホテル運営を、
            <br className="hidden md:block" />
            現場と数字の両面から立て直します。
          </h1>
          <p className="mb-6 text-base leading-relaxed text-slate-700 md:text-lg">
            OTA管理・レベニューマネジメント・オペレーション改善まで。
            宿泊業界で現役の運営担当として培った知見をもとに、
            小規模オーナー様の「売上アップ」と「現場の負担軽減」を二本柱でご支援します。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              無料オンライン相談を予約する
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              サービス内容を見る
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            ※Zoom を使った30分程度のオンライン相談です。売り込みは行いません。
          </p>
        </div>
      </section>

      {/* 悩み */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            こんなお悩みはありませんか？
          </h2>
          <p className="mb-4 text-slate-700">
            小規模で民泊・ホテルを運営されているオーナー様から、日々こんなお声をいただきます。
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-700">
            <li>稼働や売上が月によってバラバラで、先の見通しが立てづらい</li>
            <li>料金設定に自信がなく、つい値下げに頼ってしまう</li>
            <li>OTAごとの在庫・プラン管理が煩雑で、ミスが怖い</li>
            <li>清掃・チェックインなど現場オペレーションが属人化している</li>
            <li>新しいツールやシステムに興味はあるが、何から手を付ければいいか分からない</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            こうした課題は、「少しの設計」と「現場に合った仕組みづくり」で改善できます。
          </p>
        </div>
      </section>

      {/* サービス内容 */}
      <section
        id="services"
        className="border-y border-slate-200 bg-slate-50 py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            サービス内容
          </h2>
          <p className="mb-6 text-slate-700">
            現場のオペレーションと数字の両方を見ながら、次のようなテーマを中心にご支援します。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-lg font-semibold">レベニューマネジメント設計</h3>
              <p className="text-sm text-slate-700">
                需要や在庫に応じた料金ルールを一緒に設計します。
                Beds24 などのサイトコントローラーを活用し、「手作業に頼らない」価格運用を目指します。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-lg font-semibold">OTA・在庫管理の整理</h3>
              <p className="text-sm text-slate-700">
                楽天トラベル・じゃらん・Booking.com 等のプランや在庫を整理し、
                「シンプルでミスの少ない」構成に組み直します。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-lg font-semibold">オペレーション改善</h3>
              <p className="text-sm text-slate-700">
                清掃手配・チェックイン方法・問い合わせ対応など、
                日々の業務フローを見える化し、ムダな動きや属人化を減らします。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-lg font-semibold">新規開業・立ち上げ支援</h3>
              <p className="text-sm text-slate-700">
                物件選定から開業準備、初期の料金設計・集客設計まで、
                「開業後3か月で迷子にならない」状態を一緒に作っていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section
        id="strength"
        className="py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            Atsushi のコンサルが選ばれる理由
          </h2>
          <p className="mb-6 text-slate-700">
            民泊・ホテル向けのコンサルティングは増えていますが、ぼくのスタイルには次のような特徴があります。
          </p>
          <ol className="space-y-3 list-decimal pl-5 text-slate-700">
            <li>
              <span className="font-semibold">現役の運営担当としての実務経験</span>
              <br />
              ホテル運営受託会社で、施設管理・レベニュー・OTA運用・オーナー対応まで幅広く担当。
              「机上の空論」ではなく、現場で実際に試し、数字で確かめた方法をご提案します。
            </li>
            <li>
              <span className="font-semibold">数字と現場オペレーションの両面から見る視点</span>
              <br />
              料金や稼働率といった数字だけでなく、清掃・チェックイン・問い合わせ対応など、
              日々のオペレーションも含めてトータルで改善していきます。
            </li>
            <li>
              <span className="font-semibold">小規模オーナー目線で「ムリのない一歩」からスタート</span>
              <br />
              大掛かりなシステム導入よりも、まずは「今すぐできる見直し」から。
              予算や手間に合わせて、現実的な選択肢を一緒に考えます。
            </li>
          </ol>
        </div>
      </section>

      {/* コンサルの進め方 */}
      <section className="border-y border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            コンサルの進め方（4ステップ）
          </h2>
          <p className="mb-6 text-slate-700">
            初回の無料相談から、実際の改善提案・伴走までの流れは次の通りです。
          </p>
          <ol className="grid gap-4 md:grid-cols-4 text-sm text-slate-700">
            <li className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                1
              </span>
              <span className="font-semibold">お問い合わせ</span>
              <span>まずはお問い合わせフォームまたはメールからご連絡ください。</span>
            </li>
            <li className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                2
              </span>
              <span className="font-semibold">現状ヒアリング</span>
              <span>オンライン（Zoom）で、現状の稼働・料金・運営体制などをお伺いします。</span>
            </li>
            <li className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                3
              </span>
              <span className="font-semibold">分析・ご提案</span>
              <span>既存データやヒアリング内容をもとに、改善の方向性や優先順位をご提案します。</span>
            </li>
            <li className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                4
              </span>
              <span className="font-semibold">実行支援・伴走</span>
              <span>必要に応じて、設定変更・運用ルール作り・スタッフ教育などを伴走支援します。</span>
            </li>
          </ol>
        </div>
      </section>

      {/* プロフィール */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            プロフィール
          </h2>
          <div className="grid gap-6 md:grid-cols-[2fr,3fr] items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900 mb-1">
                仲野 敦詞（Atsushi Nakano）
              </p>
              <p className="mb-3 text-xs text-slate-500">
                民泊・小規模ホテル運営コンサルタント / 宿泊運営受託会社勤務
              </p>
              <p className="mb-2 text-sm text-slate-700">
                不動産会社での勤務を経て、ホテル・民泊の運営受託会社へ転職。
                施設管理、OTA運用、レベニューマネジメント、オーナー窓口など、
                宿泊運営の現場を幅広く担当してきました。
              </p>
              <p className="mb-2 text-sm text-slate-700">
                自身でも競売で取得した物件のリフォーム・賃貸運用に取り組みつつ、
                小規模オーナー目線での「無理なく続けられる運営改善」をテーマに活動しています。
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600">
              <p className="mb-2 font-semibold text-slate-800">これまで関わってきた主な業務</p>
              <ul className="mb-4 space-y-1 list-disc pl-5">
                <li>都市部ビジネスホテルのOTA運用・料金設計</li>
                <li>地方エリアの小規模宿・民泊の新規開業支援</li>
                <li>清掃・チェックインオペレーションの整理とマニュアル作成</li>
                <li>Beds24 などのサイトコントローラー導入・設定支援</li>
              </ul>
              <p className="text-xs text-slate-500">
                ※詳細な経歴・実績は今後コンテンツとして整理していく予定です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="border-y border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            料金の目安
          </h2>
          <p className="mb-6 text-slate-700">
            料金は物件の規模や支援内容によって変わりますが、小規模オーナー様でも始めやすいように設計しています。
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-1 text-xs font-semibold text-sky-700">単発相談</p>
              <p className="mb-2 text-lg font-bold">60分 〜</p>
              <p className="mb-2">・Zoomでの現状相談・方向性整理</p>
              <p className="mb-0 text-xs text-slate-500">※まずはここからでも大丈夫です。</p>
            </div>
            <div className="rounded-2xl border border-sky-500 bg-sky-50 p-4">
              <p className="mb-1 text-xs font-semibold text-sky-700">月額伴走プラン</p>
              <p className="mb-2 text-lg font-bold">月額固定 ＋ 成果報酬</p>
              <p className="mb-2">
                ・レベニュー/OTA/オペの継続的な改善支援
                <br />
                ・チャット相談・月次ミーティング など
              </p>
              <p className="mb-0 text-xs text-slate-600">
                詳細は物件・状況をヒアリングのうえ個別にご提案します。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-1 text-xs font-semibold text-sky-700">新規開業サポート</p>
              <p className="mb-2 text-lg font-bold">個別お見積り</p>
              <p className="mb-2">
                ・物件検討〜開業準備〜運営スタートまでをトータルでサポートします。
              </p>
              <p className="mb-0 text-xs text-slate-500">
                「どこまでお願いしたいか」を含めて、初回相談時にざっくりご希望をお聞きします。
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            ※料金は今後変更する可能性があります。最新の内容は初回相談時にご案内します。
          </p>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            よくある質問
          </h2>
          <div className="space-y-4 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-1 font-semibold">
                Q. まだ売上も少なく、小さな物件なのですが相談しても大丈夫ですか？
              </p>
              <p>
                A. もちろん大丈夫です。むしろ小規模なうちから「運営の型」を作っておくことで、
                後々の負担やムダを減らすことができます。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-1 font-semibold">
                Q. まずは一度話を聞いてみるだけでもいいですか？
              </p>
              <p>
                A.
                はい。初回のオンライン相談では、現状の整理と「今すぐできる一歩」のご提案までを行い、
                その場でご契約を迫るようなことはしません。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="mb-1 font-semibold">
                Q. Beds24 や自動価格調整ツールについても相談できますか？
              </p>
              <p>
                A.
                相談可能です。完全なシステム開発ではなく、「現状のツールでできること」から一緒に整理していきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section
        id="contact"
        className="bg-slate-900 py-12 text-slate-50 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            まずは30分の無料オンライン相談から
          </h2>
          <p className="mb-6 text-sm text-slate-100 md:text-base">
            「自分の物件でも改善できそうか知りたい」「何から手を付ければいいか整理したい」など、
            ざっくりした段階でも大丈夫です。現状をお伺いしたうえで、
            今できる一歩と、もしご一緒できる場合の進め方をお伝えします。
          </p>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-4 text-sm space-y-2">
            <p>ご相談は以下のメールアドレスからお気軽にご連絡ください。</p>
            <p className="text-base font-semibold">
              メール：{" "}
              <a
                href="mailto:enbeliever59@gmail.com"
                className="text-sky-300 underline-offset-2 hover:underline"
              >
                enbeliever59@gmail.com
              </a>
            </p>
            <p className="text-xs text-slate-300">
              ・物件の場所 / 客室数 / 現在の運営状況を分かる範囲でお書きいただけるとスムーズです。
              <br />
              ・X（旧Twitter）やその他の連絡手段でのご相談も、今後整備していく予定です。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
