import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

function Add(props) {
	const [amount, setAmount] = useState(500);

	function submit(e) {
		e.preventDefault();
		props.onSubmit(amount);
	}

	return (
		<form className="form" onSubmit={submit}>
			<p>Record your drink here</p>
			<Input onChange={e => setAmount(e.target.value)} type="number" className="add-input" />
			<span>ml </span>
			<Button buttonName="Add Drink" className="add-button" />
		</form>
	);
}

export default Add;
