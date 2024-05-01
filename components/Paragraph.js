
const defaultParagraph = "orphansCustom mb-4 last:mb-0 text-pretty";

const Paragraph = ({ children }) => {
  return ( 
    <p className={`
      ${defaultParagraph}
    `}>
      { children }
    </p>
   );
}

export default Paragraph;

const PNoBrIns = ({ children }) => {
  return (
    <p className={`
      ${defaultParagraph}
      break-inside-avoid
    `}>
      { children }
    </p>
   );
}

export {PNoBrIns};