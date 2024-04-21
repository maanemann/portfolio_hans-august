
'use client'

import { useThemeContext } from "@/app/context";
import MainNav from "./MainNav";
import ThemeButts from "./ThemeButts";
import { useState, useEffect } from "react";

// if (typeof document !== 'undefined') {
//   const mainContent = document.querySelector('.mainContentCustom');
//   const hasScrollableContent = mainContent.scrollHeight > mainContent.clientHeight;
//   if (hasScrollableContent) {
//     mainContent.classList.add('pr-2', 'mr-2');
//   }
// }

const Body = ({ nextFont, children }) => {
  const { theme } = useThemeContext();
  const [ scrollPadding, setScrollPadding ] = useState('');

  useEffect(() => {
    const mainContent = document.querySelector('.mainContentCustom');
    const hasScrollableContent = mainContent.scrollHeight > mainContent.clientHeight;
    if (hasScrollableContent) {
      setScrollPadding('pr-2');
    }
  }, []);

  return (
    <body className={`
      ${ nextFont } w-screen h-screen
      flex p-2 pt-10 ${ theme.bgBrightBTheme }
      scrThinCustom ${theme.scrollbarTheme}
      tracking-normal
    `}>
      <div className={`
        flex relative w-full
        ${ theme.bgATheme }
        bgTextureCustom rounded-2xl
        overflow-hidden
      `}>
        <div className={`
          ${ theme.textATheme }
        `}>
          <span className={`
            fixed top-3 left-6 uppercase opacity-65
            text-sm font-bold tracking-wider
          `}>
            Hans August &nbsp;— &nbsp;Portfolio
          </span>
          <span className={`
            fixed top-2 right-6 opacity-60
            ${ theme.textA3Theme }
          `}>
            🞵🞶🞷🞸🞹🞺
          </span>
        </div>
        <MainNav />
        <ThemeButts />
        <div className={`
          ${theme.bgBTheme} w-full p-2 m-2 rounded-xl
        `}>
          <main className={`
            w-full h-full flex flex-col
            items-stretch gap-1
            overflow-y-auto rounded-xl
            mainContentCustom ${scrollPadding}
            ${theme.bgBTheme}
          `}>
            { children }
          </main>
        </div>
      </div>
    </body>
  );
}
 
export default Body;

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more