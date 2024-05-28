
'use client'

import Image from "next/image";
import { useThemeContext } from "@/app/context";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectItem = ({ title, imgSrc, imgAlt, link }) => {
  const { theme } = useThemeContext();
  const [pointerType, setPointerType] = useState(null);

  // tjek om der bruges touch device (condition false) elle ej (condition true). useEffect sikrer at koden ikke kører på serveren, hvor `window` ikke eksisterer :
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setPointerType("group");
    }
  }, []);

  return ( <figure className={`
    relative w-full h-[16rem] xl:h-[24rem] 2xl:h-[32rem]
    ${theme.bgBrightBTheme}
    coolCornersCustom
  `}>
    {/* her printes `pointerType` variablens indhold ("group") som class : */}
    <Link href={ link } className={`
      absolute w-full h-full overflow-hidden
      ${pointerType}
    `}>
      <p className={`
        block mt-6 ml-12 opacity-65
        text-4xl font-bold tracking-wider italic ${theme.textA2Theme}
      `}>
        Loading...
      </p>
      <Image
        src={ imgSrc } alt={ imgAlt }
        priority fill sizes="64vw"
        className="
          opacity-0
          absolute object-cover
        "
        onLoad={(e) => {
          e.target.classList.add('opacity-65', 'group-hover:opacity-100');
          e.target.classList.remove('opacity-0');
          e.target.previousElementSibling.remove();
          e.target.nextElementSibling.classList.remove('opacity-0');
        }}
      />
      <div className="
        opacity-0
      ">
        <div className={`
          absolute w-full h-full bottom-0
          bg-gradient-to-t ${theme.gradientTheme} to-transparent
          group-hover:opacity-0
        `}/>
        <h2 className={`
          absolute bottom-0 text-nowrap my-1 mx-3
          text-3xl font-bold lowercase tracking-wider
          ${theme.textATheme}
          group-hover:-my-32 group-hover:-mx-52
          group-hover:text-7xl ease-in-out duration-150
        `}>
          { title }
        </h2>
      </div>
    </Link>
  </figure> );
}
 
export default ProjectItem;

