import React, { useState } from "react";
import "./OverviewItem.scss";
//components
import { TaskStatus } from "../../api/tasks/types";
import { useTasksProvider } from "../tasks/providers/TasksProvider";

interface OverviewItemProps {
  status: TaskStatus;
}
const OVERVIEW_ITEM_TITLES: Record<TaskStatus, string> = {
  [TaskStatus.NotStarted]: "Not Started",
  [TaskStatus.Ongoing]: "Ongoing",
  [TaskStatus.Completed]: "Completed",
};

/**
 * OverviewItem renders the summary data inside the Overview component
 * @param {TaskStatus}status The specific task status that is provided
 * @returns {React.FC<OverviewItemProps>} OverviewItem
 */
export const OverviewItem: React.FC<OverviewItemProps> = ({ status }) => {
  const { getStatusCount, statusFilter, setStatusFilter } = useTasksProvider();

  return (
    <div
      className="OverviewItem"
      onClick={() =>
        statusFilter === status
          ? setStatusFilter(undefined)
          : setStatusFilter(status)
      }
    >
      <h3 className="OverviewItemNumber">{getStatusCount(status)}</h3>
      <p className="OverviewItemTitle">{OVERVIEW_ITEM_TITLES[status]}</p>
    </div>
  );
};
