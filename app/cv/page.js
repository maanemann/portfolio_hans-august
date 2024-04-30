
import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import InlLink from "@/components/InlLink";
import Paragraph from "@/components/Paragraph";

const Cv = () => {
  return ( 
    <Article>
      <div>
        <H1>
          CV
        </H1>
        <Paragraph>
          This page is not done yet, but you can <InlLink href="https://drive.google.com/file/d/13qEvZptBxu31Iv_ufGIoTMcs0jD50V9K/view?usp=sharing" target="_blank">find my CV here</InlLink>.
        </Paragraph>
      </div>
    </Article>
  );
}
 
export default Cv;