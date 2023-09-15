// import { createContext, useState } from "react";

// export const Registraction_details = createContext();

//  const Registraction= ({ children }) => {
//   const [data, setData] = useState('');
//   const sentDataToParent=(newdata)=>{
//     setData(newdata);
//   }
//   console.log(data);
//   return (
//     <Registraction_details.Provider value={{data, sentDataToParent}}>
//       {children}
//     </Registraction_details.Provider>
//   );
// };


import React, { createContext, useState } from "react";

export const Registraction_details = createContext();

const Registraction = ({ children }) => {
  const [data, setData] = useState('');

  const sendDataToParent = (newdata) => {
    setData(newdata);
  };

  console.log(data);

  return (
    <Registraction_details.Provider value={{ data, sendDataToParent }}>
      {children}
    </Registraction_details.Provider>
  );
};

export default Registraction;
