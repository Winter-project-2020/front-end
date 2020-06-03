// Context API
import React, { useReducer, createContext, useContext, useRef } from 'react';
import { Switch } from '@material-ui/core';

const initalTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true,
    },

    {
        id: 2,
        text: '컴포넌트 스타일링 하기',
        done: true,
    },

    {
        id: 3,
        text: 'Context 만들기',
        done: false,
    },

    {
        id: 4,
        text: '기능 구현하기',
        done: false,
    }
];

// useReducer 에서 사용 할 함수 
// action을 가져와서 다음 상태를 리턴해주는 함수
// CREATE
// TOGGLE
// REMOVE 
function todoReducer(state, action) {

    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        // 처리할 수 없는 액션이 온다면    
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// state , dispatch 를 위한 context 를 만들어야 함
// Context 안에 provider 가 있음
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

const TodoNextIdContext = createContext();




export function TodoProvider({ children }) {

    const [state, dispatch] = useReducer(todoReducer, initalTodos);

    // id 값은 useref를 통해서 관리
    // 현재 4까지 있음
    const nextId = useRef(5);

    return (

        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// 훅 만들기
// 우리가 만약 TodoState를 쓰고 싶으면 
// 다른 컴포넌트에서 const state = useTodoState();
export function useTodoState() {

    // 에러 처리
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

// app 컴포넌트를 TodoProvider로 감싸야 한다.