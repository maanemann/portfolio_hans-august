
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
      bgATheme: "bg-ockerdust-900",
      bgBTheme: "bg-ockerdust-950",
      onlyValueTest: "ockerdust-700"
    }));
  };

  const applyAqua = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      bgATheme: "bg-aqua-900",
      bgBTheme: "bg-aqua-950",
      onlyValueTest: "aqua-700"
    }));
  };

  return (
    <body className={`
      ${ nextFont }>
      flex h-screen overflow-hidden
      ${theme.bgATheme}
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
            bg-ockerdust-800 rounded-full
        "/>
        <div
          onClick={applyAqua}
          className="
            w-6 aspect-square cursor-pointer
            bg-aqua-800 rounded-full
        "/>
      </div>
      { children }
    </body>
  );
}
 
export default Body;

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more