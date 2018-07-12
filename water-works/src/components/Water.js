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
			</div>
		);
	}
}

export default Water;