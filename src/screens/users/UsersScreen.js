import { useState, useContext } from "react";
import { Typography, Container, IconButton, Pagination } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Navbar from "../../components/navbar/Navbar";
import UsersList from "../../components/usersList/UsersList.js";
import UserForm from "../../components/userForm/UserForm.js";
import Footer from "../../components/footer/Footer.js";
import { GlobalContext } from "../../store/GlobalState.js";
import "./usersScreen.scss";

const UsersScreen = () => {
  const { pagination, setCurrentPage } = useContext(GlobalContext);
  const [showCreateForm, setShowCreateForm] = useState(false);

  function handleOnClick() {
    setShowCreateForm(!showCreateForm);
  }

  function handleOnPageChange(e, page) {
    setCurrentPage(page);
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
          title="Add User"
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

      <Container maxWidth="sm" className="paginationContainer">
        <Pagination
          count={pagination.totalPage}
          page={pagination.currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handleOnPageChange}
        />{" "}
      </Container>

      <Footer />
    </div>
  );
};

export default UsersScreen;
