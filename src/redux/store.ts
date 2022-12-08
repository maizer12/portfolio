import { configureStore } from '@reduxjs/toolkit'
import ToDo from './toDo/slice'

export const store = configureStore({
	reducer: {
		ToDo
	},
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
