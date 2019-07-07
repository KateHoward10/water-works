import React, {Component} from 'react';
import Button from './Button';
import Input from './Input';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {amount: 500}
		this.update = this.update.bind(this);
		this.submit = this.submit.bind(this);
	}

	update(e) {
		this.setState ({ amount: e.target.value })
	}

	submit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.amount);
	}

	render() {
		return (
			<form className="form" onSubmit={ this.submit }>
				<p>Record your drink here</p>
			    <Input onChange={ this.update } type="number" className="add-input"/>
			    <span>ml    </span>
			    <Button buttonName="Add Drink" className="add-button"/>
			</form>
		)
	}

};

export default Add;