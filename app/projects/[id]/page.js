
'use client'

import data from '@/data/projectsData.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';


const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find(project => project.id === id);
  const imgWidth = project.imgWidth;
  const imgHeight = project.imgHeight;
  const twAspect = 'aspect-[' + imgWidth + '/' + imgHeight + ']';
  return ( <>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p>{project.description}</p>
        <div
          className={`relative w-full ${twAspect}`}
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