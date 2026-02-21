import React from "react";
import "./App.css";

import { TaskProvider } from "./context/TaskContext";
import DashboardStats from "./components/DashboardStats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
            <DarkModeToggle />
          </div>
          <DashboardStats />
          <Filters />
          <SearchBar />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
