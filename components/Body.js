
'use client'

import { useThemeContext } from "@/app/context";
import MainNav from "./MainNav";

const Body = ({ nextFont, children }) => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = () => {
    const newColor = "bg-aqua-700";

    // "When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function" (read more > *) :
    setTheme(prevTheme => ({
      // Spread operatoren (`...`) samler alle resterende key-value pairs og overfører dem til den nye state :
      ...prevTheme,
      bgATheme: newColor
    }));
  };

  return (
    <body className={`
      ${ nextFont }>
      flex h-screen overflow-hidden
      ${theme.bgATheme}
    `}>
      <div
        onClick={handleThemeChange}
        className="w-8 aspect-square bg-ocker-400 rounded-full"
      />
      <MainNav />
      { children }
    </body>
  );
}
 
export default Body;

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more