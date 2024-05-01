
import { useThemeContext } from "@/app/context";

const ThemeButts = () => {
  const { setTheme } = useThemeContext();

  const commonProps = `
    w-6 aspect-square cursor-pointer
    outline outline-2 rounded-full
    `;
    // scale-y-75    hover:scale-y-100

  return ( 
    <div className="
        absolute bottom-6 left-6
        flex gap-4
      ">
        <div
          onClick={() => setTheme('ockerdust')}
          className={`
            ${commonProps}
            bg-ockerdust-600        hover:bg-ockerdust-500
            outline-ockerdust-800   hover:outline-ockerdust-700
        `}/>
        <div
          onClick={() => setTheme('aqua')}
          className={`
            ${commonProps}
            bg-aqua-800        hover:bg-aqua-700
            outline-aqua-900   hover:outline-aqua-800
        `}/>
      </div>
   );
}
 
export default ThemeButts;