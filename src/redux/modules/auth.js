// 회원가입 로그인 페이지에서 input 내용이 변경될 때 
// 호출할 변화에 대한 로직을 재사용할 수 있도록 auth 모듈 필요

import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

// 1. 첫번째 액션 : 특정 폼의 특정 인풋의 값을 변경하는 CHANGE_INPUT
// 2. 두번째 액션 : 특정 폼을 초기상태로 설정하는 INITIALIZE_FORM
const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // input 값 변경
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // form 초기화

export const changeInput = createAction(CHANGE_INPUT); //{ form, name, valut }
export const initializeForm = createAction(INITIALIZE_FORM); // form

const initialState = Map({
    register: Map({
        form: Map({
            /* username: 이름 , email: 이메일*/
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        })
    }),
    login: Map({
        form: Map({
            email: '',
            password: ''
        })
    })
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        const initialForm = initialState.get(action.payload);
        return state.set(action.payload, initialForm);
    }
}, initialState);

// CHANG_INPUT 하나로 6개의 input 을 처리할 수 있다.