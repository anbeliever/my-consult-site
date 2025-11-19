// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "民泊・ホテル運営コンサル",
  description:
    "運営 × 集客 × 価格戦略で収益最大化。現場と数字に強い伴走支援で、成果に直結する打ち手を実装します。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
