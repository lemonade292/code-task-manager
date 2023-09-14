import { Task, TaskFromAPI } from "./types";

/**
 * getAll returns all tasks
 * @returns {Promise<Task[]>} The tasks
 */
export const getAll = async(): Promise<Task[]> =>{
    const response = await fetch("http://localhost:3000/tasks");
    const parsedResponse: TaskFromAPI[] = await response.json();

    return parsedResponse.map((taskFromAPI: TaskFromAPI) => new Task(taskFromAPI));
}