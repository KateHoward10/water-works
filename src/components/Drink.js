import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import moment from 'moment';

function Drink(props) {
	const { drink, onEdit, onDelete } = props;
	const [editable, toggleEditable] = useState(false);
	const [amount, setAmount] = useState(drink.amount);

	function edit(e) {
		e.preventDefault();
		onEdit(drink.id, amount);
		toggleEditable(false);
	}

	// Displays the date and time for that drink, with its amount, and Edit button which turns amount into an input, and Delete button which removes that drink from the database
	return (
		<li>
			{moment(drink.created_at).format('HH:mm') + ' '}
			<span className="drink-item">
				{editable ? (
					<Input
						onChange={e => setAmount(e.target.value)}
						onSubmit={edit}
						value={amount}
						type="number"
						className="edit-input"
					/>
				) : (
					drink.amount
				)}{' '}
				ml
			</span>
			<Button
				className="edit-button"
				buttonName={editable ? '✓' : 'Edit'}
				onClick={editable ? edit : () => toggleEditable(true)}
			/>
			<Button className="delete-button" onClick={() => onDelete(drink.id)} buttonName="☓" />
		</li>
	);
}

export default Drink;
