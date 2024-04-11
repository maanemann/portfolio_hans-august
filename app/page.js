
'use client'

// import { useThemeContext } from '@/app/context'
import ProjectItem from "@/components/ProjectItem";
import { Suspense } from 'react';
import Loading from './loading';
import data from '@/public/projectsData.json';

export default function Home() {
  // const { theme } = useThemeContext();

  return (
      <section className='
        grid gap-1 py-1 content-start
        grid-cols-2 grid-flow-row
      '>
        <Suspense fallback={<Loading />}>
          {data.map(project => (
            <ProjectItem
              key={project.id}
              imgSrc={ project.imgSrc }
              imgAlt={ project.imgAlt }
              link={`/projects/${project.id}`}
            />
          ))}
          {/* <ProjectItem
            imgSrc={ cocoon_init } imgAlt="Cocoon UI"
          />
          <ProjectItem
            imgSrc={ pioneers_init } imgAlt="Trailmakers UI"
          />
          <ProjectItem
            imgSrc={ kalimba_init } imgAlt="Kalimba UI"
          /> */}
        </Suspense>
      </section>
  );
}

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more