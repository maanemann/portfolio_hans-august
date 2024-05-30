
'use client'

import { useThemeContext } from "@/app/context";

const TechMsg = () => {
  const { theme } = useThemeContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto pt-0 md:pt-12">
      <span className={`
      block w-full mx-auto pt-4 px-6 pb-[4rem]
      md:py-4 md:px-28
      text-center ${theme.textA4Theme}
      text-wrap xs:text-nowrap
      border-t-2 ${theme.borderDarkerTheme}
      ${theme.bgBrightBTrTheme}
      `}>
        <span className="xs:block md:inline"> made from scratch with Next.JS & Tailwind CSS, </span>
        © { currentYear } Hans August
      </span>
    </footer>
  );
}
 
export default TechMsg;