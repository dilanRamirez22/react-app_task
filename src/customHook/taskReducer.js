
export const taskReducer=(state=[],{type,payload})=>{
  switch (type) {
      case 'add':
          return [...state,payload];
      case 'delete':
          return state.filter(item => item.id !== payload);
      case 'edit':
          return state.map(item=>item.id ===payload.id ? payload.data:item);
      default:
          return state;
  }

}