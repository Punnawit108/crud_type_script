import {create} from "zustand"
import {Todo} from "../types/todo"


type TodoStore = {
    todo: Todo[],

    getTodo : () => void
    addTodo : () => void
    editTodo : () => void
    deleteTodo : () => void
}

export const useTodoStore = create<TodoStore>()((set) => ({
    todo:[],

    getTodo: () =>{

    },
    addTodo: () => {

    },
    editTodo: () =>{

    },
    deleteTodo:()=>{

    },
}))