
// Se tutorial link i readme. Jeg har prøvet at konvertere fra ts til js

"use client";

import { createContext, useContext, useState, useEffect } from "react";


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
      bgATheme: 'bg-ockerdust-900',
      bgBTheme: 'bg-ockerdust-950',
      borderATheme: 'border-ockerdust-700',
      textATheme: 'text-ockerdust-700',

      // fetch test :
      // imgPath: `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`
  //   };
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

// // #endregion themeContext


// // #region imageContext

const imageContext = createContext();

// export function ImageWrapper({ children }) {
//   const [image, setImage] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiUrl = `http://api.themoviedb.org/3/movie/02?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
//       const res = await fetch(apiUrl);
//       const data = await res.json();
//       setImage(`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`);
//     };

//     fetchData();
//   }, []);

export function ImageWrapper({ children }) {
  const [image, setImage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `http://api.themoviedb.org/3/movie/02?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setImage(`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`);
    };

    fetchData();
  }, [image]);

  return(
    <imageContext.Provider value={{ image }}>
      { children }
    </imageContext.Provider>
  )
};

export function useImageContext() {
  return useContext(imageContext);
}

// // #endregion imageContext


// // #region tutorialShit

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

// // #endregion tutorialShit