// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-slate-800">

      <h1 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h1>

      <p className="text-slate-600 leading-relaxed mb-10">
        ご相談・お問い合わせは、下記のお問い合わせフォームよりご連絡ください。
        内容を確認し、24時間以内に返信いたします。
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
        <form
          action="https://formspree.io/f/mnjqoqkv"
          method="POST"
          className="space-y-6"
         >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              連絡先（メールアドレス）
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              送信する
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}
