
'use client'

import { useThemeContext } from "@/app/context";
import MainNav from "./MainNav";

const Body = ({ nextFont, children }) => {
  const { theme, setTheme } = useThemeContext();

  const applyOckerdust = () => {
    // "When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function" (read more > *) :
    setTheme(prevTheme => ({
      // Spread operatoren (`...`) samler alle resterende key-value pairs og overfører dem til den nye state :
      ...prevTheme,
      themeTitle: "ockerdust",
      bgATheme: "bg-ockerdust-900",
      bgBTheme: "bg-ockerdust-950",
      bgBrightTheme: 'bg-ockerdust-700',
      bgReverseTheme: 'bg-ockerdust-700',
      borderATheme: "border-ockerdust-200",
      textATheme: 'text-ockerdust-200',
      textBTheme: 'text-ockerdust-900',
      textBrightTheme: 'text-ockerdust-200',
      textReverseTheme: 'text-ockerdust-950',
      scrollbarTheme: 'scrOckerdustCustom',
    }));
  };

  const applyAqua = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      themeTitle: "aqua",
      bgATheme: "bg-aqua-900",
      bgBTheme: "bg-aqua-950",
      bgBrightTheme: 'bg-aqua-700',
      bgReverseTheme: 'bg-aqua-700',
      borderATheme: "border-aqua-200",
      textATheme: 'text-aqua-200',
      textBTheme: 'text-aqua-900',
      textBrightTheme: 'text-aqua-200',
      textReverseTheme: 'text-aqua-950',
      scrollbarTheme: 'scrAquaCustom',
    }));
  };

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
          onClick={applyOckerdust}
          className="
            w-6 aspect-square cursor-pointer
            bg-ockerdust-700 rounded-full
        "/>
        <div
          onClick={applyAqua}
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