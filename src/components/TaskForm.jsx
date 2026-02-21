import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    const newTask = {
      id: Date.now(),
      title,
      description: "",
      priority,
      completed: false,
      createdDate: new Date().toISOString(),
      dueDate,
    };
    addTask(newTask);
    setTitle("");
    setPriority("Low");
    setDueDate("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4 flex flex-col gap-3"
    >
      <input
        type="text"
        placeholder="Task Title"
        className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="date"
        className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded dark:bg-gray-700 dark:text-white"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="bg-blue-500 text-black p-2 rounded hover:bg-blue-600 border border-solid border-red-900">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
