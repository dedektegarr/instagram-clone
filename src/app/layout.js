import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram",
  description: "Instagram clone app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex gap-4">
          <Sidebar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
