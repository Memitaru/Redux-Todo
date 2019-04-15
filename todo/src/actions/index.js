export const ADD_TASK="ADD_TASK"
export const TOGGLE_COMPLETE="TOGGLE_COMPLETE"

export function addTask(newTask){
    return{
        type: ADD_TASK,
        payload: newTask
    }
}

export function toggleComplete(index){
    return{
        type: TOGGLE_COMPLETE,
        payload: index
    }
}