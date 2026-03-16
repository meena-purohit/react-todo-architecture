import { useState } from "react";

function TodoInput({addTodo}) {
    const [task , setTask] = useState("");

    const handleAdd = ()=>{
        if(task.trim() !=="") {
            addTodo(task);
            setTask("");
        }
    }
    return(
        <div>
            <h1>Todo Input</h1>
             <input type="text" 
             value={task}
             onChange={(event)=>setTask(event.target.value)}
              placeholder="What needs to be done?" />
              <br /><br />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export default TodoInput;