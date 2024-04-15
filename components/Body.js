
'use client'

import { useThemeContext } from "@/app/context";
import MainNav from "./MainNav";

const Body = ({ nextFont, children }) => {
  const { theme, setTheme } = useThemeContext();

  return (
    <body className={`
      ${ nextFont } flex w-screen h-screen
      overflow-hidden ${theme.bgATheme}
      scrThinCustom ${theme.scrollbarTheme}
      tracking-normal
    `}>
      <MainNav />
      <div className="
        absolute bottom-6 left-6
        flex gap-4
      ">
        <div
          onClick={() => setTheme('ockerdust')}
          className="
            w-6 aspect-square cursor-pointer
            bg-ockerdust-700 rounded-full
        "/>
        <div
          onClick={() => setTheme('aqua')}
          className="
            w-6 aspect-square cursor-pointer
            bg-aqua-800 rounded-full
        "/>
      </div>
      <main className={`
        w-full h-full flex flex-col
        items-stretch gap-1 p-1
        overflow-y-auto
        ${theme.bgBTheme}
      `}>
        { children }
      </main>
    </body>
  );
}
 
export default Body;

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more