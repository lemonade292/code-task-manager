import { API_URL } from "../shared/constants";
import { Task } from "./types";

/**
 * TODO: add doc.
 * @param task
 * @returns
 */
export const update = async (task: Task): Promise<void> => {
  const body = JSON.stringify(task.toAPI());

  const response = await fetch(`${API_URL}/tasks/${task.ID}`, {
    method: "PUT",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 200 && response.status < 400) {
    return;
  }

  throw new Error("Something went wrong");
};
