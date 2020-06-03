import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../redux/modules/base';

import { AuthWrapper } from 'components/Auth';
import { Login, Register } from 'containers/Auth';
import { Route } from 'react-router-dom';

// 특정 라우터에 들어갔을 때 componentWillMount 에서 헤더를 숨기도록 설정
// 해당 라우트를 벗어날 때 componentWillUnmount 를 통해 다시 헤더를 활성화
// 헤더 컨테이너를 리덕스에 연결시켜서 visible 값에 따라 숨길지 말지 정하기 
class Auth extends Component {

    // 페이지 진입 : 헤더 비활성화
    componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    // 페이지 벗어남 : 헤더 다시 활성화 
    componentWillUnmount() {
        this.props.BaseActions.setHeaderVisibility(true);
    }
    render() {
        return(
            <AuthWrapper>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/register" component={Register} />
            </AuthWrapper>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Auth);
