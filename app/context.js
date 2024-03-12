
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
      themeTitle: 'ockerdust',
      bgATheme: 'bg-ockerdust-900',
      bgBTheme: 'bg-ockerdust-950',
      bgBrightTheme: 'bg-ockerdust-700',
      borderATheme: 'border-ockerdust-700',
      textATheme: 'text-ockerdust-700',
      textBTheme: 'text-ockerdust-900',
      textBrightTheme: 'text-ockerdust-200',
      bgReverseTheme: 'bg-ockerdust-700',
      textReverseTheme: 'text-ockerdust-950',
      placehReverseTheme: 'text-ockerdust-950/50',

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





// // #region idsContext

// const idsContext = createContext();

// export function IdsWrapper({ children }) {
//   // Så film kan skiftes ud baseret på theme state :
//   const { theme } = useThemeContext();
//   const [ids, setIds] = useState(
//     theme.themeTitle === 'ockerdust'
//     ? ['02', '03', '05']
//     : ['06', '11', '12']
//   );

//   let newIds;

//   useEffect(() => {
//     if (theme.themeTitle === 'ockerdust') {
//       newIds = ['02', '03', '05'];
//     } else {
//       newIds = ['06', '11', '12'];
//     }

//     setIds(newIds);
//   }, [theme]);

//   return(
//     <idsContext.Provider value={{ ids }}>
//       { children }
//     </idsContext.Provider>
//   )
// }

// export function useIdsContext() {
//   return useContext(idsContext);
// }

// // #endregion idsContext





// // #region imageLoopContext

const imageLoopContext = createContext();

export function ImageLoopWrapper({ children }) {
  // Så film kan skiftes ud baseret på theme state :
  const { theme } = useThemeContext();
  // const { ids } = useIdsContext();
  const [films, setFilms] = useState([])
  const [ids, setIds] = useState(['00', '01', '02']);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=1`;
      try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const movies = data.results;
        // console.log('movies:', movies);
        let newIds;
        const fetchedFilms = [];

        if (theme.themeTitle === 'ockerdust') {
          newIds = movies.slice(0, 3).map(movie => movie.id);
          console.log('newIds:', newIds);
        } else {
          newIds = movies.slice(3, 6).map(movie => movie.id);
        }


        // `for...of` venter på at forrige proces sættes i gang (synkron, modsat map), og `await` venter på at processen er færdig (resolved / rejected ?) :
        for (let id of newIds) {
          const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
          const movieRes = await fetch(movieUrl);

          if (!movieRes.ok) {
            throw new Error(`HTTP error! status: ${movieRes.status}`);
          }

          const movieData = await movieRes.json();

          // med push metoden tilføjes det nyt element til fetchedFilms aray'et, (som var tomt til at begynde med) :
          fetchedFilms.push({
            id,
            image: `https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`,
            title: movieData.original_title,
            overview: movieData.overview,
          });
        }

        setIds(newIds);
        setFilms(fetchedFilms);
      } catch (error) {
        console.error('Error fetching film:', error.message);
        setError(error.message);
      }
    };

    fetchData();
    // Hold øje med theme state, så film kan opdateres, når theme state ændres :
  }, [theme]);

  return(
    <imageLoopContext.Provider value={{ films, ids, error }}>
      { children }
    </imageLoopContext.Provider>
  )
};

export function useImageLoopContext() {
  return useContext(imageLoopContext);
}

// // #endregion imageLoopContext





// // #region read-more

// *1* : ´map´ tager en callback funktion som argument, og denne funktion kan tage tre argumenter: det aktuelle element, index og det oprindelige array. Her er brugt de første to argumenter. Index er en nul-baseret værdi, som repræsenterer det aktuelle element i array'et, hvilket react bruger til at opdatere DOM korrekt.

// // #endregion read-more