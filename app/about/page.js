
'use client';

import ContentLoading from "@/components/ContentLoading";
import { useThemeContext } from "../context";
import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import InlLink, { InlLinkEmph } from "@/components/InlLink";
import Columns from "@/components/Columns";
import Paragraph, { PEmph } from "@/components/Paragraph";
import Image from "next/image";

const About = () => {
  const { theme } = useThemeContext();
  
  return ( <>
    <Article>
      <div>
        <H1>
          Hello
        </H1>
        <Columns>
          <PEmph>
            <InlLinkEmph
              href="https://drive.google.com/file/d/13qEvZptBxu31Iv_ufGIoTMcs0jD50V9K/view?usp=sharing"
            > CV
            </InlLinkEmph>
            <InlLinkEmph
              href="https://www.linkedin.com/in/hans-august/"
            > LinkedIn
            </InlLinkEmph>
          </PEmph>
          <Paragraph>
            I&apos;m a UI + UX designer & front-end developer in Copenhagen, Denmark. Higher education in communication design and front-end development.
          </Paragraph>
          <Paragraph>
            I think of User experience as the sum of design, functionality and performance. An interface is a virtual room for the user to explore.
          </Paragraph>
          <Paragraph>
            <br className="hidden lg:inline" />
            Like a physical room, it should be easy to find what you&apos;re looking for without inconvenient barriers. The room should be inviting, have a consistent identity, and communicate where it wants to take you next.
          </Paragraph>
          <Paragraph>
            If you want to involve me in a project or just want to say hi, send me a mail at <InlLink href="mailto:hej@hansaugust.com"> hej@hansaugust.com</InlLink>.
          </Paragraph>
        </Columns>
      </div>
      <figure className='relative'>
        <div
          className={`
            relative w-full ${theme.bgBrightBTheme}
            outline outline-2 ${theme.outlineDarkerTheme} outline-offset-[3px]
            before:absolute before:-left-[5px] before:-right-[5px] before:-bottom-[7px] before:h-[3px] ${theme.beforeDarkerTheme}
          `}
          style={{
            // Leaves a space for the image to fill. In CSS, percentage-based padding is calculated relative to the width of the parent :
            paddingBottom: `${870 / 2106 * 100}%`
          }}
        >
          <ContentLoading />
          <Image
            src="/formfollowsdata.png"
            alt="Form follows data"
            // width={mediaItem.width}
            // height={mediaItem.height}
            priority
            fill sizes="90vw"
            className="
              w-full object-cover object-left-top
              opacity-0
            "
            onLoad={(e) => {
              e.target.classList.remove('opacity-0');
              e.target.previousElementSibling.remove();
            }}
          />
        </div>
        {/* <figcaption
          className='
            text-right ml-auto mt-6 max-w-[32rem]
            2xl:absolute 2xl:-right-0 2xl:translate-x-full
            2xl:text-left 2xl:bottom-0 2xl:pl-8 2xl:max-w-72
          '
        >
          Pixels on grid.
        </figcaption> */}
      </figure>
    </Article>
  </> );
}
 
export default About;
