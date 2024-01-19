import type { Metadata } from "next";
import { AOSInit } from './plugins/aos'
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

import "./styles/css/globals.css";
import "./styles/scss/main.scss";

export const metadata: Metadata = {
  title: "Weiqi (Dennis) Zhuang",
  description: "Weiqi's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <AOSInit />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
