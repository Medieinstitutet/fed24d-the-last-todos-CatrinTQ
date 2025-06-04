import { useState } from "react";
import { TodosList } from "./TodosList";
import { Todo } from "../models/todo";
import { AddTodo } from "./AddTodo";
import { DarkModeToggle } from "./DarkModeToggle";

export const TodosApp = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    if (!stored)
      return [
        new Todo(999, "Koka kaffe", false, "high", new Date("2025-06-02")),
        new Todo(998, "Äta frukost", false, "middle", new Date("2025-06-02")),
        new Todo(997, "Koda", false, "low", new Date("2025-06-03")),
        new Todo(996, "Gå ut med Frost", false, "high", new Date("2025-06-03")),
      ];

    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed)
        ? parsed.map(
            (t: Todo) =>
              new Todo(t.id, t.name, t.done, t.priority, new Date(t.created))
          )
        : [];
    } catch (err) {
      console.error("Fel vid hämtning av todos från localStorage:", err);
      return [];
    }
  });

  const [nextId, setNextId] = useState(() => {
    const stored = localStorage.getItem("nextId");
    return stored ? JSON.parse(stored) : 1;
  });
  
  const handleNextId = () => {
    const updated = nextId + 1;
    setNextId(updated);
    localStorage.setItem("nextId", JSON.stringify(updated));
  };

  const [sortBy, setsortBy] = useState(() => {
    const storedPreferance = localStorage.getItem("sortBy");
    return storedPreferance ? JSON.parse(storedPreferance) : "";
  });

  const getSortBy = (preference: string) => {
    setsortBy(preference);
    localStorage.setItem("sortBy", JSON.stringify(preference))
  };

  const getSortedTodos = (sortBy: string) => {
    const sorted = [...todos];

    if (sortBy === "date") {
      return sorted.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    }

    if (sortBy === "priority") {
      type Priority = "high" | "middle" | "low" | "";

      const priorityOrder: Record<Priority, number> = {
        high: 1,
        middle: 2,
        low: 3,
        "": 4,
      };

      return sorted.sort(
        (a, b) =>
          priorityOrder[a.priority as Priority] -
          priorityOrder[b.priority as Priority]
      );
    }

    return sorted;
  };

  const handleTodoStatus = (id: number): void => {
    setTodos(
      todos.map((t) => {
        if (t.id === id && t.done === false) {
          return { ...t, done: true };
        }
        if (t.id === id && t.done === true) {
          return { ...t, done: false };
        }
        return t;
      })
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <DarkModeToggle />
      <AddTodo addTodo={addTodo} nextId={nextId} handleNextId={handleNextId}/>
      <TodosList
        todos={todos}
        sortBy={sortBy}
        getSortBy={getSortBy}
        getSortedTodos={getSortedTodos}
        changeTodoStatus={handleTodoStatus}
        deleteTodo={deleteTodo}
      />
    </>
  );
};
