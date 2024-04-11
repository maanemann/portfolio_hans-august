
'use client'

import data from '@/public/projectsData.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';


const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find(project => project.id === id);
  return (
    <main className='relative w-full h-full'>
      <Image
        src={project.imgSrc} alt={project.imgAlt}
        priority fill sizes="100vw"
        className="absolute object-cover"
      />
    </main>
   );
}
 
export default ProjectDetails;