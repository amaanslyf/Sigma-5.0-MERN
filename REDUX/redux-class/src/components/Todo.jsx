import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice'; // Import the deleteTodo action
import { marksAsDone } from '../features/todo/todoSlice'; // Import the markAsDone action
export default function Todo() {
    const todos = useSelector((state) => state.todos); // Access the todos from the Redux store
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const clickHandler = (id) => {
        dispatch(deleteTodo(id)); // Dispatch the deleteTodo action with the id of the todo to be deleted
    }

    const doneHandler = (id) => {
        dispatch(marksAsDone(id)); // Dispatch the markAsDone action with the id of the todo to be marked as done
    };
    return (
        <div>
            <AddForm />
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => doneHandler(todo.id)}>Mark as Done</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}
