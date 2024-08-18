import { Link } from 'react-router-dom';
import { useTodoContext } from '../Components/TodoContext';
import { useTodoStore } from '../store/todoStore';
import { useEffect } from 'react';
import Item from './Item';

const Content = () => {
  const { getTodo, todo } = useTodoStore();
  const { setTodoData } = useTodoContext();

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <div >
      <h1 className="mb-4 text-2xl font-bold text-center">
        Todo
        <Link to="/add">
          <span className="float-right p-1 font-bold border border-black rounded-xl">Add Todo</span>
        </Link>
      </h1>
      
      <div className="grid grid-cols-3 gap-10 ">
        {todo.map((item) => (
          <Link
            key={item.id}
            to="/edit"
            onClick={() => setTodoData(item)}
          >
            <Item 
              id={item.id} 
              label={item.label} 
              status={item.status} 
              description={item.description} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
