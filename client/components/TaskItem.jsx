

import { useTaskContext } from "../context/TaskContext.jsx"

export default function TaskItem({ task }) {
    const { toggleTask, deleteTask } = useTaskContext()

    return (
        <div className="p-4 hover:bg-gray-50 rounded-2xl dark:hover:bg-black/50   transition-colors duration-150">
      <div className="flex items-start">
        <button
          onClick={() => toggleTask(task.id)}
          className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 cursor-pointer ${
            task.completed ? "bg-green-500 border-green-500" : "border-gray-300 dark:border-gray-500"
          }`}
        >
          {task.completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>
        <div className="ml-3 flex-grow">
          <h3
            className={`font-semibold text-lg ${
              task.completed ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {task.text}
          </h3>
          {task.description && (
            <p
              className={`text-sm mt-1 ${
                task.completed ? "text-gray-400 dark:text-gray-500" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {task.description}
            </p>
          )}
        </div>
        <button
          onClick={() => deleteTask(task.id)}
          className="ml-2 p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors duration-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
          <span className="sr-only">Delete task</span>
        </button>
      </div>
    </div>
  )
}

