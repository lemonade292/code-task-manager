import React, { useState } from "react";
import "./TaskItem.scss";
import { Task, TaskStatus } from "../../../api/tasks/types";
import { useTasksProvider } from "../providers/TasksProvider";

import { DeleteTaskButton } from "../../../logos/delete_button";
import { Button, ButtonTypes } from "../../shared/Button/Button";
//import { ChangeTaskStatus } from "../../../logos/change_status" ;

interface TaskItemProps {
  task: Task;
}

/**
 * TODO: doc
 * @param param0
 * @returns
 */

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { handleDeleteTask, handleUpdateTaskStatus } = useTasksProvider();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  

  return (
    <div className="TaskItem" data-testid="TaskItem">
      <div className="TaskOverview" data-testid="TaskOverview">
        <div>
          
          <div
            className={"TaskStatus " + task.status}
            data-testid="TaskStatus"
            onClick={() => handleUpdateTaskStatus(task.ID, TaskStatus.Ongoing)}
          ></div>
          {/* <Button
            onClick={() => handleUpdateTaskStatus(task.ID, TaskStatus.Ongoing)}
            type={ButtonTypes.Secondary}
          >
            <img
              src="https://cdn.icon-icons.com/icons2/3402/PNG/512/change_status_icon_215496.png"
              alt="change status"
            />
          </Button> */}
          <p className="TaskTitle" data-testid="TaskTitle">
            {task.title}
          </p>
          <p className="TaskCreatedDate" data-testid="TaskCreatedDate">
            {task.createdAt.fmt("DD/MM/YYYY")}
          </p>
        </div>
        <div>
          <p className="TaskDueDate" data-testid="TaskDueDate">
            <span>Due Date: </span>{task.deadline.fmt("DD/MM/YYYY")}
          </p>
          

          <Button
            onClick={() => handleDeleteTask(task.ID)}
            type={ButtonTypes.Secondary}
          >
            <DeleteTaskButton />
          </Button>
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type={ButtonTypes.Secondary}
          >
            <img className={isDropdownOpen ? "TaskDropdownImg rotated" : "TaskDropdownImg"}
              src="https://static.thenounproject.com/png/1123247-200.png"
              alt="circled-chevron-down"
            />
          </Button>
        </div>
      </div>
      <div
        className={isDropdownOpen ? "TaskContent SelectedTask" : "TaskContent"}
        data-testid="TaskContent"
      >
        <p className="TaskTitle" data-testid="TaskTitle">
          Task Information
        </p>
        <form
          className="NewTaskForm"
          data-testid="NewTaskForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input placeholder="Add a new title" type="text" value={task.title} />

          <input
            placeholder="What is the task about?"
            type="text"
            value={task.description}
          />

          <input
            placeholder="When is the deadline? (Format DD/MM/YYYY)"
            type="text"
            value={task.deadline.fmt("DD/MM/YYYY")}
          />

          <button type="submit">Edit Task</button>
        </form>
      </div>
    </div>
  );
};
