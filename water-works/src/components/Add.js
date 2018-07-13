import React, {Component} from 'react';
import Button from './Button';
import Input from './Input';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {amount: 0}
		this.update = this.update.bind(this);
		this.submit = this.submit.bind(this);
	}

	update(e) {
		this.setState ({ amount: e.target.value })
	}

	submit(e) {
		e.preventDefault();
		let data = this.state;
		this.props.onSubmit(data);
	}

	render() {
		return (
			<form className="form" onSubmit={ this.submit }>
			    <Input onChange={ this.update } type="text"/>
			    <span>ml    </span>
			    <Button buttonName="Add Drink"/>
			</form>
		)
	}

};

export default Add;