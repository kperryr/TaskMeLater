import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskTile from "../components/TaskTile";

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/tasks", {
        withCredentials: true,
      });
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Tasks</h1>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {tasks.map((task) => (
            <TaskTile key={task._id} task={task} refreshTasks={fetchTasks} />
        ))}
    </div>
      {/* We'll add the "Add Task" form next */}
    </div>
  );
};

export default DashboardPage;