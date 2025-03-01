import { useReducer, useEffect } from "react";

const initialState = {
  tasks: [],
  filter: "all",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [{ id: Date.now(), text: action.payload.text, description: action.payload.description, completed: false }, ...state.tasks] };
    case "TOGGLE_TASK":
      return { ...state, tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task) };
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export function useTaskReducer() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch({ type: "SET_TASKS", payload: JSON.parse(savedTasks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return { state, dispatch };
}
