import React, { Component } from 'react';
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
// <Root store={store} />


// 리액트 핫 로더 적용하기위해 AppContainer 를 통하여 Root 컴포넌트를 적용
// module.hot 관련 코드 작성 
const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component store={store} />
		</AppContainer>, 
		
		document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
	module.hot.accept('./Root', () => render(Root));
}

serviceWorker.unregister();
