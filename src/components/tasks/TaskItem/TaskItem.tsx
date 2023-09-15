import React from "react";
import "./TaskItem.scss";
import { Task, TaskStatus } from "../../../api/tasks/types";
import { useTasksProvider } from "../providers/TasksProvider";

interface TaskItemProps {
  task: Task;
}

/**
 * TODO: doc
 * @param param0
 * @returns
 */
export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { handleDeleteTask,handleUpdateTaskStatus } = useTasksProvider();

  return (
    <div className="TaskItem" data-testid="TaskItem">
      <span>{task.title}</span>
      <span onClick={() => handleUpdateTaskStatus(task.ID, TaskStatus.Ongoing)}>MOVE TO</span>
      <span onClick={() => handleDeleteTask(task.ID)}>X</span>
    </div>
  );
};
