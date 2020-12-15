import {useState} from 'react'

export const useForm=(inicial={})=> {

    const [values, setValues] = useState(inicial);
 
    const handleinputchange =({target})=>{

     setValues({
         ...values,
         [target.name]:target.value    
        });
    }

    const reset =()=>{
        setValues(inicial);
    }

    const setDefault=(valores)=>{
          setValues(
              valores
          );
    }

    return [values,handleinputchange,reset,setDefault]
}
