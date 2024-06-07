const Columns = ({ children }) => {
  return ( 
    <div className='lg:columns-2 gap-14'>
      { children }
    </div>
   );
}
 
export default Columns;