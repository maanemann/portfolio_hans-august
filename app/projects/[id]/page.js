
'use client'

import data from '@/data/projectsData.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useThemeContext } from '@/app/context';


const ProjectDetails = () => {
  const { id } = useParams();
  const { theme } = useThemeContext();
  const project = data.find(project => project.id === id);
  const imgWidth = project.imgWidth;
  const imgHeight = project.imgHeight;
  return (
    <article className='p-8 pt-14 md:pl-48 2xl:py-24
    grid gap-10 w-full max-w-[64rem] mx-auto'>
      <div className={`${theme.textATheme}`}>
        <div className='flex'>
          <h1
            className="
              text-3xl font-bold pb-11
              sm:text-5xl md:text-4xl lg:text-6xl xl:text-8xl
            ">
            {project.title}
          </h1>
          <div className='
            ml-auto h-fit w-max
            mt-[0.14rem] sm:mt-2 md:mt-1 lg:mt-[.55rem] xl:mt-7
            rounded-full
            border-2 xl:border-3
            ${theme.borderATheme}
          '>
            <span className={`
              block text-center
              px-4 xl:px-6
              py-1 xl:py-2
              font-bold xl:font-medium
              text-xs sm:text-sm md:text-xs lg:text-lg xl:text-2xl
            `}>
              UI / UX
              {/* 🞵🞶🞷🞸🞹🞺 */}
            </span>
          </div>
        </div>
        {/* `\n` is a "newline character" used in projectsData.json, and with the split method, the string is split into an array of substrings, which is then mapped over to render each substring as a paragraph
        */}
        <p className='font-medium mb-3'>
          Company: { project.company }
        </p>
        <div className='grid gap-8'>
          { project.description.split('\n').map((paragraph, index) => (
            <p key={index} className="
              paragraph lg:columns-2 gap-8
            ">{paragraph}</p>
          ))}
        </div>
      </div>
      <div
        className={`relative w-full ${theme.bgATheme} xl:mb-6`}
        style={{
          // Leaves a space for the image to fill. In CSS, percentage-based padding is calculated relative to the width of the parent :
          paddingBottom: `${imgHeight / imgWidth * 100}%`
        }}
      >
        <p className={`
          block mt-6 ml-10
          text-4xl font-bold tracking-wider italic ${theme.textA2Theme}
        `}>
          Loading...
        </p>
        <Image
          src={project.imgSrc} alt={project.imgAlt}
          priority fill sizes="90vw"
          className="w-full object-contain object-left-top
            opacity-0
          "
          onLoad={(e) => {
            e.target.classList.remove('opacity-0');
            e.target.previousElementSibling.remove();
          }}
        />
      </div>
    </article>
  );
}
 
export default ProjectDetails;