import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import configureStore from './redux/configureStore';
import { AppContainer } from 'react-hot-loader';

const store = configureStore();

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Recipekorea'
	}
});

// 스토어를 Root의 컴포넌트의 props로 전달

ReactDOM.render(
      <Root store={store} />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
