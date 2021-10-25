import { useContext } from "react";

import UsersScreen from "./screens/users/UsersScreen";
import AlertMessage from "./components/alertMessage/AlertMessage";
import { GlobalContext } from "./store/GlobalState";
import "./app.scss";

function App() {
  const { alert } = useContext(GlobalContext);
  return (
    <div>
      <UsersScreen />
      {alert.type !== "" ? (
        <AlertMessage type={alert.type} message={alert.message} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
