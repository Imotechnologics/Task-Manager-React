import { useContext, useState } from "react";
import {TaskContext} from '../context/taskContext'


function TaskForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
        title,
        description,
    })
    setTitle('')
    setDescription('')
  }
  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
      <h1 className="text-2xl font-bold text-white mb-3">Create your Task</h1>
      <input
        placeholder="Type your Task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea placeholder="Type Task Description" 
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
    </form>
    </div>
  );
}

export default TaskForm;
