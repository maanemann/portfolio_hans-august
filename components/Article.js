
'use client';

import { useThemeContext } from '@/app/context';

const Article = ({ children }) => {
  const { theme } = useThemeContext();

  return ( 
    <article className={`
      p-8 pt-14 md:pl-48 xl:pt-24 pb-16 md:pb-6 lg:pb-12 xl:pb-16
      xl:-translate-x-16 2xl:-translate-x-32
      grid gap-10 lg:gap-12 w-full max-w-[64rem] mx-auto
      ${theme.textATheme}
    `}>
      { children }
    </article>
   );
}
 
export default Article;