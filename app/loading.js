
'use client'

import { useThemeContext } from "@/app/context";

const Loading = () => {
  const { theme } = useThemeContext();

  return ( <p className={`
    block mt-6 ml-12 opacity-65
    text-4xl font-bold tracking-wider italic ${theme.textA2Theme}
  `}>
    Loading...
  </p> );
}
 
export default Loading;