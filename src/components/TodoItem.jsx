import { useState } from "react"

export default function TodoItem({todo,deleteTodo,toggleTodo,editTodo}) {

    const[isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        if(editText.trim() !== "") {
            editTodo(todo.id,editText);
            setIsEditing(false);
        }
    }
    return(
        <li className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-sm transition-all">
            {isEditing ? (
                <input 
                className="flex-1 border-b-2 border-blue-500 outline-none px-2 bg-transparent font-medium"
                value={editText}
                onChange={(event)=> setEditText(event.target.value)} 
                onKeyDown={(event) => event.key === "Enter" && handleSave()}
                autoFocus
                />
            ):(
                <span onClick={()=> toggleTodo(todo.id)}
                className={`flex-1 cursor-pointer font-medium ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
                >
                    {todo.text}
                </span>
            )}
        
        <div className="flex-gap-2 ml-4">
            {isEditing ? (
                <button onClick={handleSave} className="text-green-600 font-bold cursor-pointer text-sm">Save</button>
            ):(
                <button onClick={()=>setIsEditing(true)} className="text-green-600 font-bold cursor-pointer text-sm">Edit</button>
            )}
            <button onClick={()=>deleteTodo(todo.id)} className="text-red-500 font-bold cursor-pointer text-sm">Delete</button>
        </div>
        </li>
    )
}