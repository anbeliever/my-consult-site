// components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* ロゴっぽいテキスト */}
        <a href="/" className="leading-tight hover:opacity-90 transition">
        <div className="inline-block border-b-4 border-sky-600 pb-1">
        <span className="text-xl md:text-2xl font-extrabold tracking-tight text-sky-600">
        宿番
        </span>
      </div>
  <div className="text-[10px] tracking-widest text-slate-500 mt-1">
    YADOBAN
  </div>
</a>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
        <a href="/first" className="hover:text-sky-600">初めての方へ</a>
        <a href="/services" className="hover:text-sky-600">サービス</a>
        <a href="/strength" className="hover:text-sky-600">強み</a>
        <a href="/pricing" className="hover:text-sky-600">料金・プラン</a>
        <a href="/contact" className="hover:text-sky-600">お問い合わせ</a>
        </nav>

        {/* CTAボタン */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-sm"
        >
          無料相談
        </a>
      </div>
    </header>
  );
}
