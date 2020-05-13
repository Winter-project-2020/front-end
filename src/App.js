import React from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import './App.css';

import MainPage from './components/views/MainPage';
import LoginPage from './components/views/Login/LoginPage';
import RegisterPage from './components/views/Login/RegisterPage';
import myPage from './components/views/myPage/myPage';
import Auth from './components/Auth/Auth';
import { createGlobalStyle } from 'styled-components';

import HeaderContainer from './components/views/Header/HeaderContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const NotFound = () => {
  return <h1>Not Found!</h1>;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
 
        {/** 
       <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
        */}
        <HeaderContainer />
        <Router>
          <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/auth" component={Auth} />
          <Route path="/about" component /> 
          <Route path="/profiles" component />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/myPage" component={myPage} />
          <Route path="/scriptMain" component />
          <Route component={NotFound} />
    
        </Switch>
      </Router>
    
      </div>
    );
  }
}

// withRouter history, location, match props를 제공
// history: go, goBack (앞으로가기 뒤로 가기)
export default App;
