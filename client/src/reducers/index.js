import { combineReducers } from 'redux';
import { orderReducer as orders } from './orderReducer';

const rootReducer = combineReducers({ orders });

export default rootReducer;
