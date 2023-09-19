import { Task, TaskStatus } from "../../../api/tasks/types";
/**
 * Returns the tasklist filtered by status
 * @param {TaskStatus}statusFilter Determines the status of the task
 * @param {Task}tasks Determines the info of the task
 * @returns {tasks}
 */
export const filterTasks = (
  statusFilter: TaskStatus | undefined,
  tasks: Task[]
) => {
  if (statusFilter) {
    return tasks.filter((task) => task.status === statusFilter);
  }
  return tasks;
};

export const sortTasks = (sorter: "deadline" | undefined, tasks: Task[]) => {
  if (sorter) {
    const copy = [...tasks];

    return copy.sort((taskA, taskB) => {
      if (taskA[sorter].unfmt() < taskB[sorter].unfmt()) {
        return -1;
      } else if (taskA[sorter].unfmt() > taskB[sorter].unfmt()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return tasks;
};
