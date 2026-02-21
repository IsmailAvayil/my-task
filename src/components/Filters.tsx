import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Filters = () => {
  const { filter, setFilter, sortBy, setSortBy } = useContext(TaskContext);

  return (
    <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
      <div className="flex gap-2">
        {["All", "Completed", "Pending"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f
                ? "bg-blue-600 text-black"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div>
        <label className="mr-2 text-sm text-gray-700 dark:text-gray-300">
          Sort by:
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-1 rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="created">Created Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
