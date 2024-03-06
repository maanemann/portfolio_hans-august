
'use client'

import { useEffect } from "react";
import { useThemeContext } from "@/app/context";
import Link from "next/link";
// import classNames from "classnames";

const MainNav = () => {
  const { theme } = useThemeContext();

  // Denne useEffect logger bare, når der er ændringer i theme konteksten :
  useEffect(() => {
    console.log("Theme updated:", theme);
  }, [theme]);

  return (
    <nav
      className={`
        w-64
        px-20
      `}
    >
      <Link
        href="/#"
        className="
          block mb-16
        "
      >
        <div className={`
          w-full
          aspect-square
          border-x-3 border-t-3
          ${theme.borderATheme}
          mx-auto mt-16
        `} />
        <div className={`
          w-[calc(100%+3rem)] -ml-6
          border-t-3
          ${theme.borderATheme}
          mx-auto -mt-6
        `} />
      </Link>
      <ul className={`
        ${theme.textATheme}
      `}>
        <li><Link href="#">
          hans august
        </Link></li>
        <li><Link href="#">
          interface/web dev/design
        </Link></li>
      </ul>
    </nav>
   );
}
 
export default MainNav;
