
'use client'

import { useThemeContext } from "@/app/context";
import { usePathname } from "next/navigation";
import Link from "next/link";

const EdgeBox = ({ children }) => {
  const { theme } = useThemeContext();

  return ( <>
    {/* <div className="h-max"> */}
    <span className={`
      block px-3 py-[0.125rem] text-nowrap
      border-2
      ${theme.borderDarkTheme}
    `}>
      { children }
    </span>
    <div className={`
      w-full h-[0.5rem]
      border-2 -mt-[2px]
      ${theme.borderDarkTheme}
    `} />
    {/* </div> */}
  </> );
}

export { EdgeBox };


const Li = ({ children, href, target }) => {
  const pathname = usePathname();

  return ( 
    <li>
      <Link href={ href } target={ target } className={`
        grid content-center w-fit mr-2
        ${pathname === href ? 'underline' : ''}
      `}>
        <EdgeBox>
          { children }
        </EdgeBox>
      </Link>
    </li>
  );
}
 
export default Li;