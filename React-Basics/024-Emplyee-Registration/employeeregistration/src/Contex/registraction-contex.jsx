import { createContext } from "react";

const registraction_details = createContext([]);

export const registraction_data = ({ children }) => {
  const [data, setData] = useState('');
  const sentDataToParent=()=>{
    setData(newData);
  }
  return (
    <registraction_details.Provider value={(data, sentDataToParent)}>
      {children}
    </registraction_details.Provider>
  );
};
