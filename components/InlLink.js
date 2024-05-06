
'use client'

import { useThemeContext } from "@/app/context";
import Link from 'next/link';

const commonStyles = `hover:brightness-[1.17] hover:saturate-[1.3]`;

const InlLink = ({ href, children, target, onClick }) => {
  const { theme } = useThemeContext();
  return(
    <Link
      href={ href } target={ target } onClick={ onClick }
      className={`
        ${commonStyles}
        border-b-2
        ${theme.textA3Theme}
      `}
    >
      { children }
    </Link>
  );
};
 
export default InlLink;

const InlLinkEmph = ({ href, children }) => {
  const { theme } = useThemeContext();
  return (
    <Link href={ href } target="_blank" className={`
      ${commonStyles}
      inline-block ${theme.bgBrightTheme}
      ${theme.textATheme} font-bold px-[.5rem] rounded-md
    `}>{ children }</Link>
  );
}
 
export { InlLinkEmph };

const InlLinkXEmph = ({ href, children }) => {
  const { theme } = useThemeContext();
  return (
    <Link href={ href } target="_blank" className={`
      ${commonStyles}
      block w-fit ${theme.bgBrightTheme} relative
      ${theme.textATheme} font-bold text-3xl px-[.5rem] mb-4 rounded-md
    `}>{ children }</Link>
  );
}
 
export { InlLinkXEmph };