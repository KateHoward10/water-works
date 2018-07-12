import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

class Drink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			value: props.drink.get("drink"),
		}
		this.delete = this.delete.bind(this);
		this.edit = this.edit.bind(this);
		this.editable = this.editable.bind(this);
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	delete() {
		const id = this.props.drink.get("id");
		this.props.onDelete(id);
	}

	edit(e) {
		e.preventDefault();
		const id = this.props.drink.get("id");
		const data = {value: this.state.value};
		this.props.onEdit(id, data);
		this.setState({
			editable: false
		});
	}

	editable() {
		this.setState({
			editable: true
		});
	}

	render() {
		const { drink } = this.props;

		return (	
			<li>
				{this.state.editable ? <Input onChange={ this.update } onSubmit={this.edit} value={ this.state.value }/> : <span onClick={this.editable}>{ drink.get("drink") }</span>}
				<div>
					<Button onClick={this.delete} buttonName="☓"/>
				</div>
			</li>
		);
	}
}

export default Drink;
