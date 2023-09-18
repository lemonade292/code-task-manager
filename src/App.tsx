import React from "react";
import "./App.scss";
import { TasksProvider } from "./components/tasks/providers/TasksProvider";
import { TasksList } from "./components/tasks/TasksList/TasksList";
import { Overview } from "./components/overview/Overview";

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <Overview/>
        <TasksList />       
      </TasksProvider>
    </div>
  );
}

export default App;
