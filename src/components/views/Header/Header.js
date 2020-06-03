import React from 'react'

import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../../lib/styleUtil';




// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}
    ${media.tablet`
        width: 100%;
    `}
`;

// 로고 : cyan 7
const Logo = styled.div`
    font-family: 'Rajdhani';
    font-size: 32px;
    letter-spacing: 2.1px;
    color: ${oc.cyan[7]};
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.cyan[6]}, ${oc.teal[5]});
`;

function Header({children}) {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo>Study</Logo>
                    <Spacer />
                    {children}
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder />
        </Positioner>
        // <div className={cx("header")}>
            
        //     <Link to={"/"}><FiBookOpen style={{ 
        //         color: 'white', 
        //         marginLeft: '6rem', 
        //         fontWeight: '700', 
        //         fontSize: '2rem',
        //         cursor: 'pointer' }}/></Link>
        //     <Link to={"/"} className={cx("logo")}>
        //         Study
        //     </Link>
        //     <div className={cx("Login")}>
        //         Login
        //     </div>
        // </div>
    );
}
// 이 컴포넌트의 우측에는, children 을 통하여 동적으로 렌더링하도록 설정. 
// 로그인/비로그인 상태에 따라 다른 결과물이 렌더링.

export default Header;
