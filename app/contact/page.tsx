// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-slate-800">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h1>

      <p className="text-slate-600 leading-relaxed mb-10">
        ご相談・お問い合わせは、下記のメールまたはオンライン相談フォームよりご連絡ください。
        内容を確認し、24時間以内に返信いたします。
      </p>

      <section className="space-y-6 text-slate-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">メール</h2>
          <p className="font-mono bg-slate-100 p-3 rounded-lg">
            enbeliever59@gmail.com
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">オンライン相談（30分）</h2>
          <p className="mb-3">無料でご利用いただけます。</p>
          <a
            href="mailto:enbeliever59@gmail.com?subject=オンライン相談予約&body=相談希望日時をご記入ください。"
            className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            日程を相談する
          </a>
        </div>
      </section>

    </div>
  );
}
