import React from 'react'
import BtnRemoveRename from '../UI/Buttons/BtnRemoveRename'
import './Item.Module.scss'
import Label from '../UI/Label'
import { IItem } from '../../redux/toDo/types'
type IProps = {
	indexElement: number,
	item:IItem
}
const Item = ({ item, indexElement, }: IProps) => {
	return (
		<li className={`item ${item.finished ? 'item-finish' : ''}`}>
			<Label indexElement={indexElement} item={item} />
			<div className='item__buttons'>
				<BtnRemoveRename index={indexElement} btnRename={true} />
				<BtnRemoveRename index={indexElement} btnRename={false} />
			</div>
		</li>
	)
}

export default Item
