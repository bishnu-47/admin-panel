export const ACTIONS = {
  GET_USERS: "get-users",
  UPDATE_USER: "update-user",
  DELETE_USER: "delete-user",
  CREATE_USER: "create-user",

  SET_ALERT: "set-alert",
  SET_TOTAL_PAGE: "set-total-page",
  SET_CURRENT_PAGE: "set-current-page",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case ACTIONS.UPDATE_USER: {
      const newUsersList = state.users.map((user) => {
        if (user.id === action.payload.id) {
          const updatedUser = { ...action.payload.data, id: action.payload.id };
          return updatedUser;
        }
        return user;
      });
      return {
        ...state,
        users: newUsersList,
      };
    }
    case ACTIONS.CREATE_USER: {
      return {
        ...state,
        users: [action.payload.data, ...state.users],
      };
    }
    case ACTIONS.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload.id),
      };
    case ACTIONS.SET_ALERT:
      return {
        ...state,
        alert: {
          type: action.payload.type,
          message: action.payload.alertMsg,
        },
      };
    case ACTIONS.SET_TOTAL_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, totalPage: action.payload.count },
      };
    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: action.payload.count },
      };
    default:
      return state;
  }
};
