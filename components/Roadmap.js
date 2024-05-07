
'use client'

import { useThemeContext } from "@/app/context";
import InlLink from "./InlLink";
import Paragraph from "./Paragraph";

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
      ">Todo</h2>
      <Paragraph>
        This website is made (from scratch) using the React framework Next.js. Here&apos;s a list of what&apos;s probably coming up next:
      </Paragraph>
      <ul className="grid gap-2">
        <RoadLi>
          More past projects and more content for each project
        </RoadLi>
        <RoadLi>
          A menu button for mobile devices (posibly a radial menu!)
        </RoadLi>
        <RoadLi>
          Color theme selection saved as a cookie, and more themes
        </RoadLi>
        {/* <RoadLi>
          Description of the tools used to create this portfolio (mainly next.js + Tailwind)
        </RoadLi> */}
        {/* <RoadLi>
          A nice CV that&apos;s not just a link to a pdf
        </RoadLi> */}
        <RoadLi>
          Navigation between projects without having to go back to the main page
        </RoadLi>
        <RoadLi>
        &quot;Masonry grid&quot; for the projects (apect ratio&apos;s preserved in an evenly spaced, full-width grid)
        </RoadLi>
        <RoadLi>
          Improved animations, hover effects etc.
        </RoadLi>
        {/* <RoadLi>
          Contact form maybe
        </RoadLi> */}
        {/* <RoadLi>
          This is not a complete list, but if you have any suggestions,&nbsp;
          <InlLink
              href="/contact"
              onClick={handleRoadmap}
            >
              feel free to contact me!
          </InlLink>
        </RoadLi> */}
      </ul>
    </article>
  );
}
 
export default Roadmap;