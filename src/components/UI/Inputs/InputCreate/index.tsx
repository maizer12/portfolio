import React from 'react';
import { AppDispatch, AppSelector } from '../../../../redux/hook';
import './InputCreate.Module.scss'
import { setUserWrite } from '../../../../redux/toDo/slice';
import ButtonClear from '../../Buttons/ButtonClear';
const InputCreate = () => {
	const inputValue = AppSelector((state)=> state.ToDo.userWrite)
	const dispatch = AppDispatch()
	return (
		<div className='input-inner'>
			<input
				value={inputValue}
				onChange={e => dispatch(setUserWrite(e.target.value))}
				placeholder='Enter todo here'
				className='input-create'
			/>
			<ButtonClear/>
		</div>
	)
};

export default InputCreate;