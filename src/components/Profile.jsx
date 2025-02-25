import { useState } from "react";
import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/admin.png";

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    setAnchorEl(null);
    navigate("/login/admin");
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar
          alt="User"
          src={profilePic}
          sx={{ width: 35, height: 35, fontSize: 15 }}
        />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
