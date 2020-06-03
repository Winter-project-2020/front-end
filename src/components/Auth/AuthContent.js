import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${oc.gray[8]};
    margin-bottom: 1.2rem;
`;

// /auth/login , /auth/register 서브 라우터로 감싸주는 컴포넌트 
// 현재 어떤 페이지인지 알려줄 제목을 title props 로 받아와서 보여준다.
// 그 하단에는 children 을 렌더링 해준다.

// 로그인 , 회원가입 컴포넌트에 AuthContent title을 다르게 설정
const AuthContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        {children}
    </div>
);

export default AuthContent;