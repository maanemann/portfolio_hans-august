
'use client'

import { useState } from "react";

import { useThemeContext, useMenuContext } from "@/app/context";
import NavContent from "./NavContent";

const MainNav = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useThemeContext();
  const {
    setMenuVisibility, handleMenu,
    maskVisibility, setMaskVisibility,
    setRoadmapVisibility, roadmapOff
    
  } = useMenuContext();
  // const [maskVisibility, setMaskVisibility] = useState(`hidden`);

  // const filteredFilms = searchTerm !== ""
  //   ? films.filter(film =>
  //     // filteret gøres case-insensitive ved at konvertere alle strings til lowercase :
  //     film.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     || film.overview.toLowerCase().includes(searchTerm.toLowerCase()))
  //   // Hvis søgefeltet er tomt vises ingenting (tom array) :
  //   : [];

  const [menuTranslation, setMenuTranslation] = useState(``)

  // const handleTranslation = () => {
  //   // ? HVORFOR er der ingen transition på det her?? :
  //   setMenuTranslation(maskVisibility == `hidden` ? `-translate-y-6` : `-translate-y-0`);
  // }

  return ( <>
    <div
      // mask for menu, todo (+ more?) :
      className={`
        ${maskVisibility} fixed top-0 left-0 w-screen h-screen
        ${theme.bgBTheme} backdrop-blur-lg opacity-95 z-20
      `}
      onClick={(() => {
        setMenuVisibility(`hidden`);
        setMaskVisibility(`hidden`);
        setMenuTranslation(`-translate-y-0`);
        setRoadmapVisibility(roadmapOff)
      })}
    />
    {/* menu button for phones : */}
    <div
      onClick={ handleMenu }
      className={`
        grid md:hidden fixed bottom-0 left-1/2 -translate-x-1/2
        w-[4.25rem] h-[3.12rem] z-40 rounded-t-full
        ${theme.bgBrightBTheme}
        cursor-pointer
      `}
    >
      {/* button background : */}
      <div
        className={`
          absolute grid
          self-end justify-self-center
          w-14 h-11  rounded-t-full
          ${theme.bgBrightTheme}
          cursor-pointer
        `}
      >
        {/* burger icon lines : */}
        <div className="
          absolute w-1/3 h-2/4 m-auto
          left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
          grid items-center justify-items-center
        ">
          <div className={`w-2/3 h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
          <div className={`w-5/6 h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
          <div className={`w-full h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
        </div>
      </div>
    </div>

    <NavContent menuTranslation={menuTranslation} />
  </> );
}
 
export default MainNav;
