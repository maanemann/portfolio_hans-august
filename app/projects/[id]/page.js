
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
    <article className='p-8 pt-14 2xl:py-24
    grid gap-10 w-full max-w-[64rem] mx-auto'>
      <div className={`${theme.textATheme}`}>
        <div className='flex'>
          <h1 className="text-8xl font-bold pb-11">{project.title}</h1>
          <div className='
            ml-auto h-fit w-max mt-7
            rounded-full border-3
            ${theme.borderATheme}
          '>
          <span className={`
            block px-6 py-2
            text-center text-2xl
            font-medium
          `}>
            UI / UX
            {/* 🞵🞶🞷🞸🞹🞺 */}
          </span>
          </div>
        </div>
        {/* `\n` is a "newline character" used in projectsData.json, and with the split method, the string is split into an array of substrings, which is then mapped over to render each substring as a paragraph
        */}
        {/* Render `project.company` if not empty : */}
        { project.company && (
          <p className='font-medium mb-3'>
            Company: { project.company }
          </p>
        )}
        {  project.description ? (
          <div className='lg:columns-2 gap-10'>
            {/* `orphans` virker desværre ikke i ff (`orphansCustom`) */}
            { project.description.split('\n').map((paragraph, index) => (
              <p key={index} className="
                orphansCustom
                mb-7 last:mb-0 text-pretty
              ">{paragraph}</p>
            ))}
          </div>
        )
        : (
          <p className='mb-7 text-pretty max-w-[32rem]'>
            No description yet, only this placeholder text. Have a look at some of the later projects, they should have one.
          </p>
        )
      }
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