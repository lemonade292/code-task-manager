import { Task, TaskStatus } from "../../../api/tasks/types"

export const filteredTasks = (statusFilter: keyof typeof TaskStatus | undefined, tasks: Task[]) =>{
    if(statusFilter){
      return tasks.filter(task => task.status === TaskStatus[statusFilter])
    }
    return tasks
  }
