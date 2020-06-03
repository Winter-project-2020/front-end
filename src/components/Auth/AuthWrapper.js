// 로그인 화면 틀 담당 
// 상단에는 로고, 하단에는 흰색 박스 
// children 을 통해 받은 값을 흰색 박스 안에 렌더링 


import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtil';
import { Link } from 'react-router-dom';

// 중앙 고정 
const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;

// 너비, 그림자
const ShadowedBox = styled.div`
    width: 600px;
    ${shadow(2)};
`;

// 로고 
const LogoWrapper = styled.div`
    background: ${oc.cyan[7]};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    font-family: 'Rajdhani';
    font-size: 2.5rem;

    color: white;
    letter-spacing: 5px;
    text-decoration: none;
    &:hover {
        text-decoration: none;

    }
`;

// children 들어가는 곳
// 흰색 박스 
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;

`;

const AuthWrapper = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">Study</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>

    </Positioner>
);

export default AuthWrapper;
