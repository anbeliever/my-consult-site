"use client";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "対応エリアはどこまでですか？",
    answer: `現在は福岡市内の物件のみ対応しています。
清掃手配や緊急時の一次対応など、運営品質を保つために現地サポートが必要な場面もあるため、まずは福岡市内にエリアを限定しています。
対応エリアは今後拡大予定ですので、市外の方もお気軽にご相談ください。`,
  },
  {
    question: "1室だけの小さな物件でも依頼できますか？",
    answer: `もちろん可能です。1室から運営を開始される方も多く、まずは運営の型を作ることで後々の負担と無駄を大きく減らすことができます。`,
  },
  {
    question: "固定報酬型と成果報酬型、どちらを選べばいいですか？",
    answer: `副業で民泊をしたい方・一部だけ任せたい方には固定報酬型がおすすめです。
売上最大化や口コミ改善まで踏み込んでサポートしてほしい方には成果報酬型が向いています。`,
  },
  {
    question: "成果報酬型の「14〜18%」はどうやって決まるのですか？",
    answer: `Airbnbの口コミ評価に応じて手数料が上下する仕組みです。
評価が高いほど私たちの手数料も上がるため、私たちも本気で口コミ改善にコミットできます。`,
  },
  {
    question: "清掃費や清掃管理の費用はどうなりますか？",
    answer: `清掃費は物件の広さや仕様により異なるため、初回相談時に見積もりをご提示します。
清掃会社とのやり取りは完全に代行します。`,
  },
  {
    question: "緊急時対応（鍵トラブル・設備不良など）はお願いできますか？",
    answer: `成果報酬型は緊急対応が含まれています。
固定報酬型の場合はオプションとして追加できます（1回あたり8,000円を想定）。`,
  },
  {
    question: "契約期間や最低利用期間はありますか？",
    answer: `原則として縛りはありません。
長期契約を前提とした無理な勧誘や縛り付けは行っていません。`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 text-slate-800">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
          よくある質問
        </h2>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl bg-white border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-sm md:text-base">
                    Q. {item.question}
                  </span>
                  <span className="ml-4 text-xl leading-none text-slate-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-700">
                    {item.answer.split("\n").map((line, i) =>
                      line.trim() === "" ? (
                        <div key={i} className="h-3" />
                      ) : (
                        <p key={i} className={i === 0 ? "" : "mt-2"}>
                          {line}
                        </p>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
