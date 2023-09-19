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
import { filterTasks, sortTasks } from "./TaskListUtils";

interface TasksListProps {}
/**
 * TaskList renders the component where all the tasks will be rendered
 * @returns {React.FC<TasksListProps>}
 */
export const TasksList: React.FC<TasksListProps> = () => {
  const {
    tasks,
    states: { loading },
    statusFilter,
  } = useTasksProvider();
  const [isAddFormOpen, setIsAddFormOpen] = useState<boolean>(false);
  const [sorter, setSorter] = useState<"deadline" | undefined>(undefined);

  const handleTaskItems = useMemo(() => {
    return filterTasks(statusFilter, sortTasks(sorter, tasks)).map(
      (task: Task) => <TaskItem key={task.ID} task={task} />
    );
  }, [tasks, statusFilter, sorter]);

  return (
    <>
      {loading && <LoadingDisplayer />}
      {isAddFormOpen && <NewTaskForm setIsAddFormOpen={setIsAddFormOpen} />}
      <Container>
        <div className="TaskListHeader" data-testid="TaskListHeader">
          <div>
            <h2 className="TaskListTitle" data-testid="TaskListTitle">
              Tasklist
            </h2>
          </div>

          <div>
            <Button
              onClick={() => setSorter(sorter ? undefined : "deadline")}
              type={ButtonTypes.Secondary}
            >
              <div className={sorter ? "selected" : "unset"}>
                <img
                  src="https://static.thenounproject.com/png/22384-200.png"
                  alt="sort icon"
                />
              </div>
            </Button>
            <Button
              onClick={() => setIsAddFormOpen(!isAddFormOpen)}
              type={ButtonTypes.Secondary}
            >
              <img
                src="https://static.thenounproject.com/png/953211-200.png"
                alt="add icon"
              />
            </Button>
          </div>
        </div>
        <div className="TasksList" data-testid="TasksList">
          {handleTaskItems}
        </div>
      </Container>
    </>
  );
};
