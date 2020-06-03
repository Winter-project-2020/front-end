// combineReducers 를 통해 모듈안의 리듀서를 하나로 합친다
import { combineReducers } from 'redux';
import base from './base';
import auth from './auth';

export default combineReducers({
    base,
    auth
});