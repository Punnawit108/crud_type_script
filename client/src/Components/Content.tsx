import Item from "./Item";
import { Link } from "react-router-dom";



const Content = () => {
  return (
    <div>
      <h1 className="mb-4 text-center">
      Todo 
      <Link to = "/add"><span className="float-right border border-black rounded-lg">
        Add Todo
      </span></Link>
    </h1>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
    </div>
  </div>
  
  )
}
export default Content;
