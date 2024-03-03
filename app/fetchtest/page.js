
import Image from "next/image";


// // #region tmdb-api

// In nextjs app router all data is 'static' (cached) by default (read more > *1*)
// export default async function FetchTest() {
  // NEXT_PUBLIC_ is not needed here, since this is a server component, and it's only necessary in client context, but i'll do it anyway as an example:
  const apiUrl = `http://api.themoviedb.org/3/movie/02?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  try {
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }

  // return ( <>
    {/* <CarImage carSrc={carSrc} /> */}
    {/* <h1 className="text-2xl text-ocker-300">{ data.title }</h1> */}
    {/* <Image
      width={300} height={0}
      className="w-96 object-contain"
      src={ src }
      alt="movie poster"
    /> */}
  {/* </> ); */}
// }

export async function CarImage() {
  // console.log('carSrc: ', carSrc);
  const carSrc = data && `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`;

  return (
    <Image
      width={300} height={0}
      className="w-96 object-contain"
      src={ carSrc }
      alt="movie poster"
    />
  );
}

// // #endregion tmdb-api


// // #region unsplash-api

// export default async function FetchTest() {
  // const res = await fetch('https://api.unsplash.com/photos/random?query=nature',
  // {
    // headers: {
    //   'Accept-Version': 'v1',
    //   'Content-Type': 'application/json',
    //   'Authorization': `Client-ID ${process.env.ACCESS_KEY}`,
    //   'secret-key': process.env.SECRET_KEY,
    //   'application-id': process.env.APPLICATION_ID
    // }
  // });
  // const data = await res.json();
  // console.log(data);

//   return ( <>
//   <h1 className="text-2xl text-ocker-300">{ data.slug }</h1>
//   <img width="300px" height="300px" src={`https://api.unsplash.com/photos/random?query=nature/${data.slug}`} />
//   </> );
// }

// // #endregion unsplash-api


// *1* To make data non-static, use `{ cache: "no-store" }` (or other option) after the url in `fetch()` (ctrl+space after `cache:` to see options)