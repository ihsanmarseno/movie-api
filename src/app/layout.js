import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Popular Movies",
  description: "Aplikasi List Movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#ECE3CE]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
