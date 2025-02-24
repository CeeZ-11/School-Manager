import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          School Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
