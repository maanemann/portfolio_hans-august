
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
      className={`
        grid md:hidden fixed bottom-0 left-1/2 -translate-x-1/2
        w-16 h-12 z-30 ${theme.bgBrightTheme} rounded-t-full
        cursor-pointer
      `}
      // onClick={handleRoadmap}
    >
      <div className="w-1/3 h-2/4 m-auto grid items-center justify-items-center">
        <div className={`w-2/3 h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
        <div className={`w-5/6 h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
        <div className={`w-full h-1/3 ${theme.bgBrighterTheme} rounded-full`}></div>
      </div>
    </div>

    <NavContent menuVisibility={menuVisibility} />
  </> );
}
 
export default MainNav;
