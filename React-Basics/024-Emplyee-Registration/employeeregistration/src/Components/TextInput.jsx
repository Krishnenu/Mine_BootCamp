// import { useContext } from "react";
// import { Input, Label } from "../Pages/Registration/style";
// import { Registraction_details } from "../Contex/registraction-contex";


// const TextInput = ({ labelName, inputType }) => {

//     const {data,sentDataToParent}=useContext(Registraction_details);
      
//     const getTextHandler = (event) => {
//         sentDataToParent(event.target.value);
//       };

//   return (
//     <>
//       <Label>{labelName}</Label>
//       <Input type={inputType} onChange={getTextHandler} />
//     </>
//   );
// };

// export default TextInput;


import { useContext } from "react";
import { Input, Label } from "../Pages/Registration/style";
import { Registraction_details } from "../Contex/registraction-contex";

const TextInput = ({ labelName, inputType }) => {
  const { data, sendDataToParent } = useContext(Registraction_details);

  const getTextHandler = (event) => {
    sendDataToParent(event.target.value); // Corrected the function name here
  };

  return (
    <>
      <Label>{labelName}</Label>
      <Input type={inputType} onChange={getTextHandler} />
    </>
  );
};

export default TextInput;
