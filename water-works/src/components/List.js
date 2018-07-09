import React, { Component } from 'react';
import moment from 'moment';

class Counter extends Component {
	render() {
		const {drinks} = this.props;

	    return (
      		<div>
      			<ul>
      				{drinks.map(drink =>
      					<li>{moment(drink.get("time")).calendar() + ": "+ drink.get("amount") +" ml"}</li>
      				)}
      			</ul>
			</div>
	    )
	}
}

export default Counter;
