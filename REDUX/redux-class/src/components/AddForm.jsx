import { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch to dispatch actions
import { addTodo } from "../features/todo/todoSlice"; // Import the addTodo action from the todo slice
export default function AddForm() {
    const [task, setTask] = useState(''); // Local state to hold the new todo task
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(task); // Log the task to the console for debugging
        dispatch(addTodo(task)); // Dispatch the addTodo action with the new task
        setTask(''); // Clear the input field after submission
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setTask(e.target.value)} ></input>
                <button>Add Todo</button>
            </form>
            
        </>
    )
}