// 헤더 :비로그인 상태에서는 로그인버튼을 보여줘야 한다.
// 리덕스 상태에 연결 된 컨테이너 컴포넌트 필요

import React, { Component } from 'react'
import Header from './Header';

class HeaderContainer extends Component {
    render() {
        return (
            <Header>
            
            </Header>
        );
    }
}

export default HeaderContainer;
