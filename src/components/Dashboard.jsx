import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  Toolbar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";

import Navbar from "./Navbar";
import Schedule from "../pages/Schedule";
import Home from "../pages/Home";
import Students from "../pages/Students";
import Staff from "../pages/Staff";

const drawerWidth = 240;

function Dashboard() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Navbar toggleDrawer={toggleDrawer} />

      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 60,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: open ? drawerWidth : 60,
            transition: "width 0.3s",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/schedule">
              <ListItemIcon>
                <CalendarIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Schedule" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/students">
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Students" />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/staff">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Staff" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/students" element={<Students />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
