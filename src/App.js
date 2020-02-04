import React, {useRef, useState} from 'react';
import Login from './LoginForm';
import './App.css'
import { Route, NavLink } from 'react-router-dom';
import Wrapper from './Wrapper';

import logo from './images/logo.png';
import TabPointg from './topics/TabPointing';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const List = () => (
  <ul>
    <li>list</li>
    <li>list</li>
    <li>list</li>
  </ul>
);

const activeStyle = {
  color: "red"
};

// class 안의 함수는 function을 생략한다.
// 컴포넌트를 만드는 템플릿 
// 요청이 들어왔을 때 그 요청에 맞는 컴포넌트를 보여주는 역할을 하는 Route
// path props를 받는다.
const App = () => {

  
  return(
    // <div>
    //   <Route exact path="/" component={Home} />
    //   <Route path="/about" component={About} />
    //   <Route path="/list" component={List} />
    // </div>
    <>
      <Wrapper>   
        <div className="template">
          <img
            className="logo" 
				    src={logo} 
				    alt="Logo" 
				    width="40px" 
				    height="40px"
			    />
          
          <h1 className="studyOpic">Study Opic!</h1>
          <div className="registerText">계정만들기</div>
			    <div className="loginText">로그인</div>
        </div>
      </Wrapper>

      <div>  
        <ul>
          <li>
            {/* 액티브 스타일: 클릭 시 빨간색으로 설정함 */}
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/list" activeStyle={activeStyle}>
              List
            </NavLink>
          </li>
        </ul>
       

        <footer>

        </footer>
      </div>

      
    </>  
    
  );
};


export default App;
