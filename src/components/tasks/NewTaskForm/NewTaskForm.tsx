import React, { useEffect } from "react";
import "./NewTaskForm.scss";
import { Container } from "../../shared/Container/Container";
import { useTasksProvider } from "../providers/TasksProvider";
import { Task } from "../../../api/tasks/types";
import { dateFormatter } from "../utils/dateFormatter";

interface NewTaskFormProps {
  setisAddFormOpen:(bol: boolean)=> void
}

export const NewTaskForm: React.FC<NewTaskFormProps> = ({setisAddFormOpen}) => {
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
    setTitle('')      
      setDescription('')      
      setDeadline('')
  }, []);

  return (
    <div className="AddFormOverlay" onClick={()=>setisAddFormOpen(false)}>   
    <div onClick={(e)=> e.stopPropagation()
    }>
    <Container>
      <form
        className="NewTaskForm"
        data-testid="NewTaskForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateTask();
          setisAddFormOpen(false);
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
        />

        <button type="submit" disabled={!title.length|| !description.length || !deadline.length}>Submit</button>
      </form>
    </Container>
    </div>
    </div>
  );
};
