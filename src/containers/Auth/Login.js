import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightLink, GoogleButton } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';

class Login extends Component {

    // authActions 를 불러와서 바인딩 시켜준다. 
    // handleChange 를 만들어서 이벤트 타겟의 name, value 에 따라서 changeInput을 호출
    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'login'
        });
    }

    // 로그인페이지 에서 input 을 입력한 상태로 회원가입을 갔다가 다시 로그인으로 돌아왔을 때
    // 현재 상태값들이 리덕스 스토어에 남아있다.
    // 컴포넌트가 언마운트 -> 값 초기화

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login');
    }


    render() {

        // 렌더링 : email, password 값을 로그인 폼을 읽어와서 각 input의 value 로 전달
        const { email, password } = this.props.form.toJS();
        const { handleChange } = this;

        return (
            <AuthContent title="로그인">
                <InputWithLabel 
                    label="이메일" 
                    name="email" 
                    placeholder="이메일"
                    value={email}
                    onChange={handleChange} />
                
                    <InputWithLabel 
                    label="비밀번호" 
                    name="password" 
                    placeholder="비밀번호" 
                    type="password"
                    value={password}
                    onChange={handleChange} />
                
                <AuthButton>로그인</AuthButton>
                <GoogleButton>Login with Google</GoogleButton>
                <RightLink to="/auth/register">회원가입</RightLink>
            </AuthContent>


        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Login);
