import { useState, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TaskFormData {
  title: string;
  priority: string;
  dueDate: string;
  teamMember: string;
  timeEstimate: string;
}

const TaskForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    priority: "",
    dueDate: "",
    teamMember: "",
    timeEstimate: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      title: "",
      priority: "",
      dueDate: "",
      teamMember: "",
      timeEstimate: "",
    });

    onClose();
    toast.success("Task submitted successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 p-6 mt-4 text-black">
        <div>
          <label className="block text-base font-medium text-gray-500">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-base font-medium text-gray-500">
            Priority Level
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            required
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-base font-medium text-gray-500">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-base font-medium text-gray-500">
            Assigned Team Member
          </label>
          <input
            type="text"
            name="teamMember"
            value={formData.teamMember}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-base font-medium text-gray-500">
            Time Estimate (hours)
          </label>
          <input
            type="number"
            name="timeEstimate"
            value={formData.timeEstimate}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Task
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TaskForm;
