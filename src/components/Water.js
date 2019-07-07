import React, { Component } from 'react';
import Add from './Add';
import Counter from './Counter';
import List from './List';
import Target from './Target';
import Fact from './Fact';

class Water extends Component {

	render() {
		const {drinks, onSubmit, onEdit, onDelete} = this.props;
		return (
			<div>
				<div className="general">
					<div className="overview">
						<Add onSubmit={onSubmit} drinks={drinks}/>
						<Counter drinks={drinks}/>
					</div>
					<Target drinks={drinks}/>
					<List onEdit={onEdit} onDelete={onDelete} drinks={drinks}/>
				</div>
				<Fact />
			</div>
		);
	}
}

export default Water;