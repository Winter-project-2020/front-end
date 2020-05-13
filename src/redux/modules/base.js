// 리덕스 코드 : ducks 구조 
// 프로젝트 기반의 관련된 상태를 관리한다.
// 예: 헤더의 렌더링 , 유저메뉴 나타남 여부 등등

import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';


// 헤더 렌더링 여부
const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY';

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY);

const initialState = Map({
    header: Map({
        visible: true
    })
});
export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload)
}, initialState);