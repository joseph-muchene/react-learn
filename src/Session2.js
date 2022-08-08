import axios from "axios";

import { useEffect, useState } from "react";

function Session2() {
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(5);
  // fetch data
  const fetchData = () => {
    axios
      .get(`https://randomuser.me/api/?results=${pageCount}`)
      .then((response) => {
        setResults(response.data.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, [pageCount]);

  console.log(results);

  const incrementPageCount = () => {
    setPageCount(() => pageCount + 1);
  };

  const decrementPageCount = () => {
    // reset page count
    if (pageCount < 2) return null;

    setPageCount(() => pageCount - 1);
  };

  return (
    <div>
      <h1 className="text-center p-3 text-base text-white bg-slate-800">
        Sweet like Candy
      </h1>

      <div className=" bg-orange-200 p-4 my-4 mx-4">
        <p>
          I'll take you to the candy shop I'll let you lick the lollipop Go
          'head, girl, don't you stop Keep goin' until you hit the spot, woah
          I'll take you to the candy shop Want one taste of what I got? I'll
          have you spendin' all you got Keep goin' until you hit the spot, woah
        </p>
      </div>

      <div className="m-5">
        <button
          className="p-4 bg-black text-white"
          onClick={incrementPageCount}
        >
          increase page Count
        </button>

        <button className="p-4 bg-pink-600" onClick={decrementPageCount}>
          Decrease page Count
        </button>
      </div>
      {results.map((result) => {
        return (
          <div className="flex justify-center h-48 mb-4 ">
            <img
              src={result.picture.medium}
              className="rounded-md hover:animate-bounce"
            />

            <div className="mx-4 ">
              <p>{result.name.first}</p>

              <p>{result.name.last}</p>
            </div>
            <p className="text-center text-red-500">{result.gender}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Session2;
