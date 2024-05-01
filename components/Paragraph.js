
const defaultParagraph = "mb-4 orphansCustom last:mb-0 text-pretty";

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

const PEmph = ({ children }) => {
  return (
    <p className={`
      mb-4 flex gap-3
    `}>
      { children }
    </p>
   );
}

export {PEmph};

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