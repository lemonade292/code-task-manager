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
              <img
                src="data:image/png;base64,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"
                alt="sort icon"
              />
            </Button>
            <Button
              onClick={() => setIsAddFormOpen(!isAddFormOpen)}
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
          {handleTaskItems}
        </div>
      </Container>
    </>
  );
};
