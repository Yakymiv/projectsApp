import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Projects app",
  description: "Test Projects app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-dark ${spaceGrotesk.className}`}>{children}</body>
    </html>
  );
}
