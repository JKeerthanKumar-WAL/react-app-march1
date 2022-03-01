const TodoReducer = (state,action) => {
    if(action.type == "add"){
        let todoObject = {
            item : action.item,
            status : action.status
        }
        let newTodo = [...state,todoObject];
        return newTodo;
    }
    if(action.type == "delete"){
        let modifiedState = state.filter((val,index)=>{
            if(index == action.payload){
                return false;
            }
            return true;
        })
        return modifiedState;
    }
    if(action.type == "clear"){
        return [];
    }
}
export default TodoReducer;