import React, { Component } from 'react';
import Drink from './Drink';
import moment from 'moment';
import Input from './Input';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: moment().format('YYYY-MM-DD'),
		}
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState ({ date: e.target.value });
	}

	render() {
		const {drinks, onEdit, onDelete} = this.props;
		const date = this.state.date;
		// Lists all drinks for the selected day (default of today), unless there are none, then displays "No drinks recorded"
	    return (
      		<div className="list-section">
	      		<h4 className="list-title">{date > moment().subtract(2, 'days').format('YYYY-MM-DD') ? moment(date).calendar().split(" at")[0] : moment(date).format("MMMM Do")}'s Drinks</h4>
	      		{drinks.length > 0 && drinks.filter(drink => moment(drink.created_at).format('YYYY-MM-DD') === date).length ?
      			<div>
	      			<ul>
	      				{drinks.filter(drink => moment(drink.created_at).format('YYYY-MM-DD') === date).map((drink, index) =>
							<Drink onEdit={ onEdit } onDelete={ onDelete } drink={ drink } key={index} />
	      				)}
	      			</ul>
      			{moment().format('YYYY-MM-DD') === date ? null : <h3>Total: {drinks.filter(drink => moment(drink.created_at).format('YYYY-MM-DD') === date).map(drink => drink.amount).reduce((amount, sum) => +amount + +sum, 0)} ml</h3>}
				</div> : <p>No drinks recorded</p>}

      			<p>See other days:</p>
      			<Input onChange={ this.update } type="date" value={date}/>
			</div>
	    )
	}
}

export default Counter;
