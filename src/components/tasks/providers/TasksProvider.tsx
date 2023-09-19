import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

/* Types */
import { Task, TaskStatus } from "../../../api/tasks/types";

/* Services */
import { getAll } from "../../../api/tasks/getAll";
import { create } from "../../../api/tasks/create";
import { deleteTask } from "../../../api/tasks/delete";
import { update } from "../../../api/tasks/update";
import { toast } from "react-toastify";

interface TasksContent {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  handleCreateTask: () => Promise<void>;
  handleDeleteTask: (taskID: string) => Promise<void>;
  handleUpdateTask: (
    task: Task,
    title: string,
    description: string,
    deadline: string
  ) => Promise<void>;
  handleUpdateTaskStatus: (
    taskID: string
  ) => Promise<void>;
  getStatusCount: (status: TaskStatus) => number;
  statusFilter: TaskStatus | undefined;
  setStatusFilter: (statusFilter: TaskStatus | undefined) => void;
  states: {
    loading: boolean;
    setLoading: (load: boolean) => void;
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    deadline: string;
    setDeadline: (deadline: string) => void;
  };
}

const TasksContext = createContext<TasksContent>({} as TasksContent);

/**
 * TODO: add doc
 * @param param0
 * @returns
 */
export const TasksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [reloadCount, setReloadCount] = useState<number>(0);

  const [statusFilter, setStatusFilter] = useState<TaskStatus | undefined>(
    undefined
  );
  const [tasks, setTasks] = useState<Task[]>([]);

  // States for creating a new task.
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");

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

  const handleDeleteTask = async (taskID: string) => {
    setLoading(true);
    deleteTask(taskID)
      .then(() => {
        toast.error('Task deleted!')
      })
      .catch((e: Error) => {
        console.error(e.message);
      })
      .finally(() => {
        setReloadCount(reloadCount + 1);
        setLoading(false);
      });
  };

  const handleUpdateTask = async (
    task: Task,
    title: string,
    description: string,
    deadline: string
  ) => {
    setLoading(true);
    debugger;
    const [deadlineDate, deadlineMonth, deadlineYear] = deadline.split("/");


    const newTask = new Task({
      id: task.ID,
      title,
      description,
      deadline: new Date(
        parseInt(deadlineYear),
        parseInt(deadlineMonth) - 1,
        parseInt(deadlineDate)
      ).toISOString(),
      created_at: task.createdAt.unfmt(),
      status: task.status,
    });

    update(newTask)
      .then(() => {
        toast.success('Task successfully updated !')
      })
      .catch((e: Error) => {
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
        setReloadCount(reloadCount + 1);
      });
  };

  const handleUpdateTaskStatus = async (taskID: string) => {
    const task = tasks.find((task: Task) => task.ID === taskID);
    if (task) {
      setLoading(true);
      task.status === TaskStatus.NotStarted
        ? (task.status = TaskStatus.Ongoing)
        : task.status === TaskStatus.Ongoing
        ? (task.status = TaskStatus.Completed)
        : (task.status = TaskStatus.NotStarted);
      update(task)
        .then(() => {
          console.log("Task status updated!");
        })
        .catch((e: Error) => {
          console.error(e.message);
        })
        .finally(() => {
          setReloadCount(reloadCount + 1);
          setLoading(false);
        });
    }
  };

  const handleCreateTask = async () => {
    setLoading(true);
    const [deadlineDate, deadlineMonth, deadlineYear] = deadline.split("/");

    const newTask = new Task({
      id:
        tasks.length === 0
          ? "1"
          : String(parseInt(tasks[tasks.length - 1].ID) + 1),
      title,
      description,
      deadline: new Date(
        parseInt(deadlineYear),
        parseInt(deadlineMonth) - 1,
        parseInt(deadlineDate)
      ).toISOString(),
      created_at: new Date().toISOString(),
      status: TaskStatus.NotStarted,
    });

    create(newTask)
      .then(() => {
        toast.success('Task successfully created!')
      })
      .catch((e: Error) => {
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
        setReloadCount(reloadCount + 1);
      });
  };
  const getStatusCount = (status: TaskStatus) => {
    const filterTasks = tasks.filter((task) => task.status === status);
    return filterTasks.length;
  };

  const value = {
    tasks,
    setTasks,
    handleCreateTask,
    handleDeleteTask,
    handleUpdateTask,
    handleUpdateTaskStatus,
    getStatusCount,
    statusFilter,
    setStatusFilter,
    states: {
      loading,
      setLoading,
      title,
      setTitle,
      description,
      setDescription,
      deadline,
      setDeadline,
    },
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasksProvider = () => useContext(TasksContext);
