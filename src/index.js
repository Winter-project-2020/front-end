import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; 


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);


serviceWorker.unregister();
// app을 라우터로 감싸면 Route를 사용할 때 match, history, location등의
// props 를 사용할 수 있게 해준다.