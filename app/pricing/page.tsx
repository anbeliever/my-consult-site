// app/pricing/page.tsx

const plans = [
  {
    name: "ライト運営代行",
    price: "手数料12%〜",
    description: "基本的な運営業務を代行。手間をかけずに安定稼働させたい方向け。",
    features: [
      "メッセージ対応",
      "チェックイン案内",
      "清掃手配・管理",
      "収益レポート",
    ],
    popular: false,
  },
  {
    name: "スタンダード",
    price: "手数料12% + 成果報酬",
    description: "売上・口コミを最大化するための、レベニュー管理まで含んだプラン。",
    features: [
      "ライトプランの全内容",
      "レベニューマネジメント",
      "口コミ改善施策",
      "運営改善のご提案",
    ],
    popular: true,
  },
  {
    name: "フルサポート",
    price: "成果報酬型",
    description: "初期費用0円。運営に関わる業務をすべて丸投げしたい方向け。",
    features: [
      "スタンダードプランの全内容",
      "各種OTAアカウント管理",
      "アメニティ等の物品管理・発注",
      "緊急時・トラブルの現地対応",
    ],
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "メッセージ対応", tiers: [true, true, true] },
  { name: "清掃手配・管理", tiers: [true, true, true] },
  { name: "収益レポート", tiers: [true, true, true] },
  { name: "レベニューマネジメント", tiers: [false, true, true] },
  { name: "口コミ改善施策", tiers: [false, true, true] },
  { name: "運営改善のご提案", tiers: [false, true, true] },
  { name: "OTAアカウント管理", tiers: [false, false, true] },
  { name: "物品管理・発注", tiers: [false, false, true] },
  { name: "緊急時の現地対応", tiers: [false, false, true] },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-sky-500"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L10.5 12.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-slate-400"
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
            施設の規模やオーナー様のご希望に合わせて、3つのプランからお選びいただけます。
          </p>
        </div>

        {/* 3つのプランカード */}
        <div className="isolate mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-2xl p-8 shadow-sm ring-1 ${
                plan.popular
                  ? "ring-2 ring-sky-600"
                  : "ring-slate-200"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold leading-8 text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-2xl font-bold tracking-tight text-slate-900">
                    {plan.price}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-slate-600"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-sky-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
                      機能
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-semibold text-slate-900"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                        {feature.name}
                      </td>
                      {feature.tiers.map((included, i) => (
                        <td key={i} className="px-3 py-4 text-center">
                          {included ? <CheckIcon /> : <MinusIcon />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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