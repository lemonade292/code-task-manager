import React from 'react';
import './TasksList.scss'

/* Providers */
import {useTasksProvider} from '../providers/TasksProvider';
import { Task } from '../../../api/tasks/types';
import { Container } from '../../shared/Container/Container';
import { TaskItem } from '../TaskItem/TaskItem';
 
interface TasksListProps {};

export const TasksList: React.FC<TasksListProps> = () => {
    const {tasks} = useTasksProvider();

    return <div className='TasksList' data-testid="TasksList">
        {tasks.map((task: Task) => <TaskItem key={task.ID} task={task} />)}
    </div>
}