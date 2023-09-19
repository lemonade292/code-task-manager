import React, { useState } from "react";
import "./Overview.scss";
//components
import { Container } from "../shared/Container/Container";
import { TaskStatus } from "../../api/tasks/types";
import { OverviewItem } from "./OverviewItem";

interface OverviewProps {}
/**
 * Overview renders a component that shows info about the tasks status
 * @returns {React.FC<OverviewProps>} Overview
 */
export const Overview: React.FC<OverviewProps> = () => {
  return (
    <Container>
      <h2 className="OverviewTitle" data-testid="OverviewTitle">
        Overview
      </h2>
      <div className="OverviewContent" data-testid="OverviewContent">
        {(Object.values(TaskStatus) as Array<TaskStatus>).map((status) => (
          <OverviewItem status={status} />
        ))}
      </div>

      <div></div>
    </Container>
  );
};
