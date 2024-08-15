import { Todo } from "../types/todo"
const Item = (props:Todo) => {
    return(
        <div className="p-2 border border-black">
            <p>{props.label}</p>
            <p>{props.status}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Item