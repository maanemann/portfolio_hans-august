
'use client'

import { useThemeContext } from "@/app/context";
import MainNav from "./MainNav";
import ThemeButts from "./ThemeButts";

const Body = ({ nextFont, children }) => {
  const { theme } = useThemeContext();

  return (
    <body className={`
      ${ nextFont } w-screen h-screen
      flex p-8 ${ theme.bgBrightTheme }
      scrThinCustom ${theme.scrollbarTheme}
      tracking-normal
    `}>
      <div className={`
        flex relative w-full
        ${ theme.bgATheme }
        bgTextureCustom rounded-2xl
        overflow-hidden
      `}>
        <MainNav />
        <ThemeButts />
        <main className={`
          w-full h-full flex flex-col
          items-stretch gap-1 p-1
          overflow-y-auto
          ${theme.bgBTheme}
        `}>
          { children }
        </main>
      </div>
    </body>
  );
}
 
export default Body;

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more