export const ACTIONS = {
  GET_USERS: "get-users",
  UPDATE_USER: "update-user",
  DELETE_USER: "delete-user",
  CREATE_USER: "create-user",
  SET_ALERT: "set-alert",
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
        users: [...state.users, action.payload.data],
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
    default:
      return state;
  }
};
