import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 'abc', task: 'Learn Redux', isDone: false }]  // Initial state with a sample todo
}

export const todoSlice = createSlice({  // Create a slice of the Redux store with name 'todo' 
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),    //nanoid generates a unique ID
                task: action.payload, // The task is taken from the action payload
                isDone: false
            };
            state.todos.push(newTodo);  // Add the new todo to the state, here no need of spread operator due to redux toolkit
                                       // Fixed: Now pushing the complete newTodo object instead of just action.payload
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);  // Filter out the todo with the id that matches the action payload
        },
        marksAsDone: (state, action) => {
            state.todos = state.todos.map(todo => {  // Map through the todos to find the one that matches the action payload
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };  // Return a new object with isDone set to true
                }
                return todo;  // Important: Return unchanged todo for non-matching cases
            });
        }
    }
})

export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions; // Export the actions to be used in components
export default todoSlice.reducer;  // Export the reducer to be used in the store configuration

// This file defines the todo slice of the Redux store, including actions and initial state for managing todos.
// It uses Redux Toolkit's createSlice to simplify the creation of actions and reducers.