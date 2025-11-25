// app/services/page.tsx
import {
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "日常運営代行",
    description:
      "ゲストからの問合せ対応、予約管理、清掃会社との連携まで、日々の運営業務をすべて代行。オーナー様の手間は一切ありません。",
    icon: ChatBubbleLeftRightIcon,
    details: [
      "メッセージ対応",
      "チェックイン案内",
      "清掃管理",
      "トラブル一次対応",
    ],
  },
  {
    name: "レベニューマネジメント",
    description:
      "市場データと競合の動向を分析し、最適な宿泊料金を毎日設定。施設の収益性を最大化します。",
    icon: ChartBarIcon,
    details: [
      "価格最適化",
      "競合調査",
      "イベント対応",
      "売上分析",
    ],
  },
  {
    name: "口コミ改善サポート",
    description:
      "高評価レビューの獲得に向けた施策を企画・実行。ゲスト満足度を高め、予約率アップに繋げます。",
    icon: StarIcon,
    details: [
      "レビュー返信代行",
      "評価改善施策",
      "アメニティ・導線改善提案",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            運営業務はすべて“丸投げ”でOK
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            副業オーナー様でも安心して運営できるよう、手間のかかる業務をすべて代行します。
            本業に集中しながら、施設の売上と評価を最大化させましょう。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex-shrink-0">
                <service.icon
                  className="h-8 w-8 text-sky-600"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4 flex flex-grow flex-col">
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
                <div className="mt-4">
                  <ul className="space-y-1 text-sm text-slate-700">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 flex-shrink-0 text-sky-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block rounded-lg bg-slate-900 px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-slate-800"
          >
            まずは無料オンライン相談から
          </a>
          <p className="mt-4 text-sm text-slate-600">
            貴施設の状況に合わせて、最適なプランをご提案します。
          </p>
        </div>
      </div>
    </div>
  );
}