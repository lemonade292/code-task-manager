import React, {useEffect} from 'react';
import './App.scss';
import { Container } from './components/shared/Container/Container';
import { getAll } from './api/tasks/getAll';
import { TasksProvider } from './components/tasks/providers/TasksProvider';
import { TasksList } from './components/tasks/TasksList/TasksList';

function App() {

  return (
    <div className="App">
      <TasksProvider>
      <TasksList />
      </TasksProvider>
    </div>
  );
}

export default App;
