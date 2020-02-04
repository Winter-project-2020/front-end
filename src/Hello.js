import React from 'react';

// 컴포넌트 함수형 , 클래스형
// 세미콜론은 없어도 된다.
// 컴포넌트는 ui 조각이다. 
// function Hello(props) {
// 	console.log(props);
// return <div style={{color: props.color}}>안녕하세요. {props.name}</div>;
// }

// 비구조할당 구조분해 
function Hello( {color, name, isSpecial} ) {
	return (
		<div style={{
			color
		}}>
			{/* 조건부 렌더링 true false일 때 다른 결과가 나온다.
			삼항연산자는 내용이 달라질 때 보통 쓴다. 
			값이 false일 때 없다면 && 이용 
			props를 true 로 지정하지 않아도 디폴트 값은 true임 */}
			{isSpecial ? '스페셜하다 ' : '낫스페셜'}
			{/* {isSpecial && <b>*</b>} */}
			안녕하세요. {name}
		</div>
	
	);
}

// props 기본값 설정, 
Hello.defaultProps = {
	name: '이름없음',
};

export default Hello;