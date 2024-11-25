
'use client'

// import { useThemeContext } from '@/app/context'
import ProjectItem from "@/components/ProjectItem";
import { Suspense } from 'react';
import Loading from './loading';
import data from '@/data/projectsData.json';
import GitCTA from "@/components/GitCTA";

export default function Home() {
  // const { theme } = useThemeContext();

  return (
    <div>
      <section className='
        grid gap-1 m-2 mb-4 md:mb-2 content-start
        md:ml-40
        sm:grid-cols-2 md:grid-cols-1
        lg:grid-cols-2 xl:grid-cols-3
        grid-flow-row overflow-y-hidden
      '>
        <Suspense fallback={<Loading />}>
          {data.map(project => (
            <ProjectItem
              key={project.id}
              title={ project.title }
              imgSrc={ project.thumbnail.imgSrc }
              imgAlt={ project.thumbnail.imgAlt }
              link={`/projects/${project.id}`}
            />
          ))}
          <div className="
            grid w-fit mx-auto col-span-full
          ">
            <GitCTA styling="
              mix-blend-overlay
            "/>
            <GitCTA styling="
              mix-blend-normal opacity-5
              hover:opacity-100
              hover:animate-pulsate
            "/>
          </div>
        </Suspense>
      </section>
    </div>
  );
}

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more