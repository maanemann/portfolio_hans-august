
'use client';

import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import InlLink from "@/components/InlLink";
import Columns from "@/components/Columns";
import Paragraph from "@/components/Paragraph";

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
          <Paragraph>
            User experience is the sum of presentation, functionality and performance. I think of interfaces as entrances into virtual rooms for the user to explore. Just like entering eg. a hotel lobby, you should feel comfortable and intrigued. The room / UI should have a clear identity, and it should be easy to find what you&apos;re looking for without inconvenient barriers.
          </Paragraph>
          <Paragraph>
            Have a look at my <InlLink href="/cv">CV</InlLink> to get a better idea of the tools I use and the projects I&apos;ve worked on. If you have questions or want to involve me in a project, send me a mail at <InlLink href="mailto:hej@hansaugust.com"> hej@hansaugust.com</InlLink>. I enjoy working with inspiring people of all kinds of professions.
          </Paragraph>
        </Columns>
      </div>
    </Article>
  </> );
}
 
export default About;
