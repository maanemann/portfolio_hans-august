
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeWrapper } from "./context";
import { Inter } from "next/font/google";
import "./globals.css";
import Body from "@/components/Body"
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hans August",
  description: "Portfolio of Hans August",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <ThemeWrapper>
            <Body nextFont={ inter.className }>
              { children }
            </Body>
        </ThemeWrapper>
      </Suspense>
    </html>
  );
}
