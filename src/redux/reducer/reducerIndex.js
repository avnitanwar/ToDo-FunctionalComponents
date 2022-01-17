const initialState = {
  items: [],
};

export const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [
          ...state.items,
          {
            text: action.text,
            id: action.id,
            completed: action.completed,
            edit: action.edit,
          },
        ],
      };
    case "TOGGLE_TODO":
      const newTodoList = state.items.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      console.log(...state.items, " state");
      return { items: newTodoList };

    case "DELETE_TODO":
      return {
        items: state.items.filter((todo) => todo.id !== action.payload),
      };

    case "EDIT_TODO":
      const updatedTodoList = state.items.map((item) =>
        item.id === action.payload ? { ...item, edit: true } : item
      );
      return { items: updatedTodoList };

    case "EDIT_VALUE":
      const updatedTodoListValue = state.items.map((item) =>
        item.id === action.id ? { ...item, text: action.payload } : item
      );
      return { items: updatedTodoListValue };

    case "FINAL_VALUE":
      const editTodoListValue = state.items.map((item) =>
        item.id === action.payload ? { ...item, edit: false } : item
      );
      return { items: editTodoListValue };

    case "CLEAR_COMPLETED":
      return {
        items: state.items.filter((item) => item.completed === false),
      };

    default:
      return state;
  }
};
