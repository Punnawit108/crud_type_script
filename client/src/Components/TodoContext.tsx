import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Todo } from '../types/todo';

interface TodoContextType {
  todoData: Todo | null;
  setTodoData: (todo: Todo) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todoData, setTodoData] = useState<Todo | null>(null);

  return (
    <TodoContext.Provider value={{ todoData, setTodoData }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
