const Paragraph = ({ children }) => {
  return ( 
    <p className="
      orphansCustom mb-4 last:mb-0 text-pretty
    ">
      { children }
    </p>
   );
}
 
export default Paragraph;