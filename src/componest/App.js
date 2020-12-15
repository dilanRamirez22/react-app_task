import React,{useEffect,useState,useReducer} from 'react';
import {v4 as uuid4} from 'uuid';
import '../assets/index.css';
import CreatTask from './creatTask';
import ListTask from './listTask';
import {taskReducer} from'../customHook/taskReducer';
import {useForm}  from '../customHook/useForm';


const init=()=>{
  let tasks
  if(localStorage.getItem('task')===null){
   tasks=[];
  }else{
  tasks=JSON.parse(localStorage.getItem('task'));
  }
   return tasks
}

function App() {


  const [state, dispatch] = useReducer(taskReducer,[], init);
   
  const [edit, setEdit]=useState(false);

  const[valoresFormulario,handleinputchange,reset,setDefault]=useForm({
    id:uuid4(),task:'',description:'' 
} )

  useEffect(() => {
    localStorage.setItem('task',JSON.stringify(state));
  }, [state]);


  return (
    <div className="contenedor">
      <CreatTask
      valoresFormulario={valoresFormulario}
      edit={edit}
      setEdit={setEdit}
      reset={reset}
      handleinputchange={handleinputchange}
      dispatch={dispatch}
      />    
      <ListTask
        setDefault={setDefault}
        setEdit={setEdit}
       task={state}
       dispatch={dispatch}
      />
    </div>
  );
}

export default App;
