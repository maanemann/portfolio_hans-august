
'use client'

import { useThemeContext } from "@/app/context";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MainNav = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useThemeContext();
  const pathname = usePathname();

  useEffect(() => {
      const mainNavUl = document.querySelector('.mainNavUlCustom');
      if (pathname === '/') {
        mainNavUl.classList.add('brightness-90');
        mainNavUl.classList.remove('brightness-[.66]');
        mainNavUl.classList.remove('saturate-[66%]');
        mainNavUl.classList.remove('-hue-rotate-15');
        mainNavUl.classList.remove('hover:brightness-[.9]');
        mainNavUl.classList.remove('hover:saturate-[1]');
        mainNavUl.classList.remove('hover:hue-rotate-0');
      } else {
        mainNavUl.classList.add('brightness-[.66]');
        mainNavUl.classList.add('saturate-[66%]');
        mainNavUl.classList.add('-hue-rotate-15');
        mainNavUl.classList.add('hover:brightness-[.9]');
        mainNavUl.classList.add('hover:saturate-[1]');
        mainNavUl.classList.add('hover:hue-rotate-0');
        mainNavUl.classList.remove('brightness-90');
      }
  }, [pathname]);

  // const filteredFilms = searchTerm !== ""
  //   ? films.filter(film =>
  //     // filteret gøres case-insensitive ved at konvertere alle strings til lowercase :
  //     film.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     || film.overview.toLowerCase().includes(searchTerm.toLowerCase()))
  //   // Hvis søgefeltet er tomt vises ingenting (tom array) :
  //   : [];

  const Li = ({ children, href }) => (
    <li className="
      relative w-[6.5rem] h-8
      [&_a]:after:content-['_]']
      [&_a]:after:absolute
      [&_a]:after:right-0
      [&_a]:after:brightness-50
    ">
      <Link href={ href }>
        { children }
      </Link>
    </li>
  );

  return (
    <nav
      className="
        hidden md:block
        mainNavUlCustom opacity-90
        p-10 mb-[4.5rem]
        overflow-y-auto
    ">
      {/* <Link
        href="/#"
        className="
          block w-24 mx-auto mb-[4.5rem]
        "
      >
        <div className={`
          w-full aspect-square
          border-x-3 border-t-3
          ${theme.borderATheme}
          mx-auto
        `} />
        <div className={`
          w-[calc(100%+3rem)] -ml-6
          border-t-3
          ${theme.borderATheme}
          mx-auto -mt-6
        `} />
      </Link> */}

      <ul className={`
        ${theme.textA2Theme}
        font-medium tracking-wide
      `}>
        <li className="
          w-fit p-2 border-2 mb-3
        ">
          UI / UX
          <br /> designer +
          <br /> developer
        </li>
        <Li href="/#">
          [ home
        </Li>
        <Li href="/#">
          [ about me
        </Li>
        <Li href="/#">
          [ cv
        </Li>
        <Li href="/#">
          [ contact
        </Li>
        <Li href="/#">
          [ more...
        </Li>
        <li className="mt-3">
          Pick a color
          <span className="block text-lg mt-0.5 ml-2">
          ↓
            {/* ↓ ↓▼▾ 🠃🠋🠇🠛🠣 */}
          </span>
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



    </nav>
   );
}
 
export default MainNav;
