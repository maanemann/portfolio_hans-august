
'use client'

import { useState } from "react";

import { useThemeContext } from "@/app/context";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Li, { EdgeBox } from "@/components/menuItem";
// import Roadmap from "./Roadmap";
import NavContent from "./NavContent";

// const roadmapOff = `-translate-x-full opacity-0 pointer-events-none`
// const roadmapOn = `translate-x-32 opacity-100 pointer-events-auto`

const MainNav = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useThemeContext();
  // const pathname = usePathname();
  // const [roadmapVisibility, setRoadmapVisibility] = useState(roadmapOff);
  // const [maskVisibility, setMaskVisibility] = useState(`hidden`);

  // const handleRoadmap = () => {
  //   if (roadmapVisibility.includes('opacity-100')) {
  //     setRoadmapVisibility(roadmapOff);
  //     setMaskVisibility(`hidden`);
  //   } else {
  //     setRoadmapVisibility(roadmapOn);
  //     setMaskVisibility(`block`);
  //   }
  // }

  // const filteredFilms = searchTerm !== ""
  //   ? films.filter(film =>
  //     // filteret gøres case-insensitive ved at konvertere alle strings til lowercase :
  //     film.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     || film.overview.toLowerCase().includes(searchTerm.toLowerCase()))
  //   // Hvis søgefeltet er tomt vises ingenting (tom array) :
  //   : [];

  const [menuVisibility, setMenuVisibility] = useState(`hidden`);

  return ( <>
    {/* menu button for phones : */}
    <div
      onClick={() => setMenuVisibility(
        menuVisibility === `hidden` ? `block` : `hidden`
      )}
      // onClick={handleRoadmap}
      className={`
        grid md:hidden fixed bottom-0 left-1/2 -translate-x-1/2
        w-[4.25rem] h-[3.12rem] z-30 rounded-t-full
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
          self-center justify-self-center
          grid items-center justify-items-center
        ">
          <div className={`w-2/3 h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
          <div className={`w-5/6 h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
          <div className={`w-full h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
        </div>
      </div>
    </div>

    <NavContent menuVisibility={menuVisibility} />
  </> );
}
 
export default MainNav;
