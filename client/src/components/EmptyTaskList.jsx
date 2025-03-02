export default function EmptyTaskList() {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 dark:text-gray-400">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-4 opacity-20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            </svg>
            <p className="text-center">No tasks found</p>
            <p className="text-sm text-center mt-1">Add some tasks to get started</p>
        </div>
    )
}
