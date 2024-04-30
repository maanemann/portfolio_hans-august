
import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import InlLink from "@/components/InlLink";
import Paragraph from "@/components/Paragraph";

const Contact = () => {
  return ( 
    <Article>
      <div>
        <H1>
          Contact
        </H1>
        <Paragraph>
          Write me an email: <InlLink href="mailto:hej@hansaugust.com"> hej@hansaugust.com </InlLink>
        </Paragraph>
      </div>
    </Article>
  );
}
 
export default Contact;