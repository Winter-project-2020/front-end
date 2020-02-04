import React, { useState } from 'react';

function Counter() {
	// useState는 배열을 추출하는데 1번째 원소를 number 2번째를 setNumber 로 추출하겠다는 뜻
	// 로직을 정의하는 업데이트 함수를 넣어줄 수 있음 
	const [number, setNumber] = useState(0);
	const onIncrease = () => {
		// setNumber(number + 1);
		// 그냥 다음 상태를 보여줄 수 있고 .. 업데이트 로직을 이용할 수 있음 
		// 업데이트 함수임 . 최적화와 관련이 있음
		setNumber(preNumber => preNumber + 1);
	}
	const onDecrease = () => {
		setNumber(preNumber => preNumber - 1);
	}
	return (
		<div>
			<h1>{number}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>	
		{/* onClick={onIncrease()} 함수를 호출해버리면 안된다. */}
		</div>
	);
}

export default Counter;