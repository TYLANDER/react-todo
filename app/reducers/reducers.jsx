export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText;
      default:
        return state;
    };
  };

// showCompletedReducer, statement default false, switch - TOGGLE_SHOW_COMPLETED, return opposite.

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};
