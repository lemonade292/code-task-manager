import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import { Task } from "../../../api/tasks/types";
import { useLoading } from "../../shared/LoadingProvider/LoadingProvider";
import { getAll } from "../../../api/tasks/getAll";

interface TasksContent {
  tasks: Task[];
}

const TasksContext = createContext<TasksContent>({ tasks: [] });

/**
 * TODO: add doc
 * @param param0
 * @returns
 */
export const TasksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { setLoading, reloadCount } = useLoading();

  useEffect(() => {
    setLoading(true);
    getAll()
      .then((tasks: Task[]) => {
        setTasks(tasks);
      })
      .catch((e: Error) => {
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [reloadCount]);

  const value = { tasks };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasksProvider = () => useContext(TasksContext);
