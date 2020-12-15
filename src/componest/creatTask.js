import React from 'react';

function CreatTask({valoresFormulario,handleinputchange,reset,dispatch,edit,setEdit}){

const onSubmit=(e)=>{

  e.preventDefault();

  if(valoresFormulario.description.trim()!=='' &&  valoresFormulario.task.trim()!==''){
    if(!edit){
      const action={
        type:'add',
        payload:valoresFormulario
      }
      dispatch(action);
    }else{
        const action={
         type:'edit',
         payload:{
           id:valoresFormulario.id,
           data:valoresFormulario
         }
        }
        dispatch(action);
        setEdit(false);
    }
  
    reset();
  }

}

   return(
    <div className="contenedor-crearTareas">
    <div className="card">
        <div className="card-header">TAREAS</div>
        <div className="card-body">
          <form onSubmit={onSubmit} >
            <div className="form-group">
             <input
                type="text"
                name="task"
                placeholder="title" 
                className="form-control" 
                autoComplete="off"
                value={valoresFormulario.task}
                onChange={handleinputchange}
              />
            </div>
            <div className="form-group">
              <textarea name="description" 
               cols="30"rows="3" 
               placeholder="description task" 
               className="form-control"
               value={valoresFormulario.description}
               onChange={handleinputchange}
              ></textarea>
            </div>
            <div className="form-group">
              {
                !edit ? (<button id="sent" 
                type='submit'
                className="btn btn-primary btn-block"
                >
                 Add task
                </button>)
                :(<button id="edit" 
                type='submit'
                className="btn btn-success btn-block"
                >Edit
                </button>)
              }      
            </div>
          </form>
        </div>
     </div>    
   </div>
   );
};

export default CreatTask;