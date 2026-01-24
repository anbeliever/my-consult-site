import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "宿番（YADOBAN）｜小規模宿泊の運営を、日常から支える。",
  description:
    "宿番（YADOBAN）は、小規模宿向けの運営コンサルティングサービスです。現場と数字に強い伴走支援で、成果に直結する打ち手を実装します。",
  verification: {
    google: "P0VP_dJsfod1lOLdHZ8E-Im1dRuYSvtacMQdbaFrVCg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
