import React, { Component } from 'react';
import moment from 'moment';

class Counter extends Component {
	render() {
		const { drinks } = this.props;
		// Takes all drinks for today's date, finds the sum for their amounts
		const total =
			drinks.length > 0
				? drinks
						.filter(
							drink => moment(drink.created_at).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
						)
						.map(drink => drink.amount)
						.reduce((amount, sum) => +amount + +sum, 0)
				: 0;

		return (
			<div className="counter">
				<h3 className="today-total">Today's total:</h3>
				<h2 className="total">{total} ml</h2>
			</div>
		);
	}
}

export default Counter;
