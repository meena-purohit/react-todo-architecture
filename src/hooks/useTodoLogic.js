import { useEffect, useState } from "react"

export default function useTodoLogic(){
    const [todos,setTodos]=useState(()=>{
        //1. get the data from LocalStorage
        const saveData = localStorage.getItem("my-todo-list");
        //2. if it exists, parse it back into an array. if not, start with[]
        return saveData ? JSON.parse(saveData): [];
    });
    useEffect(()=>{
        localStorage.setItem("my-todo-list", JSON.stringify(todos));
    },[todos]);

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