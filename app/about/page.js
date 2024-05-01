
'use client';

import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import InlLink from "@/components/InlLink";
import Columns from "@/components/Columns";
import Paragraph, { PNoBrIns } from "@/components/Paragraph";

const About = () => {
  return ( <>
    <Article>
      <div>
        <H1>
          Hello
        </H1>
        <Columns>
          <Paragraph>
            I&apos;m a front-end developer / UI + UX designer located in Copenhagen, Denmark.
          </Paragraph>
          <div></div>
          <Paragraph>
            User experience is the sum of presentation, functionality and performance. I think of interfaces as entrances into virtual rooms for the user to explore.
          </Paragraph>
          <PNoBrIns>
            When entering, you should feel comfortable and intrigued, the room should have an appealing identity and communicate where it wants to take you next. It should be easy to find what you&apos;re looking for without inconvenient barriers.
          </PNoBrIns>
          <Paragraph>
            Have a look at my <InlLink href="/cv">CV</InlLink> to get a better idea of the tools I use and the projects I&apos;ve worked on. If you want to involve me in a project or just want to say hi, send me a mail at <InlLink href="mailto:hej@hansaugust.com"> hej@hansaugust.com</InlLink>.
          </Paragraph>
        </Columns>
      </div>
    </Article>
  </> );
}
 
export default About;
