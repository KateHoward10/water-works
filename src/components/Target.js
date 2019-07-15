import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import moment from 'moment';

function Target(props) {
	const [target, setTarget] = useState(2000);
	const [editable, toggleEditable] = useState(false);
	const { drinks } = props;
	const total =
		drinks.length > 0
			? drinks
					.filter(drink => moment(drink.created_at).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'))
					.map(drink => drink.amount)
					.reduce((amount, sum) => +amount + +sum, 0)
			: 0;
	const proportion = Math.min((total / target) * 50, 50);

	return (
		<div>
			<h3>Target:</h3>
			<span>
				{editable ? (
					<Input
						onChange={e => setTarget(e.target.value)}
						onSubmit={this.edit}
						value={target}
						type="number"
					/>
				) : (
					target
				)}{' '}
				ml
			</span>
			<Button buttonName={editable ? '✓' : 'Edit'} onClick={() => toggleEditable(!editable)} />
			<div className="target">
				<div className="water-blob" style={{ height: proportion + 'vh' }}></div>
			</div>
		</div>
	);
}

export default Target;
