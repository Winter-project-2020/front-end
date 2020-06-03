// 헤더 :비로그인 상태에서는 로그인버튼을 보여줘야 한다.
// 리덕스 상태에 연결 된 컨테이너 컴포넌트 필요

// 리덕스와 연결 : visible 값에 따라서 헤더를 숨기거나 보여줌
import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import LoginButton from './LoginButton';

class HeaderContainer extends Component {
    render() {
        const { visible } = this.props;
        if (!visible) return null;

        return (
            <Header>
                <LoginButton />
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible'])
    }),
    (dispatch) => ({

    })
)(HeaderContainer);
