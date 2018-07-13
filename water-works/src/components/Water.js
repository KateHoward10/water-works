import React, { Component } from 'react';
import Add from './Add';
import Counter from './Counter';
import List from './List';

class Water extends Component {

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const {drinks} = this.props;
		return (
			<div>
				<Add onSubmit={this.props.onSubmit}/>
				<Counter drinks={drinks}/>
				<List onEdit={this.props.onEdit} onDelete={this.props.onDelete} drinks={drinks}/>
				<footer className="footer">Recommended daily water intake is 6-8 glasses (1.2 litres)</footer>
			</div>
		);
	}
}

export default Water;