import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';


// styled 컴포넌트

const Remove = styled.div`
    /* 처음에는 보이지 않게 0 으로 설정
    todoitemblock에 커서를 올렸을 때 보이게 함 */
    opacity: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &.hover {
        color: #ff6b6b;
    }
`;




const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    cursor: pointer;

    /* done 값이 있으면 border와 색 바꾸기  */
    ${props => 
        props.done && 
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
    `}
    
`;
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;

    ${props => props.done && css`
        color: #ced4da;
    `}
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;


    &.hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
            
    );
}

export default TodoItem;
