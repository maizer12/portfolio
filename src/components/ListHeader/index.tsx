import React from 'react'
import { AppSelector } from '../../redux/hook'
import './ListHeader.Module.scss'
const ListHeader = () => {
	const listItems = AppSelector(state => state.ToDo.listItems)
	return (
		<div className='list-header'>
			<h4 className='list-header__title'>Todos ({listItems.length})</h4>
		</div>
	)
}

export default ListHeader
