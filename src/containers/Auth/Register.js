import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightLink } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';

class Register extends Component {

    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'register'
        });
    }


    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('register');
    }

    render() {

        const { username, email, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange } = this;

        return (
            <AuthContent title="회원가입">

                <InputWithLabel 
                    label="Full Name" 
                    name="username" 
                    placeholder="이름"
                    value={username}
                    onChange={handleChange} />
                <InputWithLabel 
                    label="Email Address" 
                    name="email" 
                    placeholder="이메일"
                    value={email}
                    onChange={handleChange} />
                <InputWithLabel 
                    label="Password" 
                    name="password" 
                    placeholder="비밀번호" 
                    type="password" 
                    value={password}
                    onChange={handleChange} />
                <InputWithLabel 
                    label="Confirm Password" 
                    name="passwordConfirm" 
                    placeholder="비밀번호 확인" 
                    type="password"
                    value={passwordConfirm}
                    onChange={handleChange} />
                <AuthButton>Sign Up</AuthButton>
                <RightLink to="/auth/login">로그인</RightLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Register);

// 회원가입 페이지에서 인풋에 입력이 제대로 되는지 ,
// 액션이 디스패치 되고 있는지 확인하기