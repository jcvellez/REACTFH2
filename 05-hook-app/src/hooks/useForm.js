import { useState } from "react"

const useForm = (inicilaState={}) => {
    const [values, setValues] = useState(inicilaState);

    const handleInputChange = ({ target })=>{
        setValues(
            {
              ...values,
              [target.name]: target.value
            }
          );
    };

  return [ values, handleInputChange ];
}


export default useForm;