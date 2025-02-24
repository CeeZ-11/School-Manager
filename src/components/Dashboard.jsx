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
  Collapse,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  CalendarMonth as CalendarIcon,
  ExpandLess,
  ExpandMore,
  PersonAdd as PersonAddIcon,
  Group as GroupIcon,
  PersonAddAlt as PersonAddAltIcon,
  People as PeopleIcon,
} from "@mui/icons-material";

import Navbar from "./Navbar";
import Schedule from "../pages/Schedule";
import Home from "../pages/Home";
import Students from "../pages/Students";
import Staff from "../pages/Staff";
import AddStudent from "../pages/AddStudent";
import ManageStudents from "../pages/ManageStudents";
import AddStaff from "../pages/AddStaff";
import ManageStaff from "../pages/ManageStaff";

const drawerWidth = 240;

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);
  const toggleStudents = () => {
    setOpen(true);
    setStudentsOpen(!studentsOpen);
  };
  const toggleStaff = () => {
    setOpen(true);
    setStaffOpen(!staffOpen);
  };

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

          {/* Students Section */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleStudents}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Students" />}
              </Box>
              {open && (studentsOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          <Collapse in={studentsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/students/add"
              >
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Student" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/students/manage"
              >
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Students" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Staff Section */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleStaff}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Staff" />}
              </Box>
              {open && (staffOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          <Collapse in={staffOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} component={Link} to="/staff/add">
                <ListItemIcon>
                  <PersonAddAltIcon />
                </ListItemIcon>
                <ListItemText primary="Add Staff" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                component={Link}
                to="/staff/manage"
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Staff" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/manage" element={<ManageStudents />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/add" element={<AddStaff />} />
          <Route path="/staff/manage" element={<ManageStaff />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
