import { useContext } from "react";
import Alert from "@mui/material/Alert";

import { GlobalContext } from "../../store/GlobalState.js";
import "./alertMessage.scss";

export default function AlertMessage({ type, message }) {
  const { setAlertMessage } = useContext(GlobalContext);

  setTimeout(() => {
    setAlertMessage("");
  }, 5000);

  return (
    <Alert severity={type} className="alert">
      {message}
    </Alert>
  );
}
