import React, { useState } from "react";
import "./Overview.scss"
//components
import { Container } from "../shared/Container/Container";
import { TaskStatus } from "../../api/tasks/types";
import { OverviewItem } from "./OverviewItem";

interface OverviewProps {}

export const Overview: React.FC<OverviewProps> = () => {

  return (

      <Container>
        {(Object.keys(TaskStatus) as Array<keyof typeof TaskStatus>).map((status) => <OverviewItem status ={status}/>)}
        <div></div>
       
      </Container>


  );
};
