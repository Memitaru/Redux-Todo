import { ADD_TASK, TOGGLE_COMPLETE } from "../actions";

const initialState = {
  todos: [
    { task: "feed cats", completed: false, id: 0 },
    { task: "feed dogs", completed: true, id: 1 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTask]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, id) =>
          action.payload === id ? { ...todo, completed: !todo.completed } : todo
        )
      };

    default:
      return state;
  }
};
