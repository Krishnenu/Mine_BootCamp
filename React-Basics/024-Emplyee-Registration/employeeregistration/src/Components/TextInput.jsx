import { Input, Label } from "../Pages/Registration/style";


const TextInput = ({labelName,inputType}) => {
  return (
    <>
            <Label>{labelName}</Label>
            <Input type={inputType}/>
    </>
  );
};

export default TextInput;