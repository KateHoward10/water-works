import React, { Component } from 'react';
import moment from 'moment';

class Counter extends Component {
	render() {
		const {drinks} = this.props;

	    return (
      		<div className="counter">
      			<h3 className="today-total">Today's total:</h3>
      			<h2 className="total">{drinks.filter(drink => drink.get("created_at") > moment().format('YYYY-MM-DD')).map(drink => drink.get("amount")).reduce((amount, sum) => +amount + +sum, 0)} ml</h2>
			</div>
	    )
	}
}

export default Counter;
