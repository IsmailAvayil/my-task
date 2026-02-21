import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("created");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      const fetchTasks = async () => {
        try {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5",
          );
          const data = await res.json();
          const mapped = data.map((task) => ({
            id: task.id,
            title: task.title,
            description: "",
            priority: "Low",
            completed: task.completed,
            createdDate: new Date().toISOString(),
            dueDate: "",
          }));
          setTasks(mapped);
        } catch (err) {
          console.error("Failed to fetch tasks:", err);
        }
      };
      fetchTasks();
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));
  const toggleComplete = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  const updateTask = (id, updatedData) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedData } : t)),
    );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleComplete,
        updateTask,
        filter,
        setFilter,
        sortBy,
        setSortBy,
        search,
        setSearch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
