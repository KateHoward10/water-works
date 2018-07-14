import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import moment from 'moment';

class Target extends Component {
	constructor(props) {
		super(props);
		this.state = {
			target: 2000,
			editable: false
		}
		this.update = this.update.bind(this);
		this.makeEditable = this.makeEditable.bind(this);
	}

	update(e) {
		this.setState ({ target: e.target.value });
	}

	makeEditable() {
		this.setState({
			editable: !this.state.editable
		});
	}

	render() {
		const {drinks} = this.props;
		const total = drinks.filter(drink => drink.get("created_at") > moment().format('YYYY-MM-DD')).map(drink => drink.get("amount")).reduce((amount, sum) => +amount + +sum, 0);
		const proportion = Math.min(total / this.state.target * 50, 50);

	    return (
	    	<div>
	      		<h3>Recommended target:</h3>
	      		<span>{this.state.editable ? <Input onChange={ this.update } onSubmit={this.edit} value={ this.state.target } type="text"/> : this.state.target} ml</span>
	      		<Button buttonName={this.state.editable ? "✓" : "Edit"} onClick={this.makeEditable} />
	      		<div className="target">
	  				<div className="water-blob" style={{height: proportion+"vh"}}></div>
	  			</div>
  			</div>
	    )
	}
}

export default Target;
