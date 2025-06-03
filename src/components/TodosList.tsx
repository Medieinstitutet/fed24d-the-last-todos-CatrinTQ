import { useState } from "react";
import { Todo } from "../models/todo";
import { TodoPresentation } from "./TodoPresentation";

type TodosListProps = {
  todos: Todo[];
  changeTodoStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodosList = ({
  todos,
  changeTodoStatus,
  deleteTodo,
}: TodosListProps) => {
  const [sortBy, setSortBy] = useState("");

  const getSortedTodos = (sortBy: string) => {
    const sorted = [...todos];

    if (sortBy === "date") {
      return sorted.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    }

    if (sortBy === "priority") {
      type Priority = "high" | "middle" | "low";

      const priorityOrder: Record<Priority, number> = {
        high: 1,
        middle: 2,
        low: 3,
      };

      return sorted.sort(
        (a, b) =>
          priorityOrder[a.priority as Priority] -
          priorityOrder[b.priority as Priority]
      );
    }

    return sorted;
  };

  return (
    <div className="flex flex-col gap-8 p-6 max-w-xl mx-auto mt-20">
      <section>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">To do:</h2>
          <select
            id="sort"
            className="h-8 px-2 border rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort:</option>
            <option value="date">Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <ul className="space-y-4">
          {getSortedTodos(sortBy)
            .filter((t) => !t.done)
            .map((t) => (
              <TodoPresentation
                key={t.id}
                todo={t}
                changeTodoStatus={changeTodoStatus}
                deleteTodo={deleteTodo}
              />
            ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-left">Done:</h2>
        <ul className="space-y-4">
          {todos
            .filter((t) => t.done)
            .map((t) => (
              <TodoPresentation
                key={t.id}
                todo={t}
                changeTodoStatus={changeTodoStatus}
                deleteTodo={deleteTodo}
              />
            ))}
        </ul>
      </section>
    </div>
  );
};
