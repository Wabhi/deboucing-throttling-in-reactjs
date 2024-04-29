// import React, { useState, useEffect } from "react";

// function Throttling() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [throttledTerm, setThrottledTerm] = useState("");

//   useEffect(() => {
//     const throttledTimer = setTimeout(() => {
//       if (throttledTerm !== "") {
//         console.log("call api with search term......", throttledTerm);
//       }
//       setThrottledTerm("");
//     }, 3000);

//     return () => clearTimeout(throttledTimer);
//   }, [throttledTerm]);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//     if (!throttledTerm) {
//       const throttled = setTimeout(() => {
//         setThrottledTerm(e.target.value);
//       }, 1000); // Adjust this value for your desired throttling interval
//       return () => clearTimeout(throttled);
//     }
//   };

//   return (
//     <>
//       <input type="text" onChange={handleChange} />
//       <p>Search Term : {searchTerm}</p>
//     </>
//   );
// }

// export default Throttling;
import React, { useState, useEffect } from "react";

function Throttling() {
  const handleMouseMove = () => {
    console.log("call the api......");
  };

  const myThrottling = (cb, d) => {
    let run = false;
    return function (...args) {
      if (!run) {
        run = true;
        cb(...args);
        setTimeout(() => {
          run = false;
        }, d);
      }
    };
  };
  window.addEventListener("mousemove", myThrottling(handleMouseMove, 3000));
  return (
    <>
      <input type="text" onChange={""} />
    </>
  );
}

export default Throttling;
