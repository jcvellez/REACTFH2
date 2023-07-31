import { useState } from "react"

const useForm = (inicilaState = {}) => {
  const [values, setValues] = useState(inicilaState);

  const reset = () => {
    setValues(inicilaState);
  }

  const handleInputChange = ({ target }) => {
    setValues(
      {
        ...values,
        [target.name]: target.value
      }
    );
  };

  return [values, handleInputChange, reset];
}


export default useForm;