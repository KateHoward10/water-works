import React, { Component } from 'react';
import Drink from './Drink';
import moment from 'moment';

class Counter extends Component {

	render() {
		const {drinks, onEdit, onDelete} = this.props;

	    return (
      		<div>
      			{drinks.filter(drink => drink.get("created_at") > moment().format('YYYY-MM-DD')).count() ?
      			<div>
	      			<h4 className="list-title">Today's Drinks</h4>
	      			<ul>
	      				{drinks.filter(drink => drink.get("created_at") > moment().format('YYYY-MM-DD')).map((drink, index) =>
							<Drink onEdit={ onEdit } onDelete={ onDelete } drink={ drink } key={index} />
	      				)}
	      			</ul>
      			</div> : <p>No drinks recorded yet today</p>}

      			{drinks.filter(drink => drink.get("created_at") > moment().format('YYYY-MM-DD')).count() ?
      			<div>
	      			<h4 className="list-title">Previous Drinks</h4>
	      			<ul>
	      				{drinks.filter(drink => drink.get("created_at") < moment().format('YYYY-MM-DD')).map((drink, index) =>
							<Drink onEdit={ onEdit } onDelete={ onDelete } drink={ drink } key={index} />
	      				)}
	      			</ul>
      			</div> : null}
			</div>
	    )
	}
}

export default Counter;
