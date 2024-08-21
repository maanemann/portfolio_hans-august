import { useThemeContext } from "@/app/context";

const H1 = ({ children }) => {
  return ( <h1
    className="
      text-3xl font-bold pb-11
      sm:text-5xl md:text-4xl lg:text-6xl xl:text-8xl
    ">
    { children }
  </h1> );
}

const H2_OP = ({ children }) => {
  const { theme } = useThemeContext();
  return ( <h2
    className={`
      text-xl font-bold w-max
      mt-12 mx-4 px-4 py-1 rounded-t-xl
      ${theme.textReverseTheme} ${theme.bgBrightBTheme}
    `}>
      {/* gamle breakpoints : */}
        {/* lg:text-2xl xl:text-3xl */}
    { children }
  </h2> );
}

export { H1, H2_OP };