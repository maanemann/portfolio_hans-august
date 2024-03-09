
import Image from 'next/image';
import Link from 'next/link';
import { useImageLoopContext } from '@/app/context';

export default function ImageLoop({ linkClass, imageClass }) {
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
              placeholder="empty"
              src={film.image}
              width={300} height={300}
              alt={`Movie poster ${index}`}
              // I globals.css: `*{transition: 1s all;}`
              className={`${imageClass} opacity-0`}
              // Depricated (se browser konsol) :
              onLoadingComplete={(image) => image.classList.remove('opacity-0')}
              // `priority` gør billedet til et "eager" image, som hentes med det samme, og ikke først når det er i view = lazily loaded (default) :
              priority
            />
          </Link>
      ))}
    </>
  );
}
