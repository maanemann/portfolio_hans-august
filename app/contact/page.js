
'use client'

import Article from "@/components/Article";
import { H1 } from "@/components/Headings";
import { InlLinkXEmph } from "@/components/InlLink";
import Paragraph from "@/components/Paragraph";
import { RiMailOpenLine } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { useThemeContext } from "@/app/context";

const Contact = () => {
  const { theme } = useThemeContext();
  const commonIconStyles = `
    inline-block absolute top-1/2 -translate-y-1/2 -left-11
    ${theme.bgBrightTheme} rounded-full text-4xl
  `
  return ( 
    <Article>
      <div>
        <H1>
          Contact
        </H1>
        <div className="pl-11">
          <Paragraph>
            <InlLinkXEmph href="mailto:hej@hansaugust.com">
              <RiMailOpenLine className={`
                ${commonIconStyles} p-1.5
              `} /> hej@hansaugust.com
            </InlLinkXEmph>
            <InlLinkXEmph href="https://www.linkedin.com/in/hans-august/">
              <BiLogoLinkedin className={`
                ${commonIconStyles} p-[.45rem] pl-2 
              `} /> linkedin.com/in/hans-august
            </InlLinkXEmph>
          </Paragraph>
        </div>
      </div>
    </Article>
  );
}
 
export default Contact;