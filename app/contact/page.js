
import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import { InlLinkXEmph } from "@/components/InlLink";
import Paragraph from "@/components/Paragraph";

const Contact = () => {
  return ( 
    <Article>
      <div>
        <H1>
          Contact
        </H1>
        <Paragraph>
          <InlLinkXEmph href="mailto:hej@hansaugust.com"> hej@hansaugust.com </InlLinkXEmph>
          <InlLinkXEmph href="https://www.linkedin.com/in/hans-august/"> linkedin.com/in/hans-august </InlLinkXEmph>
        </Paragraph>
      </div>
    </Article>
  );
}
 
export default Contact;