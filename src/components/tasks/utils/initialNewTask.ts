import { Task, TaskStatus } from "../../../api/tasks/types";

/**
 * initialNewTask initializes a new empty task when is about to be created.
 * @returns 
 */
export const initialNewTask = (): Task => {
  return new Task({
    created_at: new Date().toISOString(),
    id: "",
    title: "",
    description: "",
    deadline: new Date().toISOString(),
    status: TaskStatus.NotStarted
  });
};
