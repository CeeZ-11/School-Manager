import { useState } from "react";
import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import profilePic from "../assets/profile.webp";

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar
          alt="User"
          src={profilePic}
          sx={{ width: 30, height: 30, fontSize: 15 }}
        />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
