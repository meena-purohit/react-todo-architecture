import useTodoLogic from "./hooks/useTodoLogic";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App () {
  const {todos,addTodo,deleteTodo,toggleTodo}= useTodoLogic();
  return(
    <div>
      <h1 
     className="bg-blue-600 text-white p-4 text-center rounded-lg shadow-xl">
  Tailwind v4 is Working!</h1>
      <TodoHeader />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App;

