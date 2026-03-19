export default function TodoList({todos,deleteTodo,toggleTodo}) {
    return(
        <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Your Task</h2>
            <ul className="space-y-2">
                {
                    todos.map((todo)=>(
                        <li
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-sm transition-all"
                        key={todo.id} >

                            <span
                            className={'flex-1 cursor-pointer font-medium ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}'}
                             onClick={()=> toggleTodo(todo.id)}
                            >
                                {todo.text}
                        </span>

                            {/* The Action Buttons Group */}
                          <div className="flex gap-2 ml-4">
                            <button 
                            onClick={()=> toggleTodo(todo.id)}
                            className={'px-3 py-1 rounded-md text-xs font-bold  cursor-pointer transition-colors ${todo.completed ? "bg-amber-100 text-amber-600" : "bg-green-600 hover: bg-green-200"}'}
                            >
                                {todo.completed ? "Undo" : "Done"}
                            </button>

                            <button 
                            onClick={()=>deleteTodo(todo.id)}
                            className="bg-red-100 text-red-600 px-3 rounded-md text-ts font-bold cursor-pointer hover:bg-red-200 transition-colors"
                            >
                                Delete Todo
                                </button>
                        </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}     