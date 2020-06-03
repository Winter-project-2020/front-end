import React, { Component } from 'react'

import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtil';
import GoogleLogin from 'react-google-login';


const Container = styled.div`
    display: flex;
    flex-flow: column wrap;

    margin-top: 1rem;
    font-weight: 500;
    color: ${oc.gray[9]};
    width: auto;

    &:hover {

        cursor: pointer;
        background: ${oc.gray[3]};
        ${shadow(1)};
    }
    
    /* border-color: #DD4B39;
    background: #DD4B39; */
    
/* 
    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 34px;
        height: 100%;
        
        background: url('http://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
    }
    &:hover,

    &:active {
        background: ${oc.red[7]};
    } 
    */
`;



class GoogleButton extends Component {

// 정보를 저장하기 위해 state에 id(유저 고유번호), name(로그인 유저의 이름), provider(구글 로그인인지 카카오인지 식별) 를 저장한다.
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }

    // Login
    responseGoogle = (res) => {
        console.log(res);
    }
    
    // Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
    
        return ( 
            <Container>
                <GoogleLogin
                        buttonText="Login with Google"
                        clientId='700615001126-j60jq21e3n8edjfvbcusis65tvftm2m9.apps.googleusercontent.com'
                
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseFail}
                        cookiePolicy={'single_host_origin'} 
                />
            </Container>
    );
}

}
export default GoogleButton;
