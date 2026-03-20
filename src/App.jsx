import useTodoLogic from "./hooks/useTodoLogic";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App () {
  const {todos,addTodo,deleteTodo,toggleTodo}= useTodoLogic();
  return(
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      <h1 
     className="text-3xl font-extrabold text-blue-600 text-center mb-6">
       My Professnal Todo App 
       </h1>

    {todos.length > 0 ?  <TodoHeader todos={todos} /> : null}

      <div className="my-6">
      <TodoInput addTodo={addTodo} />
      </div>

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      </div>
    </div>
  )
}

export default App;

