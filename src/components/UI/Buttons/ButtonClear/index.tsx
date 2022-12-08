import React from 'react';
import { AppDispatch } from '../../../../redux/hook';
import {setUserWrite} from '../../../../redux/toDo/slice'
const ButtonClear = () => {
	const dispatch = AppDispatch()
	const clearInput = () =>{
		dispatch(setUserWrite(''))
	}
	return (
		<button className='button-clear' onClick={()=> clearInput()}>
			<img src="./img/clear.svg" alt="clear-btn" />
		</button>
	);
};

export default ButtonClear;