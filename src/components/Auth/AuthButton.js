import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtil';

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    background: ${oc.cyan[7]};
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(1)};
    }
    &:active {
        background: ${oc.teal[6]};
    }


`;

const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;