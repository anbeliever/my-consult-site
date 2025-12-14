// app/data/services.ts
import {
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export const serviceData = [
  {
    name: "日々の運営業務サポート",
    description:
      "ゲストからの問合せ対応、予約管理、清掃会社との連携まで、日々の運営業務をすべて代行。オーナー様の手間は一切ありません。",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "売上最大化サポート（レベニュー改善）",
    description:
      "市場データと競合の動向を分析し、最適な宿泊料金を毎日設定。施設の収益性を最大化します。",
    icon: ChartBarIcon,
  },
  {
    name: "口コミ・満足度アップサポート",
    description:
      "高評価レビューの獲得に向けた施策を企画・実行。ゲスト満足度を高め、予約率アップに繋げます。",
    icon: StarIcon,
  },
];
