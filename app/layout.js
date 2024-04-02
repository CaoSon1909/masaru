import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Masaru",
  description: "Masaru - Chuyển giao nguồn nhân lực chất lượng Nhật Bản",
  keywords: "xkld nhat ban, xuất khẩu lao động nhật bản, masaru, xuất khẩu lao động, đào tạo nhân lực xuất khẩu lao động"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
