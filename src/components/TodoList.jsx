import TodoItem from "./TodoItem";

export default function TodoList({todos,deleteTodo,toggleTodo,editTodo}) {
    return(
        <div className="mt-4">
       <h2 className="text-lg font-semibold text-gray-700 mb-3">Your Task</h2>
       {todos.length === 0 ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl py-10 text-center">
            <p className="text-gray-400 font-medium italic">No task yet. Enjoy your day!</p>
        </div>
       ):(
        <ul className="space-y-2">
            {todos.map((todo)=>(
                <TodoItem 
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                />
            ))}
        </ul>
       )}
        </div>
    );
}