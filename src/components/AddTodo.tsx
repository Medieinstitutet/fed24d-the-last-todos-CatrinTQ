import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/todo";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
  nextId: number;
  handleNextId: () => void;
};

export const AddTodo = ({ addTodo, nextId, handleNextId }: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(
    new Todo(0, "", false, "", new Date())
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setTodo({ ...todo, [id]: value });
  };

  const [message, setMessage] = useState("");

  const isInputValid = () => {
    if (todo.name === "") {
      setMessage("Write something");
    } else {
      setMessage("");
      return;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTodo = new Todo(
      nextId,
      todo.name,
      todo.done,
      todo.priority,
      new Date()
    );

    if (todo.name !== "") {
      addTodo(newTodo);
      handleNextId();
      setTodo(new Todo(0, "", false, "", new Date()));
      isInputValid();
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex items-end gap-4 mt-20">
        <div className="flex flex-col relative">
          <label htmlFor="name" className="mb-1 text-left">
            New Todo:
          </label>
          <input
            id="name"
            type="text"
            value={todo.name}
            onChange={handleChange}
            className="bg-lightgray h-8 px-2 border rounded color-black"
          />
          {message && (
            <p className="absolute top-full mt-1 text-red-500 text-sm left-0">
              {message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="priority" className="mb-1 text-left">
            Prio:
          </label>
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

        <button
          onClick={isInputValid}
          className="bg-green-500 text-white h-8 flex items-center justify-center rounded-lg border border-white px-5 py-2 text-base font-medium cursor-pointer transition-colors duration-200 hover:scale-110 hover:underline"
        >
          Add todo
        </button>
      </form>
    </div>
  );
};
