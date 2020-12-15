import React from 'react';

function ListTask({dispatch,task,setEdit,setDefault}){

const taskDelete=(id)=>{
   const action={
     type:'delete',
     payload:id
   }
   dispatch(action)
}
const EditVal=(item)=>{
  setDefault(item);
  setEdit(true);
}
    
   return(
    <div className="contenedor-tarea">
          <h1>TAREAS CREADAS</h1>
          <div className="lista-tarea">
          {
            task.length >0 ?
            task.map(item=>(
            <div key={item.id} className="nueva-tarea">
                <p>{item.task}</p>
                <p>{item.description}</p>
                <button
                className="editar btn btn-outline-success"
                onClick={()=>EditVal(item)}
                ><i className="fas fa-edit"></i>
                </button>
                <button 
                 className="eliminar btn btn-danger"
                 onClick={()=>taskDelete(item.id)}
                 ><i className="fas fa-trash-alt"></i>
                 </button>
            </div>
            )):(
              <div>no hay usuarios disponibles</div>
            )
          }
          </div>
      </div>
    );
};

export default ListTask;