// react-router 의 Link 를 기반해 만들기
// 이미 만들어진 컴포넌트를 styled를 통해 스타일링할 때 
// styled(Link)``;

import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from '../../../lib/styleUtil';

const BorderedButton = styled(Link)`
    font-weight: 600;
    color: ${oc.teal[4]};
    border: 1px solid ${oc.teal[5]};
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s all;

    &:hover {
        background: ${oc.teal[5]};
        color: white;
        text-decoration: none;
        ${shadow(1)}
    }
    &:active {
        /* 마우스 클릭 시 아래로 미세하게 움직임 */
        transform: translateY(3px);
    }
`;

const LoginButton = () => (
    <BorderedButton to="/auth/login">
        로그인 / 가입 
    </BorderedButton>
);

export default LoginButton;