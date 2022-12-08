import React from 'react';
import { AppSelector } from '../../redux/hook';
import Item from '../Item';

const Items = () => {
	const ListItems = AppSelector(state => state.ToDo.listItems)
	return (
		<ul className='to-do__items'>
			{ListItems.map((e, i) => (
				<Item item={e} indexElement={i} key={i} />
			))}
		</ul>
	)
};

export default Items;