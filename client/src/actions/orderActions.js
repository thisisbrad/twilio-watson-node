import axios from 'axios';

const ORDERS_URL = 'https://twilio-watson-node.herokuapp.com/orders';

export const fetchTodos = () => async dispatch => {
  try {
    const res = await axios.get(ORDERS_URL);
    dispatch(loadTodos(res.data.items));
  } catch (err) {
    // dispatch(addAlert("Couldn't get Todos."));
  }
};

export const loadTodos = orders => ({ type: 'LOAD_TODOS', orders });
