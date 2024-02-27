
'use client'

import { useThemeContext } from '@/app/context'
import ProjectItem from "@/components/ProjectItem";

export default function Home() {
  const { theme } = useThemeContext();

  return (
    <main className={`
      w-full grid gap-[3px] py-[3px] pr-[3px]
      overflow-y-scroll
      bg-blend-darken ${theme.bgBTheme}
    `}>
      {/* { theme } */}
      {/* <Lauphex /> */}
      <ProjectItem />
      <ProjectItem />
    </main>
  );
}

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more