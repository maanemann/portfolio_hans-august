import { ThemeWrapper } from "./context";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hans August",
  description: "Portfolio of Hans August",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <body className={`
          ${inter.className}>
          flex h-screen overflow-hidden
        `}>
          <nav className="
            w-64 border-r-3
            border-r-ockerdust-700
            px-20
          ">
            <Link
              href="#"
              className="
                block mb-16
              "
            >
              <div className="
                w-full
                aspect-square
                border-x-3 border-t-3
                border-ockerdust-700
                mx-auto mt-16
              "/>
              <div className="
                w-[calc(100%+3rem)] -ml-6
                border-t-3
                border-ockerdust-700
                mx-auto -mt-6
              " />
            </Link>
            <ul className="
              text-ockerdust-700
            ">
              <li><Link href="#">
                hans august
              </Link></li>
              <li><Link href="#">
                interface/web dev/design
              </Link></li>
            </ul>
          </nav>
          {children}
        </body>
      </ThemeWrapper>
    </html>
  );
}
