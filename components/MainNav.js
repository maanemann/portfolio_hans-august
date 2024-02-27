
'use client'

import { useThemeContext } from "@/app/context";
import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

const MainNav = () => {
  const { theme } = useThemeContext();
  const themeValue = theme.onlyValueTest;
  const [borderColor, setBorderColor] = useState(themeValue);

  useEffect(() => {
  //   const dynamicColor = classNames('border-r-3', `border-${theme.onlyValueTest}`);
    setBorderColor(themeValue);
  }, [theme]);

  // const { theme } = useThemeContext();
  // const dynamicColor = classNames(`border-${theme.onlyValueTest}`);

  return (
    <nav
      className={`
        w-64
        border-r-3 border-${borderColor}
        px-20
      `}
    >
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
   );
}
 
export default MainNav;
