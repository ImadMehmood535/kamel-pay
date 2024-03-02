import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamel Pay",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
        <Header />
        {children}
      </body>
    </html>
  );
}