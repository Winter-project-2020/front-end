import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from './TodoContext';

const TodoListBlock = styled.div`
    /* 자신이 차지할 수 있는 모든 영역을 차지한다
    확인하기 위해 색 설정함 */
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;

    /* 항목이 많아지면 스크롤바 보여주기 */
    overflow-y: auto;
    /* background: gray; */
`;
function TodoList() {

    // const state = useTodoState();

    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 스타일링 하기" done={true} />
            <TodoItem text="Context 만들기" done={false} />
            <TodoItem text="TodoCreate" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;
