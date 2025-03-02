# SKYEYSTUDIO-TODO-APP

A simple todo application built with **React** and **Javascript**. This project was developed as a task for **Skyeystudio** and demonstrates the use of state management, local storage persistence, and dynamic filtering.

## 🚀 Features

- ✅ **Add new tasks** with a name and description  
- ❌ **Delete tasks** when no longer needed  
- 🔄 **Mark tasks as completed**  
- 🔍 **Filter tasks** by status: All, Active, and Completed  
- 💾 **Persistent storage** using LocalStorage  
- ⚡ **State management** using Context API  

## 🛠️ Technologies Used

- React (with Vite)
- Context API
- LocalStorage
- useReducer
- TailwindCSS 

## 📂 Project Structure

📦 src/
├── 📂 components/       # Reusable UI components
│   ├── 📜 TaskItem.jsx  # Single task component
│   ├── 📜 TaskList.jsx  # Displays list of tasks
│   ├── 📜 TaskFilters.jsx  # Filter buttons (All, Active, Completed)
│   ├── 📜 TaskForm.jsx  # Input form for adding tasks
│   └── 📜 EmptyTaskList.jsx   # Shows empty task list if there are no tasks
│
├── 📂 context/          # Global state management
│   ├── 📜 TaskContext.jsx  # Context provider & custom hooks
│
├── 📂 reducers/         # State logic (reducers)
│   ├── 📜 taskReducer.js  # Reducer function
│
├── 📂 pages/            # Page components
│   ├── 📜 Main.jsx      # Main  page displaying tasks
│ 