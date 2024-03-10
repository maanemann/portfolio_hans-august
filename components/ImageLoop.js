
import Image from 'next/image';
import Link from 'next/link';
import { useImageLoopContext, useIdsContext } from '@/app/context';
import { useState, useEffect } from 'react';


// // #region min-metode

export default function ImageLoop({ linkClass, imageClass }) {
  const { ids } = useIdsContext();
  const { films } = useImageLoopContext();

  return (
    <>
      {ids.map((id) => {
        return(<div key={id} className='w-32 h-32 bg-ocker-300'></div>)
      })}

      {/* Her er brugt `map`, fordi den returnerer et nyt array (i modsætning til fx `for...of` (og `forEach?)), og den er ikke sekventiel (asynkron(?)), hvilket er fint her, hvor elementerne ikke behøver vente på hinanden (modsat promises i fetch requests) : */}
      {films.map((film) => (
        <Link
            href={`/dynamictest/${film.id}`}
            key={film.id}
            className={ linkClass }
          >
            <Image
              placeholder="empty"
              src={film.image}
              width={300} height={300}
              alt={`Movie poster ${film.id}`}
              // I globals.css: `*{transition: 1s all;}`
              className={`${imageClass} opacity-0`}
              // 👀 smooth image loading ↑↓ :
              onLoad={(e) => e.target.classList.remove('opacity-0')}
              // `priority` gør billedet til et "eager" image, som hentes med det samme, og ikke først når det er i view = lazily loaded (default) :
              priority
            />
          </Link>
      ))}
    </>
  );
}

// // #endregion min-metode


// // #region robot-metode

// export default function ImageLoop({ linkClass, imageClass }) {
//   const { films } = useImageLoopContext();
//   const [loadedImages, setLoadedImages] = useState([])
  
//     useEffect(() => {
//       if (films.length > 0) {
//         // Fetch billeder og opdater state når de er loaded :
//         films.forEach(film => {
//           const img = new Image();
//           img.src = film.image;
//           img.onload = () => setLoadedImages(prev => [...prev, film.id]);
//         });
//       }
//     }, [films]);

//   // ids.forEach(() => {return(<div className='w-32 h-32 bg-ocker-300'></div>)})

//   return (
//     <>
//       {/* Her er brugt `map`, fordi den returnerer et nyt array (i modsætning til fx `for...of` (og `forEach?)), og den er ikke sekventiel (asynkron(?)), hvilket er fint her, hvor elementerne ikke behøver vente på hinanden (modsat promises i fetch requests) : */}
//       {films.map((film) => (
//         <Link
//             href={`/dynamictest/${film.id}`}
//             key={film.id}
//             className={ linkClass }
//           >
//             {loadedImages.includes(film.id) ? (
//               <Image
//                 placeholder="empty"
//                 src={film.image}
//                 width={300} height={300}
//                 alt={`Movie poster ${film.id}`}
//                 // I globals.css: `*{transition: 1s all;}`
//                 className={`${imageClass} opacity-0`}
//                 // 👀 smooth image loading ↑↓ :
//                 onLoad={(e) => e.target.classList.remove('opacity-0')}
//                 // `priority` gør billedet til et "eager" image, som hentes med det samme, og ikke først når det er i view = lazily loaded (default) :
//                 priority
//               />
//             ) : (
//               <div className="image-placeholder"></div>
//             )}
//           </Link>
//       ))}
//     </>
//   );
// }

// // #endregion robot-metode