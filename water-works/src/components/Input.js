import React from 'react';

const Input = ({onSubmit, value, onChange}) => (
	<form onSubmit={ onSubmit }>
    	<input type="text" value={value} onChange={onChange}/>
	</form>
);

export default Input;
