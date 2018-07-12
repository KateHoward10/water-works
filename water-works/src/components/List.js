import React, { Component } from 'react';
import moment from 'moment';

class Counter extends Component {

	render() {
		const {drinks} = this.props;

	    return (
      		<div>
      			{drinks.count() ? <h4>Today's Drinks</h4> : null}
      			<ul>
      				{drinks.map(drink =>
      					<li>{moment(drink.get("created_at")).calendar() + ": "+ drink.get("amount") +" ml"}</li>
      				)}
      			</ul>
			</div>
	    )
	}
}

export default Counter;
