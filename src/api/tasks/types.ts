import { EXDate } from "../../types/ExDate";

export interface TaskFromAPI {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  created_at: string;
  deadline: string;
}

export enum TaskStatus {
  NotStarted = "NOT_STARTED",
  Ongoing = "ONGOING",
  Completed = "COMPLETED",
}

interface ITask {
  toAPI(): TaskFromAPI;
}

export class Task implements ITask {
  public readonly ID: string;
  public title: string;
  public description: string;
  public status: TaskStatus;
  public createdAt: EXDate;
  public deadline: EXDate;

  constructor(taskFromAPI: TaskFromAPI) {
    this.ID = taskFromAPI.id;
    this.title = taskFromAPI.title;
    this.description = taskFromAPI.description;
    this.status = taskFromAPI.status;
    this.createdAt = new EXDate(taskFromAPI.created_at);
    this.deadline = new EXDate(taskFromAPI.deadline);
  }

  public toAPI(): TaskFromAPI {
    return {
      id: this.ID,
      created_at: this.createdAt.unfmt(),
      deadline: this.deadline.unfmt(),
      status: this.status,
      description: this.description,
      title: this.title,
    }
  }
}
