import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: 0,
		}
		this.update = this.update.bind(this);
		this.set = this.set.bind(this);
	}

	update(e) {
		this.setState ({ amount: e.target.value })
	}

	set(e) {
		e.preventDefault();
		const amount = this.state.amount;
		this.props.submit(amount);
		this.props.display(amount);
	}

	render() {
		return (
			<form>
			    <input type="text" onChange={this.update}/>
			    <span> ml  </span>
			    <button type="submit" onClick={this.set}>Submit</button>
			</form>
		)
	}

};

export default Input;