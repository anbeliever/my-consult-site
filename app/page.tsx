// app/page.tsx
// app/page.tsx
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import CTA from "./components/CTA";  // ★ この1行を追加
import { serviceData } from "./data/services";


export default function HomePage() {
  return (
    <main className="pb-16">
      <Hero />

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
            <li>小規模施設という理由で、運営代行に相談しても相手にされなかった</li>
            <li>副業で始めた民泊が、部屋数や作業量が増えて一人では回らなくなってきた</li>
            <li>清掃手配・問い合わせ対応・価格調整に追われ、本業やプライベートが圧迫されている</li>
            <li>大手に任せていたら、いつの間にか口コミが悪化していていた</li>
            <li>売上を上げたいが、Booking・Airbnbなど複数予約サイトの管理方法がわからない</li>
            <li>完全丸投げは不安で、自分も運営に携わりたい</li>
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
          <h2 className="mb-4 text-center text-2xl font-bold tracking-tight md:text-3xl">
            主なサービス内容
          </h2>
          <p className="mb-8 text-center text-slate-700">
            手間のかかる運営業務を代行し、オーナー様の負担を最小限にします。
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceData.map((service, index) => (
              <div
                key={service.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-left"
              >
                <service.icon
                  className="mb-4 h-10 w-10 text-sky-600"
                  aria-hidden="true"
                />
                <h3 className="mb-2 text-lg font-semibold">
                  {index === 1 ? (
                    <>
                      売上最大化サポート
                      <br />
                      （レベニュー改善）
                    </>
                  ) : (
                    service.name
                  )}
                </h3>
                <p className="text-sm text-slate-700">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/services"
              className="font-semibold text-sky-600 hover:text-sky-700"
            >
              サービスの詳細を見る →
            </a>
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
            選ばれる理由
          </h2>
          <p className="mb-6 text-slate-700">
            民泊・ホテル向けのコンサルティングは増えていますが、宿番のスタイルには次のような特徴があります。
          </p>
          <ol className="space-y-3 list-decimal pl-5 text-slate-700">
            <li>
              <span className="font-semibold">小規模民泊に特化した『伴走型』サポート</span>
              <br />
              大手代行は、1〜10室規模では収支が合いづらく、改善にも手が回りにくいのが実情です。だからこそ、この規模に特化し、オーナー様と一緒に運営を組み立てる“二人三脚”スタイルを大切にしています。丸投げではなく、「自分も携わりたい」オーナー様に最適です。
            </li>
            <li>
              <span className="font-semibold">現場運営と売上改善を熟知した実務ノウハウでサポート</span>
              <br />
              コロナ禍以前から宿泊運営に携わり、安定期も需要急落期も経験してきました。その長年の実務で培った“収益を落とさない運営ノウハウ”に加え、需要回復期の動きに合わせて価格を最適化するダイナミックプライシングで、売上改善を図ります。
            </li>
            <li>
              <span className="font-semibold">売上だけでなく、口コミや運営品質もセットで整えるサポート</span>
              <br />
              小規模施設では、一つの低評価が大きく影響し、売上にも直結しやすいのが特徴です。価格だけを最適化しても、清掃品質やレスポンス対応が整っていなければ口コミは下がり、稼働も伸びません。売上・対応品質・清掃動線など運営全体を一緒に整えることで、安定した高評価とリピートにつながる運営をつくります。
               <li>
               <span className="font-semibold">業界最安水準の成果報酬型と、部分委託に最適な固定報酬型をご用意</span>
              <br />
             成果に応じて費用を支払いたい方には成果報酬型、"任せたい部分だけ"依頼したい方には固定報酬型をご用意しています。運営スタイルに合わせて必要な範囲だけ選べるため、小規模民泊でも無理なく導入できます。
              </li>
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
            宿番について
          </h2>
          <div className="grid gap-6 md:grid-cols-[2fr,3fr] items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900 mb-1">
                宿番（YADOBAN）
              </p>
              <p className="mb-3 text-xs text-slate-500">
                宿番（YADOBAN）は、小規模民泊・小規模ホテル向けの運営支援サービスです。
              </p>
              <p className="mb-2 text-sm text-slate-700">
                完全な丸投げ代行ではなく、現場の実務に寄り添いながら、
                運営代行と改善支援を組み合わせた形でサポートします。
              </p>
              <p className="mb-2 text-sm text-slate-700">
                  ITツールが未導入、または単一OTAのみで運営している宿泊施設でも、
                  ゲスト対応やOTA運用の整理、PMS・サイトコントローラー導入支援を通じて、
                  無理のない形で運営の効率化を進めていきます。
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600">
              <p className="mb-2 font-semibold text-slate-800">これまで関わってきた主な業務</p>
              <ul className="mb-4 space-y-1 list-disc pl-5">
                <li>都市部ビジネスホテルのOTA運用・料金設計</li>
                <li>小規模宿・民泊の新規開業支援</li>
                <li>清掃・チェックインオペレーションの整理とマニュアル作成</li>
                <li>PMS・サイトコントローラー導入・設定支援</li>
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
          <h2 className="mb-4 text-center text-2xl font-bold tracking-tight md:text-3xl">
            料金プラン
          </h2>
          <p className="mb-8 text-center text-slate-700">
            施設の規模やご希望に合わせて、2つのプランから柔軟にお選びいただけます。
          </p>
          <div className="grid gap-6 md:grid-cols-2 text-center">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold">固定報酬型（部分サポート）</h3>
              <p className="text-xl font-bold">月額 9,800円〜（＋1室あたり 9,800円）</p>
              <p className="mt-2 text-sm text-slate-700">
                副業で民泊を運営しながら、「苦手なところだけ任せたい」オーナー向けのプランです。
                メッセージ対応やチェックイン案内など、日々の運営負担を減らす部分サポートを行います。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold">成果報酬型（口コミ連動）</h3>
              <p className="text-xl font-bold">手数料 14〜20%</p>
              <p className="mt-2 text-sm text-slate-700">
                売上とAirbnbの口コミ評価に応じて手数料が変動する、小規模物件向けの成果報酬プランです。
                売上・口コミ・運営品質を二人三脚で改善していきたいオーナー向けです。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/pricing"
              className="font-semibold text-sky-600 hover:text-sky-700"
            >
              料金プランの詳細を見る →
            </a>
          </div>
        </div>
      </section>
     <CTA />    {/* ★ ここで CTA セクション表示 */}
<FAQ />    {/* よくある質問 */}

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
