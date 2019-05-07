import React from 'react';

const Input = ({type, onSubmit, value, onChange}) => (
	<input type={type} value={value} onChange={onChange} onSubmit={ onSubmit }/>
);

export default Input;
