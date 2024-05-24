
'use client'

import { useThemeContext } from "@/app/context";

const ContentLoading = () => {
  const { theme } = useThemeContext();

  return ( 
    <p className={`
      block mt-6 ml-10 absolute
      text-4xl font-bold tracking-wider italic ${theme.textA2Theme}
    `}>
      Loading...
    </p>
   );
}
 
export default ContentLoading;