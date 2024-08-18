import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTodoContext } from "../Components/TodoContext";
import { useTodoStore } from "../store/todoStore";
import { useEffect } from "react";
import { Todo } from "../types/todo";

const Edit = () => {
  const { register, handleSubmit, setValue } = useForm<Todo>();  
  const { editTodo, deleteTodo } = useTodoStore();
  const { todoData } = useTodoContext();
  const navigate = useNavigate();

  useEffect(() => {
    const storedTodoData = localStorage.getItem("todoData");
    const parsedTodoData = storedTodoData ? JSON.parse(storedTodoData) : null;
    
    console.log(todoData?.id)
    if (todoData) { 
      localStorage.setItem("todoData", JSON.stringify(todoData));
      setValue("id", todoData.id);
      setValue("label", todoData.label);
      setValue("status", todoData.status);
      setValue("description", todoData.description);
    } else if (parsedTodoData) {
      setValue("id", parsedTodoData.id);
      setValue("label", parsedTodoData.label);
      setValue("status", parsedTodoData.status);
      setValue("description", parsedTodoData.description);
    }
  }, [todoData, setValue]);

  const submitData: SubmitHandler<Todo> = (data) => {
    editTodo(data);
    navigate("/");
    localStorage.removeItem("todoData");
  };

  const deleteData: SubmitHandler<Todo> = (todoData) => {
    console.log(todoData);
    if (todoData) {
        deleteTodo(todoData);
        console.log(todoData.id.toString()) // ตรวจสอบให้แน่ใจว่า id เป็น string
    }else {
      console.log("no data")
    }
    navigate("/");
};





  return (
    <div>
      <h1 className="text-2xl text-center">Edit Todo</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <label className="flex items-center gap-2 my-4 border border-b input input-border-black">
          <input disabled
            type="text"
            className="grow"
            placeholder="id"
            {...register("id")}
          />
        </label>

        <label className="flex items-center gap-2 my-4 border border-b input input-border-black">
          <input
            type="text"
            className="grow"
            placeholder="Label"
            {...register("label")}
          />
        </label>

        <select className="w-full my-4 bg-slate-400" {...register("status")} defaultValue={todoData?.status || ""}>
          <option value="">Select status</option>
          <option value="padding">padding</option>
          <option value="doing">doing</option>
          <option value="done">done</option>
        </select>

        <textarea
          className="w-full my-4 textarea textarea-bordered"
          placeholder="Description"
          {...register("description")}
        ></textarea>

        <div className="flex justify-between">
          <Link to="/">
            <button className="mt-4 btn bg-slate-500" type="button">
              Back
            </button>
          </Link>
          <button className="mt-4 btn bg-slate-500" type="submit">
            Submit
          </button>
        </div>
        <div>
          <button onClick={handleSubmit(deleteData)}
            className="bg-red-500 mt-9 btn" type="button">
              Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
