import { useContext, useState } from "react";
import TodoReducerContext from "./TodoReducerContext";

const TodoReducerButtons = () => {
    const { dispatch } = useContext(TodoReducerContext);
    const [item, setItem] = useState();
    const [status, setStatus] = useState();
    return (
        <div>
            <b>Enter a Todo : </b><input type="text" name="item" onInput={(event) => { setItem(event.target.value) }} /><br />
            <b>Status of Todo : </b><select name="status" onInput={(event) => { setStatus(event.target.value) }}>
                <option value="complete">Complete</option><br />
                <option value="incomplete">Incomplete</option><br />
            </select><br />
            <button onClick={() => {dispatch({ type: "add", item: item, status: status });}}><b>Add</b></button><br />
            <button onClick={() => { dispatch({ type: "clear" }); }}><b>Clear All</b></button>
        </div>
    );
};
export default TodoReducerButtons;