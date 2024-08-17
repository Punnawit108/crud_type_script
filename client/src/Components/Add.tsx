import { Link, useNavigate } from "react-router-dom";
import { Todo } from "../types/todo";
import { useForm } from "react-hook-form";
import { useTodoStore } from "../store/todoStore";

const Add = () => {
  const { register, handleSubmit } = useForm<Todo>();
  const {addTodo} = useTodoStore();
  const navigate = useNavigate();

  const submitData = (data: Todo) => {
    addTodo(data)
    navigate("/")
  };

  return (
    <div>
      <h1 className="text-2xl text-center">Add Todo</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <label id="" className="flex items-center gap-2 my-4 border border-b input input-border-black">
          <input type="text" className="grow" placeholder="Label" {...register("label")} />
        </label>
        <select id="" className="w-full my-4 bg-slate-400" {...register("status")}>
          <option value="Select status" >Select status</option>
          <option value="Padding">Padding</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>

        <textarea
          id=""
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
      </form>
    </div>
  );
};

export default Add;
