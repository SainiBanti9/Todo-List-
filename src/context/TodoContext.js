import { createContext,useContext } from "react";

export const TodoContext= createContext({

    todos:[
       { 
        id:1,
        todo: "todo msg",
        completed: false,
        }
    ],
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
    addTodo:(todo)=>{}

})


export  const TodoProvider = TodoContext.Provider

export  const useTodo=()=>{
    return useContext(TodoContext)
}