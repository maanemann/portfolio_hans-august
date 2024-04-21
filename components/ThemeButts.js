
import { useThemeContext } from "@/app/context";

const ThemeButts = () => {
  const { setTheme } = useThemeContext();

  return ( 
    <div className="
        absolute bottom-6 left-6
        flex gap-4
      ">
        <div
          onClick={() => setTheme('ockerdust')}
          className="
            w-6 aspect-square cursor-pointer
            bg-ockerdust-700 rounded-full
        "/>
        <div
          onClick={() => setTheme('aqua')}
          className="
            w-6 aspect-square cursor-pointer
            bg-aqua-800 rounded-full
        "/>
      </div>
   );
}
 
export default ThemeButts;