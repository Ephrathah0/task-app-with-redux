import store from "../store";
export const Addtodoaction=(todo)=>(dispatch)=>{
    const {
        Todo: { todos},
    }=getState();
    const hasTodo=todos.find((i)=>i.todo===todo);
    if (!hasTodo&& todo!==""){
        dispatch({
            type: "Add_todo",
            payload:[{id:todo,todo},...todos]
        })
    }
};

export const Removetodoaction=(todo)=>(dispatch,getState)=>{
    const {
        Todo: {todos},
    }=getState();
    dispatch({
        type: "Remove_todo",
        payload:todos.filter((t)=>t.id !==todo.id),
    })
};