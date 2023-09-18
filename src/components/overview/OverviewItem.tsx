import React, { useState } from "react";
import "./Overview.scss"
//components
import { TaskStatus } from "../../api/tasks/types";
import { useTasksProvider } from "../tasks/providers/TasksProvider";

interface OverviewItemProps {
    status: keyof typeof TaskStatus
}

export const OverviewItem: React.FC<OverviewItemProps> = ({status}) => {
    const {
      getStatusCount, statusFilter, setStatusFilter
      } = useTasksProvider();

  return (

      <div className="OverviewItem" onClick={() => statusFilter === status ? setStatusFilter(undefined) : setStatusFilter(status)}>
        <h3 className="OverviewItemNumber">{getStatusCount(status)}</h3>
        <p className="OverviewItemTitle">{status}</p>
      </div>


  );
};
