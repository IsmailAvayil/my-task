// import React, { useContext } from "react";
// import { TaskContext } from "../context/TaskContext";

// const TaskItem = ({ task }) => {
//   const { deleteTask, toggleComplete } = useContext(TaskContext);

//   return (
//     <tr className="border-b hover:bg-gray-50">
//       <td className="p-3">{task.title}</td>
//       <td className="p-3">{task.dueDate || "—"}</td>
//       <td className="p-3">
//         <span
//           className={`px-2 py-1 rounded text-xs font-semibold ${
//             task.priority === "High"
//               ? "bg-red-100 text-red-700"
//               : task.priority === "Medium"
//                 ? "bg-yellow-100 text-yellow-700"
//                 : "bg-green-100 text-green-700"
//           }`}
//         >
//           {task.priority}
//         </span>
//       </td>
//       <td className="p-3">
//         <span
//           className={`px-2 py-1 rounded text-xs font-semibold ${
//             task.completed
//               ? "bg-green-100 text-green-700"
//               : "bg-yellow-100 text-yellow-700"
//           }`}
//         >
//           {task.completed ? "Completed" : "Pending"}
//         </span>
//       </td>
//       <td className="p-3 flex gap-2">
//         <button
//           onClick={() => toggleComplete(task.id)}
//           className="text-blue-500"
//         >
//           ✓ Done
//         </button>
//         <button onClick={() => deleteTask(task.id)} className="text-red-500">
//           ✗ Del
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default TaskItem;
import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleComplete, updateTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSave = () => {
    updateTask(task.id, { title, priority, dueDate });
    setIsEditing(false);
  };

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="p-3">
        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-1 dark:bg-gray-700 dark:text-white"
          />
        ) : (
          task.title
        )}
      </td>
      <td className="p-3">
        {isEditing ? (
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border rounded p-1 dark:bg-gray-700 dark:text-white"
          />
        ) : (
          task.dueDate || "—"
        )}
      </td>
      <td className="p-3">
        {isEditing ? (
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border rounded p-1 dark:bg-gray-700 dark:text-white"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        ) : (
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              task.priority === "High"
                ? "bg-red-100 text-red-700"
                : task.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
            }`}
          >
            {task.priority}
          </span>
        )}
      </td>
      <td className="p-3">
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </td>
      <td className="p-3 flex gap-2">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="text-green-600">
              💾 Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-500"
            >
              ✗ Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500"
            >
              ✎ Edit
            </button>
            <button
              onClick={() => toggleComplete(task.id)}
              className="text-green-500"
            >
              ✓ Done
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500"
            >
              ✗ Del
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default TaskItem;
