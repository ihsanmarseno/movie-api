import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "MovLie",
  description: "Aplikasi List Movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#818FB4]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
