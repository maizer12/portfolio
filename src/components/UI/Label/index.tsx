import React from 'react'
import { AppDispatch, AppSelector } from '../../../redux/hook'
import { setFinished } from '../../../redux/toDo/slice'
import { IItem } from '../../../redux/toDo/types'
import Checkbox from '../Inputs/Checkbox'
import './Label.Module.scss'
type IProps = {
	item: IItem
	indexElement:number
}
const Label = ({ item, indexElement }: IProps) => {
	const itemsUser = AppSelector(stat => stat.ToDo.listItems)
	const dispatch = AppDispatch()
	const filterElements = (ind: number) =>{
		return itemsUser.filter((e, i)=> i !== ind)
	}
	const taskFinished = () => {
		dispatch(setFinished([...filterElements(indexElement), { text: item.text, finished: !item.finished }]))
	}
	return (
		<div onClick={() => taskFinished()} className='label'>
			<Checkbox />
			<label className='label__text'>{item.text}</label>
		</div>
	)
}

export default Label
