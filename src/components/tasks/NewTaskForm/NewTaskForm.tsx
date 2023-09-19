import React, { useEffect } from "react";
import "./NewTaskForm.scss";
import { Container } from "../../shared/Container/Container";
import { useTasksProvider } from "../providers/TasksProvider";
import { Task } from "../../../api/tasks/types";
import { dateFormatter } from "../utils/dateFormatter";
import { Button, ButtonTypes } from "../../shared/Button/Button";

interface NewTaskFormProps {
  setIsAddFormOpen: (bool: boolean) => void;
}
/**
 * NewTaskForm renders the overlay with the form used to create a new task
 * @param {Function}setIsAddFormOpen Sets if the overlay and form are displayed or not
 * @returns {React.FC<NewTaskFormProps>} NewTaskForm
 */
export const NewTaskForm: React.FC<NewTaskFormProps> = ({
  setIsAddFormOpen,
}) => {
  const {
    states: {
      title,
      setTitle,
      description,
      setDescription,
      deadline,
      setDeadline,
    },
    handleCreateTask,
  } = useTasksProvider();
  useEffect(() => {
    setTitle("");
    setDescription("");
    setDeadline("");
  }, []);

  return (
    <div className="AddFormOverlay" onClick={() => setIsAddFormOpen(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <Container>
          <form
            className="NewTaskForm"
            data-testid="NewTaskForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateTask();
              setIsAddFormOpen(false);
            }}
          >
            <input
              placeholder="Add a new title"
              type="text"
              onChange={({ target: { value } }) => {
                setTitle(value);
              }}
              value={title}
            />

            <textarea
              placeholder="What is the task about?"
              rows={4}
              onChange={({ target: { value } }) => {
                setDescription(value);
              }}
              value={description}
            />

            <input
              placeholder="When is the deadline? (Format DD/MM/YYYY)"
              type="text"
              onChange={({ target: { value } }) => {
                // TODO: add onkeypress method so you only add numbers;
                setDeadline(dateFormatter(value));
              }}
              value={deadline}
              onBlur={({ target: { value } })  => setDeadline(dateFormatter(value.replace(/[^0-9/]+/g, '')))}
            />
            <Button
              type={ButtonTypes.Submit}
              onClick={() => {}}
              disabled={
                !title.length || !description.length || !deadline.length
              }
            >
              Submit
            </Button>
            {/* <button type="submit" disabled={!title.length|| !description.length || !deadline.length}>Submit</button> */}
          </form>
        </Container>
      </div>
    </div>
  );
};
