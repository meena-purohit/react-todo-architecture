export default function TodoList({todos,deleteTodo,toggleTodo}) {
    return(
        <div>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                            <h3>{todo.text}</h3>
                            <button onClick={()=> toggleTodo(todo.id)}>
                                {todo.completed ? "Undo" : "Complete"}
                            </button>
                            <button onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}     