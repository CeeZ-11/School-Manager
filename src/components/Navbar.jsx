import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import ProfileMenu from "./Profile.jsx";

const Navbar = ({ toggleDrawer }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </Box>
        <Box>
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
