import React, { useMemo, useState } from "react";
import "./TasksList.scss";

/* Providers */
import { useTasksProvider } from "../providers/TasksProvider";
import { Task, TaskStatus } from "../../../api/tasks/types";
import { Container } from "../../shared/Container/Container";
import { TaskItem } from "../TaskItem/TaskItem";
import { LoadingDisplayer } from "../../shared/LoadingDisplayer/LoadingDisplayer";
import { Button, ButtonTypes } from "../../shared/Button/Button";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { filteredTasks } from "./TaskListUtils";

interface TasksListProps {}

export const TasksList: React.FC<TasksListProps> = () => {
  const {
    tasks,
    states: { loading },
    statusFilter,
  } = useTasksProvider();
  const [isAddFormOpen, setisAddFormOpen] = useState<boolean>(false);

  return (
    <>
      {loading && <LoadingDisplayer />}
      {isAddFormOpen && <NewTaskForm setisAddFormOpen={setisAddFormOpen}  />}
      <Container>
        <div className="TaskListHeader" data-testid="TaskListHeader">
          <div>
            <h2 className="TaskListTitle" data-testid="TaskListTitle">
              Tasklist
            </h2>
          </div>

          <div>
            <Button
              onClick={() => setisAddFormOpen(!isAddFormOpen)}
              type={ButtonTypes.Secondary}
            >
              <img
                src="https://www.svgrepo.com/show/42091/add-button.svg"
                alt="add icon"
              />
            </Button>
          </div>
        </div>
        <div className="TasksList" data-testid="TasksList">
          {filteredTasks(statusFilter, tasks).map((task: Task) => (
            <TaskItem key={task.ID} task={task} />
          ))}
        </div>
      </Container>
    </>
  );
};
