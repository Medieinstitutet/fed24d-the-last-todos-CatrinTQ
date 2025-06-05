import { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

type TodosListProps = {
  todos: Todo[];
  sortBy: string;
  getSortBy: (pref: string) => void;
  getSortedTodos: (name: string) => Todo[];
  changeTodoStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodosList = ({
  todos,
  sortBy,
  getSortBy,
  getSortedTodos,
  changeTodoStatus,
  deleteTodo,
}: TodosListProps) => {

  return (
    <div className="flex flex-col gap-8 p-6 max-w-xl mx-auto mt-20">
      <section>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">To do:</h2>
          <select
            id="sort"
            className="h-8 px-2 border rounded"
            value={sortBy}
            onChange={(e) => getSortBy(e.target.value)}
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
