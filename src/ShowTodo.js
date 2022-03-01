import TodoReducerContext from "./TodoReducerContext";
import { useContext } from "react";

const ShowTodo = () => {
    const reducerValue = useContext(TodoReducerContext);
    return(
        <div className="divOne">
            {reducerValue.state.map((val, index) => {
            return (
                <div className="border">
                    <h2>Todo Detail {index+1}</h2>
                    <b>Todo : </b>{val.item}<br />
                    <b>Status : </b>{val.status} <br />
                    <button onClick={() => { reducerValue.dispatch({ type: "delete", payload: index }) }}><b>Delete</b></button>
                </div>
            )
        })}
        </div>
    )
};
export default ShowTodo;