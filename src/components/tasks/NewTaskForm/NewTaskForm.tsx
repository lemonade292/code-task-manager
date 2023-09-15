import React from "react";
import "./NewTaskForm.scss";
import { Container } from "../../shared/Container/Container";
import { useTasksProvider } from "../providers/TasksProvider";
import { Task } from "../../../api/tasks/types";
import { dateFormatter } from "../utils/dateFormatter";

interface NewTaskFormProps {}

export const NewTaskForm: React.FC<NewTaskFormProps> = () => {
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

  return (
    <Container>
      <form
        className="NewTaskForm"
        data-testid="NewTaskForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateTask();
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

        <input
          placeholder="What is the task about?"
          type="text"
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
        />

        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
