import React from 'react';

import './Header.css';
import logo from './images/logo.png';

function Header() {
	return (
		<>
			<img 
				src={logo} 
				alt="Logo" 
				width="40px" 
				height="40px"
			/>
			<div className="registerText">계정만들기</div>
			<div className="loginText">로그인</div>
		</>
	);
}
export default Header;