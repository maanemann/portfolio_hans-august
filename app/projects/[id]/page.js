
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
  return ( <>
      <div className={`${theme.textATheme}`}
      >
        <h1 className="text-3xl font-bold">{project.title}</h1>
        {/* `\n` is a "newline character" used in projectsData.json, and with the split method, the string is split into an array of substrings, which is then mapped over to render each substring as a paragraph
        */}
        <div className='grid gap-1'>
          {project.description.split('\n').map((paragraph, index) => (
            <p key={index} className="paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
      <div
        className='relative w-full'
        style={{
          // Leaves a space for the image to fill. In CSS, percentage-based padding is calculated relative to the width of the parent :
          paddingBottom: `${imgHeight / imgWidth * 100}%`
        }}
      >
        <Image
          src={project.imgSrc} alt={project.imgAlt}
          priority fill sizes="100vw"
          className="w-full object-contain object-left-top
            opacity-0
          "
          onLoad={(e) =>
            e.target.classList.remove('opacity-0')
          }
        />
      </div>
  </> );
}
 
export default ProjectDetails;