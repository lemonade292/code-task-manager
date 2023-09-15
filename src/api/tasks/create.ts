import { API_URL } from "../shared/constants"
import { Task } from "./types"

export const create = async(task: Task): Promise<void> => {
    const body = JSON.stringify(task.toAPI());

    const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        body,
        headers: {
            'Content-Type': "application/json"
        }
    })

    if (response.status === 201) {
        return
    }

    throw new Error("Something went wrong.");
}