import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" size="large" className="navbar">
        <Toolbar className="contents">
          <div className="left">
            <SupervisorAccountIcon className="icon" />
            <Typography varient="h3" className="title">
              <Link to="/" className="link">
                Admin Panel
              </Link>
            </Typography>
          </div>

          <div className="right">
            <Button color="inherit">
              <Link to="/about" className="link">
                About
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
