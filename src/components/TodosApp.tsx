import { useState } from "react"
import { TodosList } from "./TodosList"
import { Todo } from "../models/todo";
import { AddTodo } from "./AddTodo";

export const TodosApp = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem("todos");
        if (!stored) return [
            new Todo(1, "Koka kaffe", false, "high", new Date("2025-06-02")),
            new Todo(2, "Äta frukost", false, "middle", new Date("2025-06-02")),
            new Todo(3, "Koda", false, "low", new Date("2025-06-03")),
            new Todo(4, "Gå ut med Frost", false, "high", new Date("2025-06-03"))
        ];
      
        try {
          const parsed = JSON.parse(stored);
          return Array.isArray(parsed)
            ? parsed.map((t: Todo) =>
                new Todo(t.id, t.name, t.done, t.priority, new Date(t.created))
              )
            : [];
        } catch (err) {
          console.error("Fel vid hämtning av todos från localStorage:", err);
          return [
          ]
        }
      });
      
    const handleTodoStatus = (id: number): void => {
        setTodos(
            todos.map((t) => {
                if (t.id === id && t.done === false) {
                    return { ...t, done: true}
                }
                if (t.id === id && t.done === true) {
                    return { ...t, done: false}
                }
                return t;
            })
        )
    };

    const deleteTodo = (id:number): void => {
        setTodos(todos.filter((t) => t.id !== id));

    }

    const addTodo = (t: Todo) => {
        setTodos([...todos, t]);

    }

    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(localStorage.getItem("todos"));

    return <>
        <AddTodo addTodo={addTodo} />
        <TodosList todos={todos} changeTodoStatus={handleTodoStatus} deleteTodo={deleteTodo}/>
    </>
}