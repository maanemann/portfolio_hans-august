
'use client'

import { useAppContext } from "@/app/context/page";

export default function Lauphex() {
  // dekonstruktion af useAppContext :
  const { name, setName } = useAppContext();

  function nameToggle() {
    if(name !== "Lauphex") {
      setName("Lauphex")
    }
    else {
      setName("Twalmer")
    }
    return(
      { name }
    )
  }

  return (
    <main className="
      text-amber-100 bg-stone-800
    ">
      <div className="
        min-h-64
        grid content-center justify-center
        text-center
      ">
        <span className="
          text-3xl
        ">
          { name }
        </span>
        <button
          className="
            mt-3 px-2 rounded-sm
            text-stone-800 bg-amber-100
            font-semibold
          "
          onClick={nameToggle}> Change name
        </button>
      </div>
    </main>
  );
}
