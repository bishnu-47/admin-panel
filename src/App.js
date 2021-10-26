import { useContext } from "react";

import UsersScreen from "./screens/users/UsersScreen";
import AboutScreen from "./screens/about/AboutScreen.js";
import AlertMessage from "./components/alertMessage/AlertMessage";
import { GlobalContext } from "./store/GlobalState";
import { Switch, Route, Link } from "react-router-dom";
import "./app.scss";

function App() {
  const { alert } = useContext(GlobalContext);
  return (
    <Switch>
      <Route path="/" exact>
        <UsersScreen />

        {alert.type !== "" ? (
          <AlertMessage type={alert.type} message={alert.message} />
        ) : (
          ""
        )}
      </Route>
      <Route path="/about">
        <AboutScreen />
      </Route>
    </Switch>
  );
}

export default App;
