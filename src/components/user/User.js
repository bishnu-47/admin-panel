import { useContext, useState } from "react";
import { Card, CardContent, Box, IconButton, CardMedia } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import UserForm from "../userForm/UserForm";
import { GlobalContext } from "../../store/GlobalState.js";
import "./user.scss";

const User = ({ data }) => {
  const { deleteUser } = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);

  function handleOnDelete() {
    deleteUser(data.id);
  }

  function handleOnEdit() {
    setEdit((pre) => !pre);
  }

  return edit ? (
    <UserForm type="update" data={data} closeForm={handleOnEdit} />
  ) : (
    <Card className="card">
      <CardMedia
        className="cardImage"
        component="img"
        sx={{ height: 151, width: 151 }}
        image={data.avatar}
        alt="Avatar"
      />

      <CardContent className="info">
        <div className="infoField">
          <span className="infoTitle">First Name:</span>
          <span className="infoDetail">{data.first_name}</span>
        </div>
        <div className="infoField">
          <span className="infoTitle">Last Name:</span>
          <span className="infoDetail">{data.last_name}</span>
        </div>
        <div className="infoField">
          <span className="infoTitle">Email:</span>
          <span className="infoDetail">{data.email}</span>
        </div>
      </CardContent>

      <Box className="actionButton">
        <IconButton className="edit" aria-label="edit" onClick={handleOnEdit}>
          <EditIcon />
        </IconButton>
        <IconButton
          className="delete"
          aria-label="delete"
          onClick={handleOnDelete}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default User;
