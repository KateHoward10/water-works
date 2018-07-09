import React, { Component } from 'react';
import Input from './Input';
import Counter from './Counter';
import List from './List';

class Water extends Component {

	render() {
		const {amount, total, drinks, submit, display} = this.props;
		return (
			<div>
				<Input amount={amount} submit={submit} display={display}/>
				<Counter total={total}/>
				<List drinks={drinks}/>
			</div>
		);
	}
}

export default Water;