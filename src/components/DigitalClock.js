import React, { Component } from 'react';

class DigitalClock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString()
		};
	}

	componentDidMount() {
		this.clockInterval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.clockInterval);
	}

	tick() {
		this.setState({
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString()
		});
	}

	render() {
		return (
			<div>
				Date: {this.state.date}
				<br />
				Time: {this.state.time}
			</div>
		);
	}
}

export default DigitalClock;
