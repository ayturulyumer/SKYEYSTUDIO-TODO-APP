import { createContext, useContext } from "react"
import { useTaskReducer } from "../reducers/useTaskReducer.jsx"


const TaskContext = createContext()

export function TaskProvider({ children }) {
    const { state, dispatch } = useTaskReducer()

    // Filter tasks based on current filter
    const filteredTasks = state.tasks.filter((task) => {
        if (state.filter === "active") return !task.completed
        if (state.filter === "completed") return task.completed
        return true
    })

    const addTask = (text, description) => {
        if (text.trim()) {
            dispatch({ type: "ADD_TASK", payload: { text, description } })
        }
    }

    const toggleTask = (id) => {
        dispatch({ type: "TOGGLE_TASK", payload: id })
    }

    const deleteTask = (id) => {
        dispatch({ type: "DELETE_TASK", payload: id })
    }

    const setFilter = (filter) => {
        dispatch({ type: "SET_FILTER", payload: filter })
    }


    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                filteredTasks,
                filter: state.filter,
                addTask,
                toggleTask,
                deleteTask,
                setFilter,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export function useTaskContext() {
    const context = useContext(TaskContext)
    if (!context) throw new Error("useTaskContext must be used within a TaskProvider");
    return context;
}

