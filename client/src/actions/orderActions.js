import axios from 'axios';

const ORDERS_URL = 'https://twilio-watson-node.herokuapp.com/orders';

export const fetchTodos = () => async dispatch => {
  try {
    const res = await axios.get(ORDERS_URL);
    // console.log('HOLLA', res.data.items);
    dispatch(loadTodos(res.data.items));
    return res;
  } catch (err) {
    // dispatch(addAlert("Couldn't get Todos."));
  }
};

export const loadTodos = orders => {
  return {
    type: 'LOAD_TODOS',
    orders
  };
};
