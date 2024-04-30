
'use client'

import { useThemeContext } from "@/app/context";
import MainNav from "./MainNav";
import ThemeButts from "./ThemeButts";
import Link from "next/link";

const Body = ({ nextFont, children }) => {
  const { theme } = useThemeContext();
  // const [ scrollPadding, setScrollPadding ] = useState('');

  // useEffect(() => {
  //   const mainContent = document.querySelector('.mainContentCustom');
  //   const hasScrollableContent = mainContent.scrollHeight > mainContent.clientHeight;
  //   if (hasScrollableContent) {
  //     setScrollPadding('pr-2');
  //   }
  // }, []);

  return (
    <body className={`
      ${ nextFont } w-screen h-screen flex p-2 pt-10
      ${ theme.bgBrightBTheme } tracking-normal
      ${ theme.scrollbarTheme } scrThinCustom
      ${ theme.selectionTheme }
    `}>
      <div className={`
        flex w-full
        ${ theme.bgATheme }
        overflow-y-auto rounded-md
      `}>
        <MainNav />
        <main className={`
          w-full h-full flex flex-col
          items-stretch gap-1
          overflow-y-visible
        `}>
          { children }
        </main>
      </div>
      <div className={`
          ${ theme.textATheme }
        `}>
          <Link href="/#"
            className={`
              fixed top-3 left-6 uppercase opacity-65
              text-sm font-bold tracking-wider flex
            `}>
            <div
              className="block w-3.5 mt-[0.175rem] mr-5"
            >
              <div className={`
                w-full aspect-square
                border-x-3 border-t-3 grid
                ${theme.borderBTheme}
              `}>
                <div className={`
                  w-[calc(100%+.85rem)]
                  border-t-3 mt-0.5
                  self-center justify-self-center
                  ${theme.borderBTheme}
                `} />
              </div>
            </div>
            <span>
              Hans August&nbsp; —&nbsp; designer&nbsp; &&nbsp; developer
            </span>
          </Link>
          <span className={`
            fixed top-2 right-6 opacity-60
            ${ theme.textA3Theme }
          `}>
            🞵🞶🞷🞸🞹🞺
          </span>
        </div>
      <ThemeButts />
    </body>
  );
}
 
export default Body;

// // #region read-more

// * (When using useState with an object, you can use the "functional update form". This form takes a function as an argument and provides the previous state as an argument to that function). Using the functional form of state updates in React ensures that your updates are applied correctly, based on the most recent state. This can help prevent unexpected behavior, race conditions (når states 'kæmper' om at være den der renderes), and stale state updates (når den renderede state ikke er den ventede) in your application.

// // #endregion read-more