import React, { useState } from "react";
import axios from "axios";

function TaskTile({ task, refreshTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/tasks/${task._id}`,
        { title, status },
        { withCredentials: true }
      );
      setIsEditing(false);
      refreshTasks();
    } catch (err) {
      console.error("Error updating task", err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-2 py-1 mb-2 bg-white dark:bg-gray-700 text-black dark:text-white"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-2 py-1 mb-2 bg-white dark:bg-gray-700 text-black dark:text-white"
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div onClick={() => setIsEditing(true)} className="cursor-pointer">
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p className="capitalize text-sm text-gray-400">{task.status}</p>
          <p className="text-xs text-gray-500">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}


export default TaskTile; 