import Selection from "../../Components/Selection";
import TextInput from "../../Components/TextInput"
import { Button,Text } from "./style";

const Registration=()=>{
    return (
        <div>
            <h1>Employe Registraction Form</h1>
            <TextInput labelName="FirstName*" inputType="text"></TextInput>
            <TextInput labelName="LastName*" inputType="text"></TextInput>
            <Selection value="BE" text="Hellow"></Selection>
            <TextInput labelName="Start" inputType="date"></TextInput>
            <TextInput labelName="End" inputType="date"></TextInput>
            <TextInput labelName="Current Salary" inputType="text"></TextInput>
            <Text></Text>
            <Button>Cancel</Button>
            <Button>Save</Button>
        </div>
    );
}

export default Registration;