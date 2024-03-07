
'use client'

// import { useEffect } from "react";
import { useThemeContext, useImageLoopContext } from "@/app/context";
import { useState } from "react";
import Link from "next/link";

const MainNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useThemeContext();
  const { films } = useImageLoopContext();

  const filteredFilms = films.filter(
    film =>
      film.title.includes(searchTerm)
    ||
      film.overview.includes(searchTerm)
  );

  // Denne useEffect logger bare, når der er ændringer i theme konteksten :
  // useEffect(() => {
  //   console.log("Theme updated:", theme);
  // }, [theme]);

  return (
    <nav
      className="w-64 px-20
    ">
      <Link
        href="/#"
        className="block mb-16"
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

      {/* searchTerm (state ↑) sættes som default value(?), og når value ændres, reflekteres det i searchTerm */}
      <input
        type="text"
        value={searchTerm}
        placeholder="Seach !? <3"
        onChange={
          (e) => setSearchTerm(e.target.value)
        }
        className={`
          ${theme.bgReverseTheme}
          ${theme.textReverseTheme}
          block -ml-6 w-[calc(100%+3rem)]
          px-4 py-1 rounded-full mb-3
        `}
      />

      {/* Søgeresultater.. : */}
      {filteredFilms.map((film, index) => (
        <Link
          href={`/dynamictest/${film.id}`}
          key={index}
          className={`
            ${theme.textBrightTheme}
            leading-8
          `}
        >
          {film.title}
        </Link>
      ))}

      {/* <ul className={`
        ${theme.textATheme}
      `}>
        <li><Link href="#">
          hans august
        </Link></li>
        <li><Link href="#">
          interface/web dev/design
        </Link></li>
      </ul> */}
    </nav>
   );
}
 
export default MainNav;
