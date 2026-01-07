// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 text-xs text-slate-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} yadoban.</p>
        <p>小規模宿・民泊オーナーのための運営・売上改善サポート。</p>
      </div>
    </footer>
  );
}
