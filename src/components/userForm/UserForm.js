import { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";

import { GlobalContext } from "../../store/GlobalState.js";
import "./userForm.scss";

const UserForm = ({ type, data, closeForm }) => {
  // state
  const [firstName, setFirstName] = useState(data ? data.first_name : "");
  const [lastName, setLastName] = useState(data ? data.last_name : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [imageUrl, setImageUrl] = useState(data ? data.avatar : "");

  // other vars
  const { updateUser, createUser, setAlertMessage } = useContext(GlobalContext);

  function handleOnCancel() {
    closeForm();
  }

  function handleOnSubmit() {
    const newData = {
      first_name: firstName,
      last_name: lastName,
      email,
      avatar: imageUrl,
    };

    // if field is empty
    if (
      newData.first_name === "" ||
      newData.last_name === "" ||
      newData.email === "" ||
      newData.avatar === ""
    ) {
      return setAlertMessage("warning", "Please enter all fields!");
    }
    // if email is not valid
    if (!validateEmail(newData.email)) {
      return setAlertMessage("warning", "Please enter a valid Email!");
    }

    if (type === "update") {
      updateUser(newData, data.id);
    } else if (type === "create") {
      createUser(newData, Math.floor(Math.random() * 1000));
    }

    closeForm();
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="outlined-uncontrolled"
          label="First Name"
          variant="filled"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          id="filled-basic"
          label="Last Name"
          variant="filled"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Profile Image"
          variant="filled"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <div>
          <Button
            variant="outlined"
            color="error"
            title="Edit"
            onClick={handleOnCancel}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            title="Delete"
            onClick={handleOnSubmit}
          >
            {type}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
