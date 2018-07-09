import React, { Component } from 'react';

class Counter extends Component {
	render() {
		const {total} = this.props;

	    return (
      		<div>
      			<h3>{total} ml</h3>
			</div>
	    )
	}
}

export default Counter;
