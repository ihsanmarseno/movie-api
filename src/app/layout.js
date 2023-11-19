import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "MovLie",
  description: "Aplikasi List Movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="bg-[#818FB4]">
      <body className={`${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
