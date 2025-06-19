import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importing uuid for unique IDs
export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]); // Initializing todos with a sample task and a unique ID
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]; // Create a new todo object with the current newTodo value, a unique ID, and isDone set to false
        }); // Spread operator to add the new task to the existing todos array
        setNewTodo(""); // Clear the input field after adding the task

    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);  // Update the newTodo state with the value from the input field where event is the change event
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) =>
            todos.filter((prevTodos) => prevTodos.id !== id)); // Filter out the todo item with the matching id
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, isDone: true }; // Toggle the isDone property of the todo item with the matching id
                } else {
                    return todo; // Return the todo item unchanged if the id does not match
                }
            }));
    };


    return (
        <div>
            <input placeholder="Add Task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo) => (  //map through the todos array to display each todo item
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;

                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}