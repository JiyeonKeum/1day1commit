import { combineReducers } from 'redux';
import CalcReducer from './CalcReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
    CalcReducer, CartReducer
});

export default rootReducer;