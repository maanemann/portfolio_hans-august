
'use client'

import { useThemeContext } from "@/app/context";
import InlLink from "./InlLink";

const RoadLi = ({ children }) => {
  return (
    <li className="list-disc ml-4">
      { children }
    </li>
  );
}

const Roadmap = ({ visibility, handleRoadmap }) => {
  const { theme } = useThemeContext();

  return (
    <article
      className={`
        ${ visibility } absolute z-30 top-12 left-0
        w-2/3 max-w-[36rem] max-h-[calc(100vh-4rem)]
        ${ theme.bgBrightBTheme } ${ theme.textATheme }
        rounded-sm ml-8 p-10 pb-12 overflow-auto shadow-[0px_0px_10rem_rgba(0,0,0,0.5)]
      `}
    >
      <h2 className="
        text-2xl font-semibold mb-8
      ">Highlights from the future</h2>
      <ul className="grid gap-2">
        <RoadLi>
          More projects from the past and more content for each project
        </RoadLi>
        <RoadLi>
          A menu button for mobile devices, so you can see more than just the projects on your phone (posibly a radial menu 👽)
        </RoadLi>
        <RoadLi>
          Color theme selection saved as a cookie, or some other way (and more themes to choose from)
        </RoadLi>
        <RoadLi>
          Description of the tools used to create this portfolio (mainly next.js + Tailwind)
        </RoadLi>
        <RoadLi>
          A nice CV that's not just a link to a pdf
        </RoadLi>
        <RoadLi>
          A way to navigate through the projects without having to go back to the main page
        </RoadLi>
        <RoadLi>
          "Masonry grid" for the projects, so their apect ratio's are preserved
        </RoadLi>
        <RoadLi>
          Additional and improved animations, hover effects etc.
        </RoadLi>
        <RoadLi>
          Contact form maybe
        </RoadLi>
        <RoadLi>
          This is not a complete list, but if you have any suggestions,&nbsp;
          <InlLink
              href="/contact"
              onClick={handleRoadmap}
            >
              feel free to contact me!
          </InlLink>
        </RoadLi>
      </ul>
    </article>
  );
}
 
export default Roadmap;