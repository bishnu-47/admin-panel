import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { AppReducer, ACTIONS } from "./AppReducer";

// initial state
const initState = {
  users: [],
  alert: {
    type: "",
    message: "",
  },
};

export const GlobalContext = createContext(initState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  const URL = "https://reqres.in";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URL}/api/users`);

        dispatch({
          type: ACTIONS.GET_USERS,
          payload: { users: res.data.data },
        });
      } catch (err) {
        setAlertMessage("error", err.response.data.error);
      }
    };

    fetchData();
  }, []);

  // Actions
  async function getUsers() {
    try {
      const res = await axios.get(`${URL}/api/users`);

      dispatch({
        type: ACTIONS.GET_USERS,
        payload: { users: res.data.data },
      });
    } catch (err) {
      setAlertMessage("error", "Fetching data failed!");
    }
  }

  async function updateUser(newData, id) {
    try {
      const headers = {
        "Content-type": "application/json",
      };

      const res = await axios.put(`${URL}/api/users/${id}`, newData, {
        headers,
      });
      dispatch({
        type: ACTIONS.UPDATE_USER,
        payload: { id: id, data: res.data },
      });
      setAlertMessage("success", "User Data updated.");
    } catch (err) {
      setAlertMessage("error", "Updating user failed!");
    }
  }

  async function createUser(newData, id) {
    try {
      const headers = {
        "Content-type": "application/json",
      };

      const res = await axios.post(`${URL}/api/users`, newData, {
        headers,
      });
      console.log(res);

      dispatch({
        type: ACTIONS.CREATE_USER,
        payload: { id: id, data: res.data },
      });
      setAlertMessage("success", "New User Created.");
    } catch (err) {
      console.log(err.response);
      setAlertMessage("error", "User creation Failed!");
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${URL}/api/users/${id}`);

      dispatch({
        type: ACTIONS.DELETE_USER,
        payload: { id: id },
      });
      setAlertMessage("success", "User Deleted...");
    } catch (err) {
      setAlertMessage("error", "User deletion Failed!");
    }
  }

  function setAlertMessage(type, message) {
    dispatch({
      type: ACTIONS.SET_ALERT,
      payload: { type: type, alertMsg: message },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        alert: state.alert,
        createUser,
        getUsers,
        updateUser,
        deleteUser,
        setAlertMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
