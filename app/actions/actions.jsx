export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

//toggleShowCompleted  just type:TOGGLE_SHOW_COMPLETED

export var toggleShowCompleted = () => {
  return {
  type: 'TOGGLE_SHOW_COMPLETED'
  };
};


export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

//TOGGLETODO(id) TOGGLE_TODO

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
