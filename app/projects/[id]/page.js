
'use client'

import data from '@/data/projectsData.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useThemeContext } from '@/app/context';
import { H1 } from '@/components/Headings';
import Article from '@/components/Article';
import Columns from '@/components/Columns';


const ProjectDetails = () => {
  const { id } = useParams();
  const { theme } = useThemeContext();
  const project = data.find(project => project.id === id);
  const imgWidth = project.imgWidth;
  const imgHeight = project.imgHeight;
  return (
    <Article>
      <div>
        <div className='flex'>
          <H1> {project.title} </H1>
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
        {/* Render `project.company` if not empty : */}
        { project.company && (
          <p className='font-medium mb-3'>
            Company: { project.company }
          </p>
        )}
        {  project.description ? (
          <Columns>
            {/* `orphans` virker desværre ikke i ff (`orphansCustom`) */}
            { project.description.split('\n').map((paragraph, index) => (
              <p key={index} className="
                orphansCustom mb-4 last:mb-0 text-pretty
              ">{paragraph}</p>
            ))}
          </Columns>
        )
        : (
          <p className='mb-7 text-pretty max-w-[32rem]'>
            No description yet, only this placeholder text. Have a look at some of the later projects, they should have one.
          </p>
        )
      }
      </div>
      <div
        className={`
          relative w-full ${theme.bgBrightBTheme} xl:mb-6
          outline outline-2 ${theme.outlineDarkerTheme} outline-offset-[3px]
          before:absolute before:-left-[5px] before:-right-[5px] before:-bottom-[7px] before:h-[3px] ${theme.beforeDarkerTheme}
        `}
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
    </Article>
  );
}
 
export default ProjectDetails;