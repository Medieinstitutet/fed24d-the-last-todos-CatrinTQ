import type { Todo } from "../models/Todo"

type TodosListProps = {
    todo: Todo;
    changeTodoStatus: (id: number) => void;
    deleteTodo: (id: number) => void;
};

export const TodoPresentation = ({ todo, changeTodoStatus, deleteTodo }: TodosListProps) => {
    const getBorderClass = (done: boolean, priority: string) => {
        if (done) return "border-green-400";

        switch (priority) {
            case "low":
                return "border-yellow-400";
            case "middle":
                return "border-orange-400";
            case "high":
                return "border-red-500";
            default:
                return "border-gray-300";
        }
    };

    return (
        <li
            className={`grid grid-cols-[1fr_auto] items-center gap-4 p-4 rounded shadow-sm border-2 ${getBorderClass(todo.done, todo.priority)}`}
        >
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => changeTodoStatus(todo.id)}
                    className="accent-green-500 w-5 h-5"
                />
                <p className={`${todo.done ? "line-through text-gray-500" : ""}`}>
                    {todo.name}
                </p>
            </div>

            <button
                className="text-red-500 rounded-lg border border-white px-5 py-2 text-base font-medium bg-transparent cursor-pointer transition-colors duration-200 hover:scale-125 hover:underline"
                onClick={() => deleteTodo(todo.id)}
            >
                X
            </button>
        </li>
    );
};
