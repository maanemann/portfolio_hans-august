
// Se tutorial link i readme. Jeg har prøvet at konvertere fra ts til js

"use client";

import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function ThemeWrapper({ children }) {

  const [theme, setTheme] = useState(
    {
      bgTheme: 'bg-aqua-400'
      // isGreen: true,
      // color: {text: '#33ee33', bg: '#22aa50'}
    }
  );

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