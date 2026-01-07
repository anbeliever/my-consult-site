"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* ロゴ */}
        <Link href="/" className="text-sm md:text-base font-semibold tracking-tight">
          宿番
        </Link>

        {/* ナビ */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <Link href="/first" className="hover:text-sky-600">初めての方へ</Link>
          <Link href="/services" className="hover:text-sky-600">サービス</Link>
          <Link href="/strength" className="hover:text-sky-600">強み</Link>
          <Link href="/pricing" className="hover:text-sky-600">料金・プラン</Link>
          <Link href="/contact" className="hover:text-sky-600">お問い合わせ</Link>
        </nav>

        {/* CTA（ページ内アンカーなので a でOK） */}
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
