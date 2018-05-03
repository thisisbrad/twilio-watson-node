// import uuid from 'uuid';

export function orderReducer(state = [], action) {
  // console.log('### reducers ###', state, action);
  switch (action.type) {
    case 'LOAD_TODOS':
      return action.orders;
    case 'ADD_TODO':
      return [...state, action.newTodo];
    case 'UPDATE_TODO':
      const { index, todo } = action;
      console.log('UPDATE REDUCER ', index, todo);
      return [...state.slice(0, index), todo, ...state.slice(index + 1)];
    case 'REMOVE_TODO':
      return state.filter(todo => (todo._id === action.id ? false : true));
    default:
      return state;
  }
}
