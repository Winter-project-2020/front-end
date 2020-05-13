// props 로 리덕스 스토어 받는다.
// index.js 에서 리덕스 스토어를 생성한 후 root 컴포넌트에 전달을 해주고 
// provider 컴포넌트를 이 파일에서 설정


import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

// Provider를 최상위 컴포넌트로 설정하고 props로 전달받은 store 넣기

const Root = ({ store }) => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    );
}

export default Root; 