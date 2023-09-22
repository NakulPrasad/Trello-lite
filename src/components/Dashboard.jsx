import React from "react";
import Nav from "./Nav";
import AddTask from "./AddTask";
import TaskContainer from "./TaskContainer";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <AddTask />
      <TaskContainer />
    </>
  );
};

export default Dashboard;
