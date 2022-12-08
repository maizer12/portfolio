import { useEffect } from 'react'
import ToDo from './components/ToDo'
import { AppDispatch, AppSelector } from './redux/hook'
import './style/style.scss'
import { getElements } from './redux/toDo/slice'

function App() {
	const items = AppSelector(stat => stat.ToDo.listItems)
	const dispatch = AppDispatch()
	useEffect(() => {
		dispatch(getElements())
	}, [])
	useEffect(() => {
		if (items.length >= 1) {
			localStorage.setItem('itemsLocal', JSON.stringify(items))
		}
	}, [items])
	return (
		<div className='App'>
			<ToDo />
		</div>
	)
}

export default App
