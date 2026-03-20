import { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      addTodo(task);
      setTask("");
    }
  };
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl cursor-pointer transition-all active:scale-95 shadow-blue-200"
      >
        Add 
      </button>
      </div>
    </div>
  );
}

export default TodoInput;
