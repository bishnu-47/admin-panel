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
      setAlertMessage("error", err.response.data.error);
    }
  }

  async function updateUser(newData, id) {
    try {
      const headers = {
        "Content-type": "application/json",
      };

      const res = await axios.put(`${URL}/api/${id}`, newData, {
        headers,
      });
      dispatch({
        type: ACTIONS.UPDATE_USER,
        payload: { id: id, data: res.data },
      });
      setAlertMessage("success", "User Data updated.");
    } catch (err) {
      console.log(err);
      setAlertMessage("error", err.response.data.error);
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
      setAlertMessage("error", err.response.data.error);
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
