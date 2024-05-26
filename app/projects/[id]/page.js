
'use client'

import data from '@/data/projectsData.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useThemeContext } from '@/app/context';
import { H1 } from '@/components/Headings';
import Article from '@/components/Article';
import Columns from '@/components/Columns';
import InlLink from '@/components/InlLink';


const ProjectDetails = () => {
  const { id } = useParams();
  const { theme } = useThemeContext();
  const project = data.find(project => project.id === id);
  // const imgWidth = project.imgWidth;
  // const imgHeight = project.imgHeight;
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
            No description yet, only this automatic placeholder. I&apos;m probably working on the website&apos;s functionality or design and postponing this text. Please have a look at one of my other <InlLink href='/projects'>projects</InlLink> in the meantime, or <InlLink href='/contact'>tell me if you&apos;re curious</InlLink> about this one.
          </p>
        )
      }
      </div>

        {project.media.map((mediaItem, index) => {
          const mediaWidth = mediaItem.width;
          const mediaHeight = mediaItem.height;
          if (mediaItem.type === 'image') {
            return (
              <div
                key={index}
                className={`
                  relative w-full ${theme.bgBrightBTheme} xl:mb-6
                  outline outline-2 ${theme.outlineDarkerTheme} outline-offset-[3px]
                  before:absolute before:-left-[5px] before:-right-[5px] before:-bottom-[7px] before:h-[3px] ${theme.beforeDarkerTheme}
                `}
                style={{
                  // Leaves a space for the image to fill. In CSS, percentage-based padding is calculated relative to the width of the parent :
                  paddingBottom: `${mediaHeight / mediaWidth * 100}%`
                }}
              >
                <p className={`
                  block mt-6 ml-10
                  text-4xl font-bold tracking-wider italic ${theme.textA2Theme}
                `}>
                  Loading...
                </p>
                <Image
                  src={mediaItem.src}
                  alt={mediaItem.alt}
                  // width={mediaItem.width}
                  // height={mediaItem.height}
                  priority={ index === 0 ? true : false }
                  fill sizes="90vw"
                  className="
                    w-full object-cover object-left-top
                    opacity-0
                  "
                  onLoad={(e) => {
                    e.target.classList.remove('opacity-0');
                    e.target.previousElementSibling.remove();
                  }}
                />
              </div>
            );
          } else if (mediaItem.type === 'video') {
            return (
              <div
                key={index}
                className={`
                  relative w-full ${theme.bgBrightBTheme} xl:mb-6
                  outline outline-2 ${theme.outlineDarkerTheme} outline-offset-[3px]
                  before:absolute before:-left-[5px] before:-right-[5px] before:-bottom-[7px] before:h-[3px] ${theme.beforeDarkerTheme}
                `}
                style={{
                  // Leaves a space for the image to fill. In CSS, percentage-based padding is calculated relative to the width of the parent :
                  paddingBottom: `${mediaHeight / mediaWidth * 100}%`
                }}
              >
                <iframe
                  src={mediaItem.iframe + "?rel=0"}
                  width={mediaItem.width}
                  height={mediaItem.height}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  // Den her blev ikke tilføjet af copilot, men var med i youtube's embed kode og virker fornuftig :
                  referrerpolicy="strict-origin-when-cross-origin"
                  // `clipboard-write;` vat tilladt af copilot
                  allowFullScreen
                  className='absolute top-0 left-0 w-full h-full'
                ></iframe>
              </div>
            );
          }
        })}

        {/* Fra da der kun var 1 billede og ikke et media array : */}
          {/* <Image
            src={project.imgSrc} alt={project.imgAlt}
            priority fill sizes="90vw"
            className="w-full object-contain object-left-top
              opacity-0
            "
            onLoad={(e) => {
              e.target.classList.remove('opacity-0');
              e.target.previousElementSibling.remove();
            }}
          /> */}
    </Article>
  );
}
 
export default ProjectDetails;