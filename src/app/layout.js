import { Inter } from "next/font/google";
import "./globals.css";
import Sidebare from "@/components/Sidebare";
import TopBare from "@/components/TopBare";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid" style={{ gridTemplateColumns: "60px 1fr" }}>
          <div className="">
            <Sidebare />
          </div>
          <div className=" ">
            <TopBare />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
