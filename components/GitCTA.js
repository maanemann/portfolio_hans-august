
import githubMark from "@/public/github-mark/github-mark-white.svg";
import Image from "next/image";
import { useThemeContext } from "@/app/context";
import Link from "next/link";

const GitCTA = ({ styling }) => {
  const { theme } = useThemeContext();

  return ( 
    <figure className={`
      row-start-1 row-end-1
      col-start-1 col-end-1

      ${styling}
      
      coolCornersCustom
      mx-auto mt-12 mb-8 py-4
      
      relative doubleCustom
      
      hover:drop-shadow-lg
    `}>
        {/* hover:opacity-80 hover:mix-blend-soft-light */}
        {/* ${theme.bgBrightBTheme} */}

      {/* § her printes `pointerType` variablens indhold ("group") som class : */}
      <Link target="_blank" rel="noopener" className="grid justify-items-center"
        href="https://github.com/maanemann/portfolio_hans-august"
      >
          {/* ${pointerType} */}
        <Image src={githubMark} alt="Link to GitHub repository"
          style={{ mixBlendMode: "color-burn" }}
          className="
            w-10 h-10 m-3
            mix-blend-multiply
          "
        />
        <figcaption className={`
          text-white text-center font-medium
          text-sm tracking-wide
        `}>
          view source code
        </figcaption>
      </Link>
    </figure>
   );
}
 
export default GitCTA;