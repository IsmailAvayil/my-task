import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const DashboardStats = () => {
  const { tasks } = useContext(TaskContext);
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const highPriority = tasks.filter((t) => t.priority === "High").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div className="bg-blue-100 p-4 rounded text-center dark:bg-blue-900">
        <p className="text-2xl font-bold">{total}</p>
        <p>Total</p>
      </div>
      <div className="bg-green-100 p-4 rounded text-center dark:bg-green-900">
        <p className="text-2xl font-bold">{completed}</p>
        <p>Completed</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded text-center dark:bg-yellow-900">
        <p className="text-2xl font-bold">{pending}</p>
        <p>Pending</p>
      </div>
      <div className="bg-red-100 p-4 rounded text-center dark:bg-red-900">
        <p className="text-2xl font-bold">{highPriority}</p>
        <p>High Priority</p>
      </div>
    </div>
  );
};

export default DashboardStats;
