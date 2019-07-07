import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import moment from 'moment';

class Drink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			amount: props.drink.amount,
		}
		this.delete = this.delete.bind(this);
		this.edit = this.edit.bind(this);
		this.makeEditable = this.makeEditable.bind(this);
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({ amount: e.target.value });
	}

	delete() {
		const id = this.props.drink.id;
		this.props.onDelete(id);
	}

	edit(e) {
		e.preventDefault();
		const id = this.props.drink.id;
		this.props.onEdit(id, this.state.amount);
		this.setState({
			editable: false,
		});
	}

	makeEditable() {
		this.setState({
			editable: true
		});
	}

	render() {
		const { drink } = this.props;
		// Displays the date and time for that drink, with its amount, and Edit button which turns amount into an input, and Delete button which removes that drink from the database
		return (
			<li>
				{moment(drink.created_at).format("HH:mm") + " "}
				<span className="drink-item">{this.state.editable ? <Input onChange={ this.update } onSubmit={this.edit} value={ this.state.amount } type="number" className="edit-input"/> : drink.amount.amount} ml</span>
				<Button className="edit-button" buttonName={this.state.editable ? "✓" : "Edit"} onClick={this.state.editable ? this.edit : this.makeEditable} />
				<Button className="delete-button" onClick={this.delete} buttonName="☓"/>
			</li>
		);
	}
}

export default Drink;
