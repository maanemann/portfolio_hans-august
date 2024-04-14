import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ imgSrc, imgAlt, link }) => {
  return ( <figure className="
    relative posterListCustom
    bg-ockerdust-600/35
    coolCornersCustom
  ">
    <Link href={ link } className="
      absolute w-full h-full
      hover:saturate-[1.33] hover:brightness-[1.1]
    ">
      <Image
        src={ imgSrc } alt={ imgAlt }
        priority fill sizes="64vw"
        className="absolute object-cover opacity-0"
        onLoad={(e) =>
          e.target.classList.remove('opacity-0')
        }
      />
    </Link>
  </figure> );
}
 
export default ProjectItem;

