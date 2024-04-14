
'use client'

import { useThemeContext } from "@/app/context";
import { useState } from "react";
import Link from "next/link";

const MainNav = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useThemeContext();

  // const filteredFilms = searchTerm !== ""
  //   ? films.filter(film =>
  //     // filteret gøres case-insensitive ved at konvertere alle strings til lowercase :
  //     film.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     || film.overview.toLowerCase().includes(searchTerm.toLowerCase()))
  //   // Hvis søgefeltet er tomt vises ingenting (tom array) :
  //   : [];

  return (
    <nav
      className="w-96 px-10
    ">
      <Link
        href="/#"
        className="block w-24 mx-auto mb-16"
      >
        <div className={`
          w-full aspect-square
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
        <li>
          Welcome to my portfolio. You're lucky to have gained beta access, while it's still in the making! Here are some of the features to come:
          <ul className="
            list-disc list-inside ml-2 my-4
          ">
            <li> More projects </li>
            <li> CV (interactive?) </li>
            <li> About page </li>
            <li> Navigation to replace this.. </li>
          </ul>
          Please click around, feel at home and pick a color theme you like below (there are more in the oven)
        </li>
        <li className="text-lg mt-1 ml-2">
        ↓
          {/* ↓ ↓▼▾ 🠃🠋🠇🠛🠣 */}
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
