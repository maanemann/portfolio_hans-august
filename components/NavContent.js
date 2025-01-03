
'use client'

import { useThemeContext, useMenuContext } from "@/app/context";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Li, { EdgeBox } from "@/components/menuItem";
import Roadmap from "./Roadmap";

const NavContent = ({ menuTranslation }) => {
  const { theme } = useThemeContext();
  const { menuVisibility, handleRoadmap } = useMenuContext();
  const pathname = usePathname();

  // ? Det her er gjort helt skørt og ikke react-agtigt. Det skulle nok have være gjort med en state :
  useEffect(() => {
    const mainNavUl = document.querySelector('.mainNavUlCustom');
    
    const handleMenuDim = () => {
      if (pathname.includes('/projects') && window.innerWidth > 768) {
        mainNavUl.classList.add(
          'brightness-[.66]', 'saturate-[66%]', '-hue-rotate-15',
          'hover:brightness-[.9]', 'hover:saturate-[1]', 'hover:hue-rotate-0'
        );
      } else {
        mainNavUl.classList.remove(
          'brightness-[.66]', 'saturate-[66%]', '-hue-rotate-15',
          'hover:brightness-[.9]', 'hover:saturate-[1]', 'hover:hue-rotate-0'
        );
      }
    }

    handleMenuDim();

    window.addEventListener('resize', handleMenuDim);

    // cleanup :
    return () => {
      window.removeEventListener('resize', handleMenuDim);
    }
}, [pathname]);

  return ( <>
    <div className={`
      ${menuVisibility} md:block z-30
    `}>
      {/* Roadmap, switch = "todo knap" ↓↓ */}
      {/* <Roadmap /> */}

      <nav
        className={`
          block fixed mb-[4.5rem]
          text-3xl md:text-base
          md:mt-6 md:ml-7 md:pt-1 md:pb-12
          max-h-[calc(100vh-5rem)] md:max-h-[calc(100vh-8rem)]
          left-[50vw] -translate-x-1/2 md:left-0 md:translate-x-0
          bottom-0 md:bottom-auto
          overflow-y-auto maskGradientCustom
          ${menuTranslation}
        `}
      >
        <div className="
          mainNavUlCustom brightness-90 flex
        ">
          <ul className={`
            ${theme.textA2Theme}
            font-medium tracking-wide
            grid gap-4 md:gap-2 md:mr-1
            justify-items-center md:justify-items-start
          `}>
            <Li href="/">
              projects
            </Li>
            <Li href="/about">
              about me
            </Li>
            <Li href="https://drive.google.com/file/d/17EGpHGp1EuAXXB3fXFxE6KTwqH550E8I/view?usp=sharing" target="_blank" rel="noopener">
              cv
            </Li>
            <Li href="/contact">
              contact
            </Li>

            {/* todo knap (genaktiver: indkommenter `<Roadmap />` ↑↑) : */}
            {/* <li className={`
              w-min px-3 -md:mt-[.4rem] py-3 md:my-[.075rem]
              hyphens-manual text-nowrap
              outline-dashed -outline-offset-2
              outline-2 ${theme.outlineDarkTheme}
            `}>
              <div className="cursor-pointer">
                <EdgeBox
                  onClick={handleRoadmap}
                >
                  todo
                </EdgeBox>
              </div>
            </li> */}
          </ul>



          {/* // #region search-field-&-results
          */}

          {/* når value ændres, reflekteres det i searchTerm (state ↑) : */}
          {/* <input
            type="text"
            // searchTerm som value gør dette til et "controlled component" (form element in react hvis value kontrolleres af state), og sikrer at input er 'i sync' med searchTerm (men det virker også uden) :
            value={searchTerm}
            placeholder="Seach !? <3"
            // dette "controlled component" er i sync med searchTerm med `onChange` :
            onChange={
              (e) => setSearchTerm(e.target.value)
            }
            className={`
              ${theme.bgReverseTheme}
              ${theme.textReverseTheme}
              block -ml-6 w-[calc(100%+3rem)]
              px-4 py-1 rounded-full mb-3
              focus:outline-none
            `}
          /> */}

          {/* Søgeresultater.. (index er nødvendig for at react har en id at gå efter til hver item) : */}
          {/* {filteredFilms.map((film, index) => (
            <Link
              href={`/dynamictest/${film.id}`}
              key={index}
              className={`
                ${theme.textBrightTheme}
                block overflow-x-hidden
                w-max leading-8
              `}
            >
              {film.title}
            </Link>
          ))} */}

          {/* // #endregion search-field-&-results */}


        </div>
      </nav>
    </div>
  </> );
}
 
export default NavContent;