import { TaskProvider } from "../src/context/TaskContext.jsx"
import Main from "./pages/Main.jsx"

function App() {
  return (
    <TaskProvider>
      <Main />
    </TaskProvider>
  )
}

export default App
