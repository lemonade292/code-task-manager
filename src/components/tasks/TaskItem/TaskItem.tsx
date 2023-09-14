import React from 'react';
import './TaskItem.scss';
import { Task } from '../../../api/tasks/types';

interface TaskItemProps {
    task: Task;
}

/**
 * TODO: doc
 * @param param0 
 * @returns 
 */
export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
    return <div className='TaskItem' data-testid="TaskItem">{task.title}</div>
}