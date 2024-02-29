
// In nextjs app router all data is 'static' (cached) by default (read more > *)
export default async function FetchTest() {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Etc/GMT+1',
  {
    // ctrl+space after `cache:` to see options :
    cache: "no-store"
  }
  );
  const data = await res.json();
  
  return ( <h1 className="text-2xl text-ocker-300">{ data.datetime }</h1> );
}

// * To make data non-static, use `{ cache: "no-store" }` (or other option) after the url in `fetch()` (ctrl+space after `cache:` to see options)