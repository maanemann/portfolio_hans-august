
// Se tutorial link i readme. Jeg har prøvet at konvertere fra ts til js

"use client";

import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext();

export function ThemeWrapper({ children }) {

  const [theme, setTheme] = useState(() => {
    // For at undgå fejlmeddelelse, returneres null, når det læses på serveren, som ikke har 'window', men det spawnede forvirring over at server og klient returnerede forskellige værdier og ødelagde state'n, derfor udkommenteret (se den forsimplede version nedenunder) :
      // const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

    // Hent state fra local storage, hvis det findes, ellers brug default state :
    const savedTheme = localStorage && localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : {
      bgATheme: 'bg-ockerdust-900',
      bgBTheme: 'bg-ockerdust-950',
      borderATheme: 'border-ockerdust-700',
      textATheme: 'text-ockerdust-700'
    };
  });

  useEffect(() => {
    // Save the theme to local storage whenever it changes
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return(
    // <themeContext.Provider value={{...this.theme}}>
    <themeContext.Provider value={{ theme, setTheme }}>
      { children }
    </themeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(themeContext);
}

// ---------------

// // Her deklareres konteksten (?) :
// const AppContext = createContext();

// export function AppWrapper({ children }) {

//   const [name, setName] = useState("Lauphex"
//     // {
//     //   hello: 'world'
//     //   // isGreen: true,
//     //   // color: {text: '#33ee33', bg: '#22aa50'}
//     // }
//   );

//   return(
//     // Den her skal wrapes rundt om de elementer ({children}), som skal påvirkes af conteksten :
//     <AppContext.Provider value={{ name, setName }}>
//     {/* Netninja: Her er value et objekt med "spread syntax" ("..."), som giver den alt dataen i {state} : */}
//     {/* <AppContext.Provider value={{...this.state}}> */}
//       { children }
//     </AppContext.Provider>
//   )
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }