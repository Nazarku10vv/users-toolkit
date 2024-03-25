import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todo: JSON.parse(localStorage.getItem('todo')) || []
}

export const counterSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask(state, action) {
			state.todo = [...state.todo, action.payload]
			localStorage.setItem('todo', JSON.stringify(state.todo))
		},
		removeTask(state, action) {
			state.todo = state.todo.filter(task => task.id !== action.payload)
			localStorage.setItem('todo', JSON.stringify(state.todo))
		}
	}
})

export const { addTask, removeTask } = counterSlice.actions
export default counterSlice.reducer
