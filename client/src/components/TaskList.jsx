import { useTaskContext } from "../context/TaskContext.jsx"
import TaskItem from "./TaskItem.jsx"
import EmptyTaskList from "./EmptyTaskList.jsx"

export default function TaskList() {
    const { filteredTasks } = useTaskContext()

    if (filteredTasks.length === 0) {
        return (
            <EmptyTaskList />
        )
    }

    
    return (
        <ul className="space-y-2">
            {filteredTasks.map((task) => (
                <li key={task.id}>
                    <TaskItem task={task} />
                </li>
            ))}
        </ul>
    )
}

