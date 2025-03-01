import TaskForm from "../components/TaskForm.jsx";

export default function Main() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Todo App</h1>
                    <TaskForm />
                </div>
            </div>
        </div>
    )
}
