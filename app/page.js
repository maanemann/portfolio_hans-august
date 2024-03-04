
'use client'
// import { CarImage } from "./fetchtest/page";

import { useThemeContext, ImageLoopComponent } from '@/app/context'
import ProjectItem from "@/components/ProjectItem";
import Link from 'next/link';
// import Image from "next/image";

export default function Home() {
  const { theme } = useThemeContext();
  // const { image } = useImageContext();

  return (
    <main className={`
      w-full grid gap-[3px] p-[3px]
      overflow-y-scroll
      bg-blend-darken ${theme.bgBTheme}
    `}>
      <ImageLoopComponent />
      {/* <Image
        src={image}
        alt="movie poster"
        width={300}
        height={0}
        className='
          w-96 object-contain
          m-4 coolCorners
        '
      /> */}
      <Link href="/dynamictest/1">Dynamic link ✨</Link>
      <ProjectItem />
      <ProjectItem />
    </main>
  );
}

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more