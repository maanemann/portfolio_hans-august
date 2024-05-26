
'use client'

import { useMenuContext, useThemeContext } from "@/app/context";
import { usePathname } from "next/navigation";
import Link from "next/link";

const EdgeBox = ({ children, href, onClick }) => {
  const pathname = usePathname();
  const { theme } = useThemeContext();

  const borderColor = pathname === href ? theme.borderDarkBTheme : theme.borderDarkTheme;

  return ( <>
    {/* <div className="h-max"> */}
    <span
      onClick={ onClick }
      className={`
        block px-4 md:px-3 py-2 md:py-[0.125rem]
        border-2 text-nowrap
        ${borderColor}
      `}
    >
      { children }
    </span>
    <div className={`
      w-full h-[0.5rem]
      border-2 -mt-[2px]
      ${borderColor}
    `} />
    {/* </div> */}
  </> );
}

export { EdgeBox };


const Li = ({ children, href, target }) => {
  const pathname = usePathname();
  const { setMenuVisibility, setMaskVisibility } = useMenuContext();
  const { theme } = useThemeContext();

  return ( 
    <li>
      <Link href={ href } target={ target }
        className={`
          grid content-center w-fit
          ${pathname === href ? theme.bgBrightBTheme : ''}
        `}
        onClick={() => {
          setMenuVisibility(`hidden`);
          setMaskVisibility(`hidden`);
        }}
      >
        <EdgeBox href={ href }>
          { children }
        </EdgeBox>
      </Link>
    </li>
  );
}
 
export default Li;