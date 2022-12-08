import React from 'react';
import { AppDispatch } from '../../../../redux/hook';
import { setCreateElement } from '../../../../redux/toDo/slice';
import './ButtonCreate.Module.scss'
const ButtonCreate = () => {
	const dispatch = AppDispatch()
	return (
		<button
			onClick={() => dispatch(setCreateElement())}
			className='button-create'
		>
			Submit
		</button>
	)
};

export default ButtonCreate;