
'use client'

import { useImageLoopContext, useThemeContext } from "@/app/context";
import Image from "next/image";

const DynamicIdTest = ({ params }) => {
  const { films } = useImageLoopContext();
  const { theme } = useThemeContext();

  // med ´find´ metoden finder vi den film der har samme id som prams.id. Der bruges `==` (loose equality), i stedet for `===` (strict equality), fordi `params.id` er en string, og `film.id` er et tal. Man kunne også konvertere `params.id` til et number med `number(params.id)` :
  const film = films.find(film => film.id == (params.id));

  if (!film) {
    return <h1
    className={`
      text-xl mx-4 my-12
      ${theme.textBrightTheme}
    `}>
      Still loading...
    </h1>
  }

  return (
    <main className="w-full">
      <Image
        src={film.image}
        width={300} height={300}
        alt="Movie poster"
        className="
          w-full h-96
          object-cover object-top
          coolCornersClass
        "
        priority
      />
      <h1 className={`
        text-5xl mx-4 my-12
        ${theme.textBrightTheme}
      `}>
        { film.title }
      </h1>
      <p className={`
        m-4 ${theme.textBrightTheme}
        md:columns-2
        max-w-[1080px] gap-6
      `}>
        { film.overview }
      </p>
    </main>
  );
}
 
export default DynamicIdTest;