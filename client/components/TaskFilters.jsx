import { useTaskContext } from "../context/TaskContext.jsx"

export default function TaskFilters() {
    const { filter, setFilter, tasks } = useTaskContext()

    const allCount = tasks?.length
    const activeCount = tasks?.filter((task) => !task.completed).length
    const completedCount = tasks?.filter((task) => task.completed).length

    return (
        <div className="mb-6">
            <div className="flex space-x-2">
                <button
                    onClick={() => setFilter("all")}
                    className={`flex-1 py-1 px-3 text-sm rounded-md transition-colors cursor-pointer ${filter === "all"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                >
                    All ({allCount})
                </button>
                <button
                    onClick={() => setFilter("active")}
                    className={`flex-1 py-1 px-3 text-sm rounded-md transition-colors cursor-pointer ${filter === "active"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                >
                    Active  ({activeCount})
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={`flex-1 py-1 px-3 text-sm rounded-md transition-colors cursor-pointer ${filter === "completed"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                >
                    Completed  ({completedCount})
                </button>
            </div>
        </div>
    )
}

