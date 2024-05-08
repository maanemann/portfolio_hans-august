
'use client'

import { useThemeContext } from "@/app/context";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Li, { EdgeBox } from "@/components/menuItem";
import Roadmap from "./Roadmap";

const roadmapOff = `-translate-x-full opacity-0 pointer-events-none`
const roadmapOn = `translate-x-32 opacity-100 pointer-events-auto`

const MainNav = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useThemeContext();
  const pathname = usePathname();
  const [roadmapVisibility, setRoadmapVisibility] = useState(roadmapOff);
  const [maskVisibility, setMaskVisibility] = useState(`hidden`);

  const handleRoadmap = () => {
    if (roadmapVisibility.includes('opacity-100')) {
      setRoadmapVisibility(roadmapOff);
      setMaskVisibility(`hidden`);
    } else {
      setRoadmapVisibility(roadmapOn);
      setMaskVisibility(`block`);
    }
  }


  // ? Det her er gjort helt skørt og ikke react-agtigt. Det skulle nok have være gjort med en state :
  useEffect(() => {
      const mainNavUl = document.querySelector('.mainNavUlCustom');
      if (pathname.includes('/projects')) {
        // mainNavUl.classList.add('pt-11');

        mainNavUl.classList.add('brightness-[.66]');
        mainNavUl.classList.remove('brightness-90');

        mainNavUl.classList.add('saturate-[66%]');
        mainNavUl.classList.add('-hue-rotate-15');

        mainNavUl.classList.add('hover:brightness-[.9]');
        mainNavUl.classList.add('hover:saturate-[1]');
        mainNavUl.classList.add('hover:hue-rotate-0');
      } else {
        // mainNavUl.classList.remove('pt-11');

        mainNavUl.classList.add('brightness-90');
        mainNavUl.classList.remove('brightness-[.66]');

        mainNavUl.classList.remove('saturate-[66%]');
        mainNavUl.classList.remove('-hue-rotate-15');

        mainNavUl.classList.remove('hover:brightness-[.9]');
        mainNavUl.classList.remove('hover:saturate-[1]');
        mainNavUl.classList.remove('hover:hue-rotate-0');
      }
  }, [pathname]);

  // const filteredFilms = searchTerm !== ""
  //   ? films.filter(film =>
  //     // filteret gøres case-insensitive ved at konvertere alle strings til lowercase :
  //     film.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     || film.overview.toLowerCase().includes(searchTerm.toLowerCase()))
  //   // Hvis søgefeltet er tomt vises ingenting (tom array) :
  //   : [];

  return ( <>
    <Roadmap handleRoadmap={handleRoadmap} visibility={roadmapVisibility} />
    <div
      className={`
        ${maskVisibility} fixed top-0 left-0 w-screen h-screen
        ${theme.bgBTheme} backdrop-blur-md opacity-65 z-20
      `}
      onClick={handleRoadmap}
    />

    <div className="
      block md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 z-30 bg-ocker-300
      cursor-pointer"
      // onClick={handleRoadmap}
    />

    <nav
      className="
        hidden md:block w-max z-10
        m-6 pr-6 pb-12 fixed max-h-[calc(100vh-8rem)]
        overflow-y-auto overflow-x-hidden maskGradientCustom
    ">
      <div className="
        mainNavUlCustom flex
      ">
        <ul className={`
          ${theme.textA2Theme}
          font-medium tracking-wide
          grid gap-2 mr-1
        `}>
          {/* <li className={`
            w-fit px-3 py-1 mb-2 text-nowrap
            outline-dashed -outline-offset-2
            outline-2 ${theme.outlineDarkTheme}
            text-opacity-35
          `}>
            designer +
            <br /> developer
          </li> */}
          <Li href="/">
            projects
          </Li>
          <Li href="/about">
            about me
          </Li>
          <Li href="https://drive.google.com/file/d/13qEvZptBxu31Iv_ufGIoTMcs0jD50V9K/view?usp=sharing" target="_blank">
            cv
          </Li>
          <Li href="/contact">
            contact
          </Li>
          <li className={`
            w-min px-3 py-1 my-2 hyphens-manual text-nowrap
            outline-dashed -outline-offset-2
            outline-2 ${theme.outlineDarkTheme}
          `}>
            {/* to do: */}
            <div className="my-2 cursor-pointer">
              <EdgeBox
                onClick={handleRoadmap}
              >
                todo
              </EdgeBox>
            </div>
          </li>
          <li className="text-sm">
            <div className="w-fit text-center ml-[.87rem]">
              themes
              <span className="block mt-0.5">
              ↓
                {/* ↓ ↓▼▾ 🠃🠋🠇🠛🠣 */}
              </span>
            </div>
          </li>
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
  </> );
}
 
export default MainNav;
