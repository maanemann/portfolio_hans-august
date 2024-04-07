import Image from "next/image";

const ProjectItem = ({ imgSrc, imgAlt }) => {
  return ( <figure className="
    relative posterListClass overflow-hidden
    bg-ockerdust-600/35
    coolCornersClass
  ">
    <Image
      src={ imgSrc } alt={ imgAlt } priority
      fill sizes="64vw"
      className="absolute object-cover"
    />
  </figure> );
}
 
export default ProjectItem;

