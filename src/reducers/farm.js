import {combineReducers} from 'redux';
import {MOVE_ORDER_TO_CUSTOMER} from './../actions/farmTypes';
import {MOVE_ORDER_TO_FARM} from './../actions/marketTypes';

const orders = (state = [], action) => {
  switch (action.type) {
  case MOVE_ORDER_TO_FARM:
    return [...state, action.payload];
  case MOVE_ORDER_TO_CUSTOMER:
    return state.filter(order => order.id !== action.payload.id);
  default:
    return state;
  }
};

export default combineReducers({
  orders
});
