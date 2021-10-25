import { useContext } from "react";
import { Container, CircularProgress } from "@mui/material";

import { GlobalContext } from "../../store/GlobalState.js";
import User from "../user/User";
import "./usersList.scss";

const UsersList = () => {
  const { users } = useContext(GlobalContext);

  return (
    <Container maxWidth="sm">
      {users.length > 0 ? (
        users.map((user) => <User key={user.id} data={user} />)
      ) : (
        <span className="spinner">
          <CircularProgress color="secondary" />
        </span>
      )}
    </Container>
  );
};

export default UsersList;
