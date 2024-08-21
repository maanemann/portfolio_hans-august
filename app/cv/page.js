
import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import { InlLinkXEmph } from "@/components/InlLink";
import Paragraph from "@/components/Paragraph";

const Cv = () => {
  return ( 
    <Article>
      <div>
        <H1>
          CV
        </H1>
        <Paragraph>
          I&apos;m making a nice and fresh CV here, but it isn&apos;t done yet. Until then it&apos;s located here:
        </Paragraph>
          <InlLinkXEmph href="https://drive.google.com/file/d/13qEvZptBxu31Iv_ufGIoTMcs0jD50V9K/view?usp=sharing" target="_blank" rel="noopener">Go to CV</InlLinkXEmph>.
      </div>
    </Article>
  );
}
 
export default Cv;