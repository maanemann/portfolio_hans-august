
'use client'

import { useThemeContext } from "@/app/context";
import Link from 'next/link';

const InlLink = ({ href, children, target }) => {
  const { theme } = useThemeContext();
  return(
    <Link
      href={ href } target={ target }
      className={`
        border-b-2
        ${theme.textA3Theme}
      `}
    >
      { children }
    </Link>
  );
};
 
export default InlLink;