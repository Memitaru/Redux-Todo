import {ADD_TASK, TOGGLE_COMPLETE} from '../actions';

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
        case TOGGLE_COMPLETE:
        
            const newTodos = state.todos.map((todo, index) => {
                console.log(action.payload, index);
                if (index === action.payload) {
                  return { value: todo.task, completed: !todo.completed };
                }
                return todo;
              });
              return {
                ...state,
                todos: newTodos
              };
        
        default:
        return state;
    }
}