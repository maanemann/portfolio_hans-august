import { ImageWrapper, ThemeWrapper } from "./context";
import { Inter } from "next/font/google";
import "./globals.css";
import Body from "@/components/Body"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hans August",
  description: "Portfolio of Hans August",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeWrapper>
      <ImageWrapper>
        <Body nextFont={ inter.className }>
          { children }
        </Body>
      </ImageWrapper>
      </ThemeWrapper>
    </html>
  );
}
