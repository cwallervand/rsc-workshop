import "@repo/ui/styles.css";
import "~/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Tudlu",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
