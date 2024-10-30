"use client";
import React, { useState } from "react";
import Modal from "../components/modal";

const columns = [
  { id: "ready", title: "To Do" },
  { id: "approval", title: "In Progress" },
  { id: "engineer", title: "Approval" },
  { id: "report", title: "Complete" },
];

const tasks = [
  {
    id: "task1",
    title: "Update homepage hero section",
    priority: "high",
    dueDate: "2024-11-15",
    assignee: {
      id: "user1",
      name: "Alice Johnson",
      avatar: "/avatars/alice.jpg",
    },
    timeEstimate: "4h",
    tags: ["design", "frontend"],
    status: "ready",
  },
  {
    id: "task1",
    title: "Update homepage hero section",
    priority: "high",
    dueDate: "2024-11-15",
    assignee: {
      id: "user1",
      name: "Alice Johnson",
      avatar: "/avatars/alice.jpg",
    },
    timeEstimate: "4h",
    tags: ["design", "frontend"],
    status: "ready",
  },
];

export default function KanbanBoard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="p-8 text-gray-500">
      <div className="flex justify-end">
        <div className="bg-blue-500 p-2 w-40 text-center text-white rounded">
          <button onClick={handleModalOpen}>Create Quick Task</button>
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto mt-4">
        {columns.map((column) => {
          const filteredTasks = tasks.filter(
            (task) => task.status === column.id
          );

          return (
            <div
              key={column.id}
              className="flex-1 min-w-[250px] bg-blue-300 p-4 border rounded-md shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-4">
                {column.title} ({filteredTasks.length})
              </h2>
              <div className="space-y-4">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white border rounded-md shadow-sm"
                  >
                    <h3 className="font-bold mb-2">{task.title}</h3>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Priority:</span>{" "}
                      <span
                        className={`${
                          task.priority === "high"
                            ? "text-red-500"
                            : "text-gray-700"
                        } capitalize`}
                      >
                        {task.priority}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Due Date:</span>{" "}
                      {task.dueDate}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <p className="text-sm text-gray-800">
                        Assigned to {task.assignee.name}
                      </p>
                    </div>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Time Estimate:</span>
                      {""}
                      {task.timeEstimate}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div></div>
      </Modal>
    </div>
  );
}
