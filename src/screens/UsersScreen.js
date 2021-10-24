import Navbar from "../components/navbar/Navbar";
import UsersList from "../components/usersList/UsersList.js";
import "./usersScreen.scss";

const UsersScreen = () => {
  return (
    <div className="usersScreen">
      <Navbar />
      <UsersList />
    </div>
  );
};

export default UsersScreen;
