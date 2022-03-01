import { useReducer } from "react";
import TodoReducer from "./TodoReducer";
import TodoReducerButtons from "./TodoReducerButtons";
import TodoReducerContext from "./TodoReducerContext";
import ShowTodo from "./ShowTodo";

const TodoUseReducer = () => {
    const initialValue = [{ item: "Cook Breakfast", status: "complete" }, { item: "Do coding", status: "incomplete" }]
    const [state, dispatch] = useReducer(TodoReducer, initialValue);
    const reducerValue = { state, dispatch };
    return (
        <div className="App-div">
            <h1>Todo App</h1>
            <TodoReducerContext.Provider value={reducerValue}>
                <TodoReducerButtons />
                <ShowTodo />
            </TodoReducerContext.Provider>
        </div>
    );
};
export default TodoUseReducer;