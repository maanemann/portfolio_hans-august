
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


// forsøg på refactor af nav til bedre details nav kompatibilitet :

  // 'use client'

  // import { useThemeContext } from "@/app/context";

  // const TechMsg = () => {
  //   const { theme } = useThemeContext();
  //   const currentYear = new Date().getFullYear();

  //   return (
  //     <footer className="relative mt-auto pt-0 md:pt-12">
  //       <span className={`
  //       block w-full h-14 mx-auto pt-4 px-6 pb-[4rem]
  //       md:py-4 md:px-28
  //       text-center ${theme.textA3Theme}
  //       text-wrap xs:text-nowrap
  //       border-t-2 ${theme.borderDarkerTheme}
  //       ${theme.bgBrightBTheme} opacity-25
  //       `} />
  //       <div className="absolute left-[50vw] -translate-x-[50%] top-16">
  //         <span className="xs:block md:inline"> made from scratch with Next.JS & Tailwind CSS, </span>
  //         © { currentYear } Hans August
  //       </div>
  //     </footer>
  //   );
  // }
  
  // export default TechMsg;