import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./footer.scss";

const Footer = () => {
  return (
    <AppBar position="static" className="footer">
      <Container maxWidth="md">
        <Toolbar className="toolbar">
          <Typography variant="body1" align="center">
            Made with <FavoriteIcon className="footerIcon" /> by Bishnu Das
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
