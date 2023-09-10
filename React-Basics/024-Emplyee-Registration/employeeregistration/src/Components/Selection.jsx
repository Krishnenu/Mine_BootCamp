import { Select } from "../Pages/Registration/style";

const Selection = ({value,text}) => {
  return (
    <div>
      <Select> {value}
        <option value={value}>{text}</option>
      </Select>
    </div>
  );
};

export default Selection;