import React, { useState } from "react";
import { fetchID } from "../assets/tasks.js";
// import axios from "axios";
const AddTask = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { id: fetchID(), title: task, comments: [] };
    //adding to pending category
    //here we declare post req to api that updates in backend
    // try {
    //   await axios.post("/tasks", { newTask });
    //   console.log("Task added successfully");
    // } catch (error) {
    //   console.error("Error adding task:", error);
    // }
    console.log(newTask);

    setTask("");
  };

  return (
    <form className="form__input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        className="input"
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="addTodoBtn">ADD TASK</button>
    </form>
  );
};

export default AddTask;
