
'use client';

import { useThemeContext } from '@/app/context';

const Article = ({ children }) => {
  const { theme } = useThemeContext();

  return ( 
    <article className={`
      p-8 pt-14 md:pl-48 pb-20 lg:pb-24 xl:py-24
      grid gap-10 lg:gap-12 w-full max-w-[64rem] mx-auto
      ${theme.textATheme}
    `}>
      { children }
    </article>
   );
}
 
export default Article;