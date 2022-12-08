import { createSlice } from '@reduxjs/toolkit'
import { IItem, IToDoSliceState } from './types'

const initialState: IToDoSliceState = {
	listItems: [],
	userWrite: '',
}

const toDoSlice = createSlice({
	name: 'toDo',
	initialState,
	reducers: {
		setCreateElement: state => {
			if (state.userWrite.length >= 2) {
				state.listItems = [
					...state.listItems,
					{ text: state.userWrite, finished: false },
				]
				state.userWrite = ''
			} else {
				alert('The field is empty!')
			}
		},
		setUserWrite: (state, action) => {
			state.userWrite = action.payload
		},
		setRemoveElement: (state, action) => {
			state.listItems = state.listItems.filter((e, i) => i !== action.payload)
		},
		setRenameElement: (state, action) => {
			state.userWrite = state.listItems[action.payload].text
		},
		setFinished: (state, action) => {
			state.listItems = action.payload
		},
		getElements: state => {
			const key = 'itemsLocal'
			const dataItems: IItem[] = JSON.parse(localStorage.getItem(key) || '')
			state.listItems = dataItems
		},
	},
})

export const {
	setCreateElement,
	setUserWrite,
	setRemoveElement,
	setRenameElement,
	setFinished,
	getElements,
} = toDoSlice.actions

export default toDoSlice.reducer
