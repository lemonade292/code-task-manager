import React from "react";
import "./App.scss";
import { TasksProvider } from "./components/tasks/providers/TasksProvider";
import { TasksList } from "./components/tasks/TasksList/TasksList";
import { NewTaskForm } from "./components/tasks/NewTaskForm/NewTaskForm";

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <TasksList />
        <NewTaskForm />
      </TasksProvider>
    </div>
  );
}

export default App;
