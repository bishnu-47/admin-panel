import { useContext } from "react";
import { Container } from "@mui/material";

import { GlobalContext } from "../../store/GlobalState.js";
import User from "../user/User";

const UsersList = () => {
  const { users } = useContext(GlobalContext);

  return (
    <Container maxWidth="sm">
      {users.length > 0
        ? users.map((user) => <User key={user.id} data={user} />)
        : "Loading..."}
    </Container>
  );
};

export default UsersList;
