import { type Metadata } from "next";
import { Noto_Sans, Gochi_Hand } from "next/font/google";
import "~/styles/globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-noto-sans",
});

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi-hand",
});

export const metadata: Metadata = {
  title: "Tudlu",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${gochiHand.variable}`}>
      <body className="bg-kantega-white">{children}</body>
    </html>
  );
}
