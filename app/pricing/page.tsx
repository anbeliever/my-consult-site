// app/pricing/page.tsx

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-sky-500 mx-auto"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L10.5 12.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-5 w-5 text-slate-500 mx-auto"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-slate-400 mx-auto"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06H7.72a.75.75 0 000 1.06h8.56z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            料金プラン
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            施設の規模やオーナー様のご希望に合わせて、2つのプランからお選びいただけます。
          </p>
        </div>

        {/* 2つのプランカード */}
        <div className="isolate mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2">
          {/* 固定報酬型 */}
          <div className="flex flex-col justify-between rounded-2xl p-8 shadow-sm ring-1 ring-slate-200">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-slate-900">
                固定報酬型（部分サポート）
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                副業で民泊を運営しながら、「苦手なところだけ任せたい」オーナー向けのプランです。
                メッセージ対応やチェックイン案内など、日々の運営負担を減らす部分サポートを行います。全国エリア対応（オンライン対応）。
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  月額 9,800円〜（＋1室あたり 9,800円）
                </span>
              </p>
            </div>
          </div>

          {/* 成果報酬型 */}
          <div className="flex flex-col justify-between rounded-2xl p-8 shadow-sm ring-1 ring-slate-200">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-slate-900">
                成果報酬型（口コミ連動）
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                売上とAirbnbの口コミ評価に応じて手数料が変動する、小規模物件向けの成果報酬プランです。
                売上・口コミ・運営品質を二人三脚で改善していきたいオーナー向けです。エリア限定対応。
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  手数料 14〜20%
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* プラン比較表 */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
            プラン比較表
          </h2>
          <div className="mt-8 flow-root">
            <div className="overflow-x-auto">
              <table className="w-full min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-sm font-semibold text-slate-900 sm:pl-6"
                    >
                      項目
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-slate-900"
                    >
                      固定報酬型（部分サポート）
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-slate-900"
                    >
                      成果報酬型（口コミ連動）
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">料金体系</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">月額 9,800円〜 ＋1室（1OTAあたり）9,800円</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">手数料 14〜20%<br/>（Airbnb評価で変動）</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">メッセージ対応</td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">チェックイン案内</td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">料金調整（レベニューマネジメント）</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">△</td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">OTAアカウント管理</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">△（オプション）</td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">口コミ分析・改善サポート</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">△（オプション）</td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">清掃管理・清掃会社連携</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">△（オプション）</td>
                    <td className="px-3 py-4 text-center"><CircleIcon /></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">定期レポート</td>
                    <td className="px-3 py-4 text-center"><MinusIcon /></td>
                    <td className="px-3 py-4 text-center"><CheckIcon /></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">緊急時対応</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">△（スポット／別途）</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">◯（一次対応）</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">オーナーの関わり方</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">必要なところだけ外注したい方向け</td>
                    <td className="px-3 py-4 text-center text-sm text-slate-600">運営を任せつつ売上も伸ばしたい方向け</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 text-left text-sm text-slate-600">
            <p className="font-semibold">注釈：</p>
            <p>※緊急時対応について：成果報酬型では原則こちらで一次対応まで行います。</p>
            <p>※緊急時対応・現地でのスポット対応は、対応可能エリアに限り提供しています。</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            まずはお気軽にご相談ください
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
            どのプランが最適か、施設の状況をヒアリングした上でご提案します。
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-lg bg-slate-900 px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-slate-800"
            >
              無料オンライン相談を予約する
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}