// app/thanks/page.tsx
import Link from 'next/link';

export default function ThanksPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center text-slate-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        送信ありがとうございました
      </h1>
      <p className="text-slate-600 leading-relaxed mb-8">
        お問い合わせ内容を確認の上、24時間以内に返信いたします。
      </p>

      <div className="my-12 border-t border-slate-200 pt-10">
        <p className="text-slate-700 leading-relaxed mb-6">
          より具体的な相談をご希望の場合は、無料オンライン相談（30分）もご利用いただけます。
        </p>
        <a
          href="#"
          className="inline-block px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md"
        >
          無料オンライン相談を予約する
        </a>
      </div>

      <Link
        href="/"
        className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        トップへ戻る
      </Link>
    </div>
  );
}
