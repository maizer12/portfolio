import React from 'react'
import Items from '../Items'
import ListHeader from '../ListHeader'
import ButtonCreate from '../UI/Buttons/ButtonCreate'
import InputCreate from '../UI/Inputs/InputCreate'
import './ToDo.Module.scss'
const ToDo = () => {
	return (
		<section className='to-do'>
			<ListHeader />
			<div className='to-do__inner'>
				<div className='to-do__create'>
					<InputCreate />
					<ButtonCreate />
				</div>
				<Items />
			</div>
		</section>
	)
}

export default ToDo
