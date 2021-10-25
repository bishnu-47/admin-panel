import { useState } from "react";
import { Typography, Container, IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Navbar from "../../components/navbar/Navbar";
import UsersList from "../../components/usersList/UsersList.js";
import UserForm from "../../components/userForm/UserForm.js";
import "./usersScreen.scss";

const UsersScreen = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  function handleOnClick() {
    setShowCreateForm(!showCreateForm);
  }

  return (
    <div className="usersScreen">
      <Navbar />
      <Container maxWidth="sm" className="headerContainer">
        <Typography variant="h3" component="div" className="header">
          Users
        </Typography>

        <IconButton
          className="addUser"
          aria-label="add-user"
          disabled={showCreateForm}
          onClick={handleOnClick}
        >
          <PersonAddIcon />
        </IconButton>
      </Container>

      {showCreateForm && (
        <Container maxWidth="sm" className="formContainer">
          <UserForm type="create" closeForm={handleOnClick} />
        </Container>
      )}

      <UsersList />
    </div>
  );
};

export default UsersScreen;
