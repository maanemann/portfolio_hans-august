
'use client'

// import { useThemeContext } from '@/app/context/page'
import { useThemeContext } from "./context";
// import Lauphex from "@/components/Lauphex"
import ProjectItem from "@/components/ProjectItem";

export default function Home() {
  const { theme, setTheme } = useThemeContext();
  
  const handleThemeChange = () => {
    const newColor = "bg-ockerdust-700/60";

    // "When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function" (read more > *) :
    setTheme(prevTheme => ({
      // Spread operatoren (`...`) samler alle resterende key-value pairs og overfører dem til den nye state :
      ...prevTheme,
      bgTheme: newColor
    }));
  };

  // const handleBgTheme = () => {
  //   return(theme.bgTheme)
  // }

  // const changeTheme = () => {
  //   setTheme("bg-ockerdust-700/60")
  // }

  // Original bg farve : bg-ockerdust-700/60

  return (
    <main className={`
      w-full grid gap-[3px] py-[3px] pr-[3px]
      overflow-y-scroll
      bg-blend-darken ${theme.bgTheme}
    `}>
      <div
        onClick={handleThemeChange}
        className="w-8 aspect-square bg-ocker-400 rounded-full"
      />
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