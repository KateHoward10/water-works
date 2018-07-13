import React from 'react';

const Input = ({onSubmit, value, onChange}) => (
	<input type="text" value={value} onChange={onChange} onSubmit={ onSubmit }/>
);

export default Input;
