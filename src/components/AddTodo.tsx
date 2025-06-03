import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/todo"

type AddTodoProps = {
    addTodo: (t: Todo) => void;
}

export const AddTodo = ({ addTodo }: AddTodoProps) => {
    const [todo, setTodo] = useState<Todo>(new Todo(0, "", false, "", new Date()))
    const nextId = useRef(5); 

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setTodo({ ...todo, [id]: value });
      };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();


    const newTodo = new Todo(
        nextId.current,
        todo.name,
        todo.done,
        todo.priority,
        new Date()
      );

    addTodo(newTodo);
    nextId.current += 1; 
    setTodo(new Todo(0, "", false, "", new Date()));
    }

    return <>
    <form onSubmit={handleSubmit} className="flex items-end gap-4 mt-20">
        <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-left">New Todo:</label>
            <input
            id="name"
            type="text"
            value={todo.name}
            onChange={handleChange}
            className="bg-lightgray h-8 px-2 border rounded color-black"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="priority" className="mb-1 text-left">Prio:</label>
            <select
            id="priority"
            value={todo.priority}
            onChange={handleChange}
            className="h-8 px-2 border rounded"
            >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="middle">Middle</option>
            <option value="high">High</option>
            </select>
        </div>

        <button className="bg-green-500 text-white h-8 px-4 rounded flex items-center justify-center">Add todo</button>
    </form>
</>
}