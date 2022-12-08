import React from 'react'
import { AppDispatch } from '../../../../redux/hook'
import {
	setRemoveElement,
	setRenameElement,
} from '../../../../redux/toDo/slice'
import './BtnRemoveRename.Module.scss'
type IProps = {
	btnRename: boolean
	index: number
}
const BtnRemoveRename = ({ btnRename, index }: IProps) => {
	const dispatch = AppDispatch()
	const pen: string = './img/pen.svg'
	const basket: string = './img/basket.svg'
	const btnFunctions = (index: number) => {
		if (btnRename) {
			dispatch(setRenameElement(index))
			dispatch(setRemoveElement(index))
		}else{
			dispatch(setRemoveElement(index))
		}
	}
	return (
		<button
			onClick={() => btnFunctions(index)}
			className={`btn-remove-rename ${btnRename ? 'btn-rename' : ''}`}
		>
			<img
				width={20}
				height={20}
				src={btnRename ? pen : basket}
				alt='btn-icon'
				className='btn-remove-rename__icon'
			/>
		</button>
	)
}

export default BtnRemoveRename
