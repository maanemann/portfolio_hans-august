const Columns = ({ children }) => {
  return ( 
    <div className='lg:columns-2 gap-10'>
      { children }
    </div>
   );
}
 
export default Columns;