import React, { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const SearchBar = () => {
  const { setSearch } = useContext(TaskContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(query);
    }, 400);
    return () => clearTimeout(handler);
  }, [query, setSearch]);

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded w-full md:w-1/2 mb-4 dark:bg-gray-700 dark:text-white"
    />
  );
};

export default SearchBar;
