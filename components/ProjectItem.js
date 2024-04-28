
'use client'

import Image from "next/image";
import { useThemeContext } from "@/app/context";
import Link from "next/link";

const ProjectItem = ({ imgSrc, imgAlt, link }) => {
  const { theme } = useThemeContext();

  return ( <figure className={`
    relative w-full h-[16rem] xl:h-[24rem] 2xl:h-[32rem]
    ${theme.bgBrightBTheme}
    coolCornersCustom
  `}>
    <Link href={ link } className="
      absolute w-full h-full
      hover:saturate-[1.33] hover:brightness-[1.1]
      "
    >
      <p className={`
        block mt-6 ml-12 opacity-65
        text-4xl font-bold tracking-wider italic ${theme.textA2Theme}
      `}>
        Loading...
      </p>
      <Image
        src={ imgSrc } alt={ imgAlt }
        priority fill sizes="64vw"
        className="absolute object-cover opacity-0"
        onLoad={(e) => {
          e.target.classList.remove('opacity-0');
          e.target.previousElementSibling.remove();
        }}
      />
    </Link>
  </figure> );
}
 
export default ProjectItem;

