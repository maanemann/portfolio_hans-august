
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeWrapper } from "./context";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Body from "@/components/Body"
import { Suspense } from "react";
import Loading from "./loading";

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hans August",
  description: "Portfolio of Hans August",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <ThemeWrapper>
            <Body nextFont={ dmSans.className }>
              { children }
            </Body>
        </ThemeWrapper>
      </Suspense>
    </html>
  );
}
