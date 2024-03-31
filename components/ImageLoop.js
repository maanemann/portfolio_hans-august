
import Image from 'next/image';
import Link from 'next/link';
import { useThemeContext, useImageLoopContext } from '@/app/context';

export default function ImageLoop() {
  // const { ids } = useIdsContext();
  const { theme } = useThemeContext();
  const { films, ids, error } = useImageLoopContext();

  return (
    <>
      {/* Her er brugt `map`, fordi den returnerer et nyt array (i modsætning til fx `for...of` (og `forEach?)), og den er ikke sekventiel (asynkron(?)), hvilket er fint her, hvor elementerne ikke behøver vente på hinanden (modsat promises i fetch requests) : */}
      {ids.map((id, index) => {
        // film = den film i aray'et der har samme index som id'et :
        const film = films[index];
        // Hvis filmen er loaded.. :
        if (film) {
          return (
            <Link
              href={`/dynamictest/${film.id}`}
              key={film.id}
              className={`
                posterListClass grid
                ${theme.bgBrightTheme} coolCornersClass
              `}
            >
              <Image
                placeholder="empty"
                src={film.image}
                width={300} height={300}
                alt={`Movie poster ${film.id}`}
                // I globals.css: `*{transition: 1s all;}`
                className="
                  posterListClass coolCornersClass
                  opacity-0 object-cover
                "
                // 👀 smooth image loading ↑↓ :
                onLoad={(e) =>
                  e.target.classList.remove('opacity-0')
                }
                // `priority` gør billedet til et "eager" image, som hentes med det samme, og ikke først når det er i view = lazily loaded (default) :
                priority
              />
            </Link>
          );
        // Placeholdre ind til filmen er loaded.. (måske også hvis den aldrig loader, så jeg burde finde en måde at vise fejl) :
        } else {
          return (
            <div key={id} className={`
              posterListClass grid
              ${theme.bgBrightTheme} coolCornersClass
            `}>
              <div className={`
                w-[calc(100%-6px)] h-[calc(100%-6px)]
                m-auto
                ${theme.bgBTheme} coolCornersClass
              `}>
                <span className={`
                  block mx-8 my-4
                  text-4xl tracking-wider font-medium
                  ${theme.textATheme}
                `}> Loading... </span>
                {error && (
                  <span className={`
                    block mx-8 my-4
                    text-4xl tracking-wider font-medium
                    ${theme.textATheme}
                  `}> {error} </span>
                )}
              </div>
            </div>
          )
        }
      })}
    </>
  );
}
