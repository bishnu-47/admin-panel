import React from "react";
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
              Admin Panel
            </Typography>
          </div>

          <div className="right">
            <Button color="inherit">About</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
