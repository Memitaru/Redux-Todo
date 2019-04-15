import {ADD_TASK} from '../actions';

const initialState={todos: [{task: "feed cats", completed: false}, {task: "feed dogs", completed: true}]}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
        const newTask={
            task: action.payload,
            completed: false
        };
        return{
            ...state,
            todos: [...state.todos, newTask]
        }
        default:
        return state;
    }
}