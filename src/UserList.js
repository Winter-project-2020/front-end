// 배열 렌더링
import React from 'react';

// 하나의 컴포넌트 파일에 2개의 컴포넌트를 넣어도 된다.

function User({ user }) {
	return(
		<div>
			<b>{user.username}</b>
			<span>({user.email})</span>
		</div>
	);
}

function UserList({ users }) {
	// const users = [
	// 	{
	// 		id: 1,
	// 		username: 'ahyoung',
	// 		email: 'ahyoung@gmail.com'
	// 	}, 
	// 	{
	// 		id: 2,
	// 		username: 'tester1',
	// 		email: 'tester1.gmail.com'
	// 	},
	// 	{
	// 		id: 3,
	// 		username: 'su',
	// 		email: 'su.gmail.com'
	// 	}
	// ];

	return (
		<div>
			{
				users.map(
					user => (<User key={user.id} user={user} />)
				)
			}

			{/* <User user={users[0]} />
			<User user={users[1]} />
			<User user={users[2]} /> */}
		</div>
	);
}

export default UserList;