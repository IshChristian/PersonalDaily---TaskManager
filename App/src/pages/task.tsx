import { useState } from "react";
import Sidebar from "../componets/leftsidebar";
import Navbar from "../componets/navbar";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => setShowModal(!showModal);

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: newTask,
          dueDate: newDueDate,
          info: newInfo,
          completed: false,
        },
      ]);
      // Reset fields after adding the task
      setNewTask("");
      setNewDueDate("");
      setNewInfo("");
      toggleModal();
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 z-0 mt-20 p-6">
        <Navbar />

        {/* Add New Task Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Task Manager</h2>
          <button className="btn btn-primary" onClick={toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 mr-1"
            >
              <path
                fill="currentColor"
                d="M12 2a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 01-2 0v-8H3a1 1 0 110-2h8V3a1 1 0 011-1z"
              />
            </svg>
            Add New Task
          </button>
        </div>

        {/* Task List */}
        <div className="container mt-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Completed</th>
                <th>Task Name</th>
                <th>Due Date</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                    />
                  </td>
                  <td className={task.completed ? "line-through" : ""}>
                    {task.name}
                  </td>
                  <td>{task.dueDate || "N/A"}</td>
                  <td>{task.info || "No additional info"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Task Modal */}
        {showModal && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add New Task</h3>
              <input
                type="text"
                className="input input-bordered w-full mt-4"
                placeholder="Task Name"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <input
                type="date"
                className="input input-bordered w-full mt-4"
                placeholder="Due Date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
              />
              <textarea
                className="textarea textarea-bordered w-full mt-4"
                placeholder="Additional Information"
                value={newInfo}
                onChange={(e) => setNewInfo(e.target.value)}
              ></textarea>
              <div className="modal-action">
                <button className="btn btn-primary" onClick={addTask}>
                  Add Task
                </button>
                <button className="btn" onClick={toggleModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
