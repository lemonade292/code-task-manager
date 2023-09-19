import React, { useState } from "react";
import "./TaskItem.scss";
import { Task, TaskStatus } from "../../../api/tasks/types";
import { useTasksProvider } from "../providers/TasksProvider";

import { Button, ButtonTypes } from "../../shared/Button/Button";
//import { ChangeTaskStatus } from "../../../logos/change_status" ;

interface TaskItemProps {
  task: Task;
}

/**
 * TaskItem renders the task component
 * @param {Task}task Determines the task info to fill
 * @returns {React.FC<TaskItemProps>} TaskItem
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
          <p className="TaskTitle" data-testid="TaskTitle">
            {task.title}
          </p>
          <p className="TaskCreatedDate" data-testid="TaskCreatedDate">
            {task.createdAt.fmt("DD/MM/YYYY")}
          </p>
        </div>
        <div>
          <p className="TaskDueDate" data-testid="TaskDueDate">
            <span>Due Date: </span>
            {task.deadline.fmt("DD/MM/YYYY")}
          </p>

          <Button
            onClick={() => handleDeleteTask(task.ID)}
            type={ButtonTypes.Secondary}
          >
            <img
              className="TaskDropdownImg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAY1BMVEX///8AAADg4OBKSkr09PQpKSmDg4Onp6f6+vp1dXWurq55eXnMzMyAgICMjIxvb2/r6+u9vb3T09OSkpKamppeXl4gICCgoKBWVlY2NjYwMDBjY2O1tbUUFBQODg7GxsZAQEAu4S/hAAACf0lEQVRoge2b7XbiIBCGQ5JVkqiJ5ru1rfd/ld2jhiEYnSHA7unuvD/B4WmDAzi8iSIWy5BMX0sG4qab5NdrJZs0BDgWFMX+wbIjkTv/TzwngYXIvZP3RPLeOzkjkjMmM9mRnEfSlJZzYcmPYrJfFURysR6RNm2yINgwxoXeUfV2S8FtQ9g+d8TssdUOA1eBwEJUCPkQjHxAyG/ByG8ImXbyWKMOIb8HI78j5K9g5C+ErK0YfkVYYbYhprrb4uDf59vYv0L9+mD9WJ2LsnH/dRY3ZXG2iqhumdU7gvtbRmG7lCb5cU/DoxP4eB/lg55T22kBGF3yUKqDCmkZuQq2DYsH9SA4ZGCbBShRMS5fMigyJExmMpl8qve92Rr3+/oUmCxvR5Z61lhf2woz9/2Sp7NSo7U19zbzvOOVfJraP2GJqT6nRuOBeyXXqgN2oLNqm8+BX/JGdcBSrBZ5sWEyk5nMZCYzmclMZjKTmcxkJjOZyUz+b8h/r0KzW+gAgHGt7rcSN9Xc9Qc7TYFZP/dLrtprczarNN4Kg61pYvBdcT2WQ2G6FXbFUD5etvw7VWYmM9mdPKgY1BDxQmDTGMgx4K9o8A8/VaNGoTu3wDzUOpBbNUqNf/iuo4ox7yYsdIJB6JfJKQTRp8gUfFmEhav7AlGYueqZNLvXxSIMzhk2k6Sr1kagX3xHkdTixGCf1PGgD2B1ca//yUKUefxga32uOC9n0XaZSfTGU2Trn/dngURNj6ZqfEySVqyCfixqayyvkurYfqVsnSHF3fu5dhlytiM67LHS5d8+uFnw0n7EGQsaew8v/1R90V6Qt4x0Xdqsd/EbzYW9WfUn3rJi/Uh9A22uKcRFR+1zAAAAAElFTkSuQmCC"
              alt="delete button"
            />
          </Button>
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type={ButtonTypes.Secondary}
          >
            <img
              className={
                isDropdownOpen ? "TaskDropdownImg rotated" : "TaskDropdownImg"
              }
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

          <textarea
            placeholder="What is the task about?"
            rows={4}
            value={task.description}
          />

          <input
            placeholder="When is the deadline? (Format DD/MM/YYYY)"
            type="text"
            value={task.deadline.fmt("DD/MM/YYYY")}
          />
          <Button type={ButtonTypes.Submit} onClick={() => {}}>
            Edit Task
          </Button>
        </form>
      </div>
    </div>
  );
};
