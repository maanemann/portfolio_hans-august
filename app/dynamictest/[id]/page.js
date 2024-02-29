const DynamicIdTest = ({ params }) => {
  return ( <h1 className="text-9xl text-brick-600">
    { params.id }
  </h1> );
}
 
export default DynamicIdTest;