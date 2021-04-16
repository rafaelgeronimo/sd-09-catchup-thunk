import { combineReducers } from 'redux';
import fruitReducer from './fruitReducer';
import productReducer from './productReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({ fruitReducer, productReducer, weatherReducer });
