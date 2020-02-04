import React from 'react';
// import Header from './Header';

function Wrapper({ children }) {
	const style = {
		border: '2px solid black',
		background: 'white',
		padding: 15,
	};

	return ( 
		<div style={style}>
			{children}
			{/* <Header /> */}
		</div>
	);
}

export default Wrapper;
// props children
// 태그와 태그 사이의 내용을 의미하는 것 : children