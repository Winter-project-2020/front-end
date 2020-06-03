// input(label), 로그인 button 으로 구성된 폼   

import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';


// 두개가 함께 있으면 상단 ( 그 두개의 사이 )에 여백을 주기 
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;


// rest 에는 onChange, type, name, value, placeholder 등의 
// input에서 사용하는 값을 넣어줄 수 있음 
const InputWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest} />
    </Wrapper>
);

export default InputWithLabel;