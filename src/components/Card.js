import React, { Component } from 'react'; 
import './Card.css';

class Card extends Component {
	render(){
		return(
			<div className="container">
				<div className="inner-container">
					<div className="card inactive1"></div>
					<div className="card inactive2"></div>
					<div className="card">
						<div className="content">
							<h1>react</h1>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Card;