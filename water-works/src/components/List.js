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
		console.log(this.state.date);
	}

	render() {
		const {drinks, onEdit, onDelete} = this.props;
		const date = this.state.date;

	    return (
      		<div className="list-section">
	      		<h4 className="list-title">{moment(date).calendar().split(" at")[0]}</h4>
	      		{drinks.filter(drink => moment(drink.get("created_at")).format('YYYY-MM-DD') == date).count() ?
      			<div>
	      			<ul>
	      				{drinks.filter(drink => moment(drink.get("created_at")).format('YYYY-MM-DD') == date).map((drink, index) =>
							<Drink onEdit={ onEdit } onDelete={ onDelete } drink={ drink } key={index} />
	      				)}
	      			</ul>
      			</div> : <p>No drinks recorded</p>}

      			<p>See other days:</p>
      			<Input onChange={ this.update } type="date" value={date}/>
			</div>
	    )
	}
}

export default Counter;
