
'use client';

import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import InlLink, { InlLinkEmph } from "@/components/InlLink";
import Columns from "@/components/Columns";
import Paragraph, { PEmph, PNoBrIns } from "@/components/Paragraph";

const About = () => {
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
            I&apos;m a UI + UX designer & frontend developer located in Copenhagen, Denmark.
          </Paragraph>
          <div></div>
          <Paragraph>
            I think of User experience as the sum of presentation, functionality and performance. Interfaces are entrances to virtual rooms for the user to explore.
          </Paragraph>
          <PNoBrIns>
            When entering, you should feel comfortable and intrigued, the room should have an appealing identity and communicate where it wants to take you next. It should be easy to find what you&apos;re looking for without inconvenient barriers.
          </PNoBrIns>
          <Paragraph>
            If you want to involve me in a project or just want to say hi, send me a mail at <InlLink href="mailto:hej@hansaugust.com"> hej@hansaugust.com</InlLink>.
          </Paragraph>
        </Columns>
      </div>
    </Article>
  </> );
}
 
export default About;
