import React, { Component } from 'react';
import Add from './Add';
import Counter from './Counter';
import List from './List';
import Fact from './Fact';

class Water extends Component {

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const {drinks} = this.props;
		return (
			<div>
				<div className="general">
					<div className="overview">
						<Add onSubmit={this.props.onSubmit}/>
						<Counter drinks={drinks}/>
					</div>
					<List onEdit={this.props.onEdit} onDelete={this.props.onDelete} drinks={drinks}/>
				</div>
				<Fact />
			</div>
		);
	}
}

export default Water;