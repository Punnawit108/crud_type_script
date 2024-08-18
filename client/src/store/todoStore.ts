import { create } from "zustand";
import { Todo } from "../types/todo";
import axios from "axios";

type TodoStore = {
  todo: Todo[];
  getTodo: () => void;
  addTodo: (data: Todo) => void;
  editTodo: (data: Todo) => void;
  deleteTodo: (data: Todo) => void;
};

export const useTodoStore = create<TodoStore>()((set) => ({
  todo: [],

  getTodo: async () => {
    try {
      const result = await axios.get("http://localhost:3000/todo");
      set({ todo: result.data });
    } catch (err) {
      console.log(err);
    }
  },
  addTodo: async (data) => {
    try {
      await axios.post("http://localhost:3000/todo", data);
      const result = await axios.get("http://localhost:3000/todo");
      set({ todo: result.data });
    } catch (err) {
      console.log(err);
    }
  },
  editTodo: async (data) => {
    try {
      await axios.put("http://localhost:3000/todo", data);
      const result = await axios.get("http://localhost:3000/todo");
      set({ todo: result.data });
    } catch (err) {
      console.log(err);
    }
  },

 
  deleteTodo: async (data ) => { 
    try {
        console.log(`Deleting todo with id: ${data}`);
        await axios.delete("http://localhost:3000/todo", {data}); 
        const result = await axios.get("http://localhost:3000/todo");
        
        set({ todo: result.data });
    } catch (err) {
        console.log(err);
    }
},

}));
