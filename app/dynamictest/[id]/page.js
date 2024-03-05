
'use client'

import { useImageLoopContext } from "@/app/context";
import Image from "next/image";

const DynamicIdTest = ({ params }) => {
  const { films } = useImageLoopContext();

  return ( <>
    <Image
      src={films[params.id].image}
      width={300} height={300}
      alt="Movie poster"
      className="w-96 object-cover coolCorners"
    />
    <h1 className="text-9xl text-brick-600">
      { params.id }
    </h1>
  </> );
}
 
export default DynamicIdTest;