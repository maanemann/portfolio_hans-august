
"use client";

import { createContext, useContext, useState } from "react";


// // #region themeContext

const themeContext = createContext();

export function ThemeWrapper({ children }) {

  const [theme, setTheme] = useState(
    // () =>
    {
    // // For at undgå fejlmeddelelse, returneres null, når det læses på serveren, som ikke har 'window' (fejl opstår enten fordi localStorage ikke findes, eller fordi state er noget andet på klienten end serveren) :
    // let savedTheme;
    // try {
    //   savedTheme = typeof window !== 'undefined' && localStorage.getItem('theme');
    // } catch (error) {
    //   savedTheme = null;
    // }
    // // Hent state fra local storage, hvis det findes, ellers brug default state :
    // return savedTheme ? JSON.parse(savedTheme) : {
      themeTitle: 'ockerdust',
      bgATheme: 'bg-ockerdust-900',
      bgBTheme: 'bg-ockerdust-950',
      bgBrightTheme: 'bg-ockerdust-700',
      borderATheme: 'border-ockerdust-200',
      textATheme: 'text-ockerdust-200',
      textBTheme: 'text-ockerdust-900',
      textBrightTheme: 'text-ockerdust-200',
      bgReverseTheme: 'bg-ockerdust-700',
      textReverseTheme: 'text-ockerdust-950',
      placehReverseTheme: 'text-ockerdust-950/50',
      scrollbarTheme: 'scrOckerdustCustom',

      // fetch test :
      // imgPath: `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`
  //   };
  });

  // useEffect(() => {
  //   // Save the theme to local storage whenever it changes
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);

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

// // #endregion themeContext



// // #region read-more

// *1* : ´map´ tager en callback funktion som argument, og denne funktion kan tage tre argumenter: det aktuelle element, index og det oprindelige array. Her er brugt de første to argumenter. Index er en nul-baseret værdi, som repræsenterer det aktuelle element i array'et, hvilket react bruger til at opdatere DOM korrekt.

// // #endregion read-more