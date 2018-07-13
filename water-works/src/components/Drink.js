import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import moment from 'moment';

class Drink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			amount: props.drink.get("amount"),
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
		const id = this.props.drink.get("id");
		this.props.onDelete(id);
	}

	edit(e) {
		e.preventDefault();
		const id = this.props.drink.get("id");
		const data = {amount: this.state.amount};
		this.props.onEdit(id, data);
		this.setState({
			editable: false,
			amount: data
		});
	}

	makeEditable() {
		this.setState({
			editable: !this.state.editable
		});
	}

	render() {
		const { drink } = this.props;
		return (
			<li>
				{moment(drink.get("created_at")).calendar() + ": "}
				<span className="drink-item">{this.state.editable ? <Input onChange={ this.update } value={ this.state.amount }/> : drink.get("amount") +" ml"}</span>
				<Button buttonName={this.state.editable ? "✓" : "Edit"} onClick={this.state.editable ? this.edit : this.makeEditable} />
				<Button onClick={this.delete} buttonName="☓"/>
			</li>
		);
	}
}

export default Drink;
