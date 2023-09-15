import { API_URL } from "../shared/constants"

/**
 * deleteTask delete a task matching the provided ID.
 * @param taskID 
 * @returns 
 */
export const deleteTask = async(taskID: string): Promise<void> => {
    const response = await fetch(`${API_URL}/tasks/${taskID}`, {method: "DELETE"})

    if (response.status >= 200 && response.status < 400) {
        return;
    }

    throw new Error("Something went wrong");
}