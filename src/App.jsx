import useTodoLogic from "./hooks/useTodoLogic";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App () {
  const {todos,addTodo,deleteTodo,toggleTodo}= useTodoLogic();
  return(
    <div>
      <h1>My First React Project</h1>
      <TodoHeader />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App;

