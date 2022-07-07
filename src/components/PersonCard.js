import React, { Component } from 'react';

class PersonCard extends Component {
	constructor(props) {
		super(props);
		this.state = {age: props.age}
	}

	handleClick() {
		let userAge = this.state.age;
		userAge++;
		this.setState({ age: userAge });
	}

	render() {
		const { firstName, lastName, hairColor } =  this.props;
		
		return (
			<div>
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {this.state.age}</p>
				<p>Hair Color: {hairColor}</p>
				<button onClick={this.handleClick}>
					Birthday Switch!
				</button>
			</div>
		);
	}
}
export default PersonCard;
