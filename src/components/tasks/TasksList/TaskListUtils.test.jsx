
import { TaskStatus } from '../../../api/tasks/types';
import { filteredTasks } from './TaskListUtils';


describe('filteredTasks', () => {
  //mock tasks
  const tasks = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: TaskStatus.NotStarted,
      created_at: '2023-09-18T10:00:00Z',
      deadline: '2023-09-19T10:00:00Z',
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'Description 2',
        status: TaskStatus.Ongoing,
        created_at: '2023-09-18T10:00:00Z',
        deadline: '2023-09-19T10:00:00Z',
      },
  ];

  it('should return all tasks when statusFilter is undefined', () => {
    const result = filteredTasks(undefined, tasks);
    expect(result).toEqual(tasks);
  });

  it('should filter tasks by status when statusFilter is provided', () => {
    const result = filteredTasks(TaskStatus.NotStarted, tasks);
    expect(result).toEqual([tasks[0]]); // Only the task with status NotStarted should be returned
  });

  it('should return an empty array when no matching tasks are found', () => {
    const result = filteredTasks(TaskStatus.Completed, tasks);
    expect(result).toEqual([]); // No tasks have status Completed
  });


});