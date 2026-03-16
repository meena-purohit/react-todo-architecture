import { useState } from "react"

export default function useTodoLogic(){
    const [todos,setTodos]=useState([]);

    const addTodo = (text) =>{
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
    }
    setTodos([...todos, newTodo]);
}

    const deleteTodo = (id)=> {
        setTodos(todos.filter((todo)=>todo.id !== id))
    };
    const toggleTodo = (id)=> {
        setTodos(
            todos.map((todo)=>
                //if the ID matches the one we clicked...
            todo.id === id
            ? {...todo, completed: !todo.completed}// flip the switch
            :todo // otherwise, keep the todo exactly as it was
            )
        )
    }
    return {todos,addTodo,deleteTodo,toggleTodo}
       
    
}