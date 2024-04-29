// import React, { useState, useEffect } from "react";

// function Debouncing() {
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       console.log("call api with search term......");
//     }, 3000);
//     return () => clearTimeout(debounceTimer);
//   }, [searchTerm]);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   return (
//     <>
//       <input type="text" onChange={handleChange} />
//       <p>Search Term : {searchTerm}</p>
//     </>
//   );
// }

// export default Debouncing;
import React, { useState, useEffect } from "react";

function Debouncing() {
  const handleChange = () => {
    console.log("make api call........");
  };
  function myDebouncing(cb, d) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  }
  return (
    <>
      <input type="text" onChange={myDebouncing(handleChange, 3000)} />
    </>
  );
}

export default Debouncing;
