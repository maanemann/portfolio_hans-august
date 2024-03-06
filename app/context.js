
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


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
      borderATheme: 'border-ockerdust-700',
      textATheme: 'text-ockerdust-700',
      textBrightTheme: 'text-ockerdust-200',

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


// // #region imageLoopContext

const imageLoopContext = createContext();

// export const dynamic = 'force-dynamic';
export function ImageLoopWrapper({ children }) {
  // Så film kan skiftes ud baseret på theme state :
  const { theme } = useThemeContext();
  const [films, setFilms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let ids;
      if (theme.themeTitle === 'ockerdust') {
        ids = ['02', '03', '05'];
      } else {
        ids = ['06', '11', '12'];
      }

      const fetchedFilms = [];

      // `for...of` venter på at forrige proces sættes i gang, og `await` venter på at processen er færdig (resolved/rejected) (?) :
      for (let id of ids) {
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        // console.log(data);
        // med push metoden tilføjes det nyt element til fetchedFilms aray'et, (som var tomt til at begynde med) :
        fetchedFilms.push({
          id,
          image: `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`,
          title: data.original_title,
          overview: data.overview,
        });
      }

      setFilms(fetchedFilms);
    };

    fetchData();
    // Hold øje med theme state, så film kan opdateres, når theme state ændres :
  }, [theme]);

  return(
    <imageLoopContext.Provider value={{ films }}>
      { children }
    </imageLoopContext.Provider>
  )
};

export function useImageLoopContext() {
  return useContext(imageLoopContext);
}

export function ImageLoopComponent({ linkClass, imageClass }) {
  const { films } = useImageLoopContext();

  return (
    <>
      {/* Her er brugt `map`, fordi den returnerer et nyt array (i modsætning til fx `for...of` (og `forEach?)), og den er ikke sekventiel (asynkron(?)), hvilket er fint her, hvor elementerne ikke behøver vente på hinanden (modsat promises i fetch requests) (mere om `index` mm. > read-more > *1*) : */}
      {films.map((film, index) => (
        <Link
          href={`/dynamictest/${film.id}`}
          key={index}
          className={ linkClass }
        >
          <Image
            src={film.image}
            width={300} height={300}
            alt={`Movie poster ${index}`}
            className={ imageClass }
          />
        </Link>
      ))}
    </>
  );
}

// // #endregion imageLoopContext


// // #region imageContext

// const imageContext = createContext();

// export function ImageWrapper({ children }) {
//   const [image, setImage] = useState(false)
//   // const [image2, setImage2] = useState(false)

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiUrl = `http://api.themoviedb.org/3/movie/02?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
//       const res = await fetch(apiUrl);
//       const data = await res.json();
//       setImage(`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`);
//     };

//     fetchData();
//   }, [image]);

//   return(
//     <imageContext.Provider value={{ image }}>
//       { children }
//     </imageContext.Provider>
//   )
// };

// export function useImageContext() {
//   return useContext(imageContext);
// }

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


// // #region read-more

// *1* : ´map´ tager en callback funktion som argument, og denne funktion kan tage tre argumenter: det aktuelle element, index og det oprindelige array. Her er brugt de første to argumenter. Index er en nul-baseret værdi, som repræsenterer det aktuelle element i array'et, hvilket react bruger til at opdatere DOM korrekt.

// // #endregion read-more