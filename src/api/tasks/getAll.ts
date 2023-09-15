import { API_URL } from "../shared/constants";
import { Task, TaskFromAPI } from "./types";

/**
 * getAll returns all tasks
 * @returns {Promise<Task[]>} The tasks
 */
export const getAll = async(): Promise<Task[]> =>{
    const response = await fetch(`${API_URL}/tasks`);
    const parsedResponse: TaskFromAPI[] = await response.json();

    return parsedResponse.map((taskFromAPI: TaskFromAPI) => new Task(taskFromAPI));
}