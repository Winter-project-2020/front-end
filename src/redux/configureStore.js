// 스토어 생성
import { createStore } from 'redux';
import modules from './modules';

// 미들웨어 , 리액트 핫 로더 적용하기
// 코드 변경 시 페이지가 새로고침없이 업데이트 된다.
const configureStore = (initialState) => {
    const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
    // hot-reloading ( 리덕스에서 모듈 핫 로딩하기 )
    // 핫 로딩이 진행될 때 리덕스 관련 코드도 지원이 되게
    // 모듈을 불러오는 곳에서도 수정
    if (module.hot) {
        module.hot.accept('./modules', () => {
            const nextRootReducer = require('./modules').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}




// 컴포넌트의 메소드중 async/await 을 사용한 메소드를 수정한다면
// 임의로 새로고침 하기 
export default configureStore;