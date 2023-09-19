import React from "react";
import "./App.scss";
import { TasksProvider } from "./components/tasks/providers/TasksProvider";
import { TasksList } from "./components/tasks/TasksList/TasksList";
import { Overview } from "./components/overview/Overview";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <ToastContainer />
      <TasksProvider>
        <Overview />
        <TasksList />
      </TasksProvider>
    </div>
  );
}

export default App;
