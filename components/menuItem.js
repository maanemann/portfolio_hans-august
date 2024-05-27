
'use client'

import { useMenuContext, useThemeContext } from "@/app/context";
import { usePathname } from "next/navigation";
import Link from "next/link";

const EdgeBox = ({ children, href, onClick }) => {
  const pathname = usePathname();
  const { theme } = useThemeContext();

  const borderColor = pathname === href ? theme.borderDarkBTheme : theme.borderDarkTheme;

  return (
    <div className="group">
    <span
      onClick={ onClick }
      className={`
        block px-4 md:px-3 py-2 md:py-[0.125rem]
        border-2 text-nowrap
        ${borderColor}
        md:group-hover:rounded-t-lg
      `}
    >
      { children }
    </span>
    <div className={`
      w-full h-[0.5rem]
      border-2 -mt-[2px]
      ${borderColor}
      md:group-hover:rounded-b-lg
    `} />
    </div>
  );
}

export { EdgeBox };


const Li = ({ children, href, target }) => {
  const pathname = usePathname();
  const {
    setMenuVisibility, setMaskVisibility, setRoadmapVisibility, roadmapOff
  } = useMenuContext();
  const { theme } = useThemeContext();

  return ( 
    <li className="relative z-50">
      <Link href={ href } target={ target }
        className={`
          grid content-center w-fit relative
          ${pathname === href ? theme.bgBrightBTheme : ''}
          md:hover:rounded-lg

          md:before:content-[''] md:before:block md:before:absolute
          md:before:-right-3 md:before:bottom-3
          md:before:w-4 md:before:h-4 ${theme.beforeBgBrighterTheme}
          arrowClipCustom md:before:rounded-full
          md:before:hidden md:before:hover:block md:before:hover:animate-move-back-forth
        `}
        onClick={() => {
          setMenuVisibility(`hidden`);
          setMaskVisibility(`hidden`);
          setRoadmapVisibility(roadmapOff)
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