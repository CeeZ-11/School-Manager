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
  CalendarMonth as CalendarIcon,
  ExpandLess,
  ExpandMore,
  PersonAdd as PersonAddIcon,
  Group as GroupIcon,
  PersonAddAlt as PersonAddAltIcon,
  People as PeopleIcon,
  Bookmark as BookmarkIcon,
  ListAlt as ListAltIcon,
  School as SchoolIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import Navbar from "./Navbar";
import Schedule from "../pages/Schedule";
import Home from "../pages/Home";
import AddStudent from "../pages/AddStudent";
import ManageStudents from "../pages/ManageStudents";
import AddStaff from "../pages/AddStaff";
import ManageStaff from "../pages/ManageStaff";
import AddCourse from "../pages/AddCourse";
import ManageCourses from "../pages/ManageCourses";

const drawerWidth = 240;

const SidebarItem = ({ icon, text, link, onClick }) => (
  <ListItem disablePadding>
    <ListItemButton component={Link} to={link} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
);

const SidebarDropdown = ({ icon, text, open, toggleOpen, items }) => (
  <>
    <ListItem disablePadding>
      <ListItemButton onClick={toggleOpen}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </List>
    </Collapse>
  </>
);

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const expandSidebar = () => setOpen(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar toggleDrawer={() => setOpen(!open)} />
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
          <SidebarItem icon={<DashboardIcon />} text="Dashboard" link="/" />
          <SidebarItem
            icon={<CalendarIcon />}
            text="Schedule"
            link="/schedule"
          />

          <SidebarDropdown
            icon={<BookmarkIcon />}
            text="Courses"
            open={coursesOpen}
            toggleOpen={() => setCoursesOpen(!coursesOpen)}
            items={[
              {
                icon: <BookmarkIcon />,
                text: "Add Course",
                link: "/courses/add",
                onClick: expandSidebar,
              },
              {
                icon: <ListAltIcon />,
                text: "Manage Courses",
                link: "/courses/manage",
                onClick: expandSidebar,
              },
            ]}
          />

          <SidebarDropdown
            icon={<SchoolIcon />}
            text="Students"
            open={studentsOpen}
            toggleOpen={() => setStudentsOpen(!studentsOpen)}
            items={[
              {
                icon: <PersonAddIcon />,
                text: "Add Student",
                link: "/students/add",
                onClick: expandSidebar,
              },
              {
                icon: <GroupIcon />,
                text: "Manage Students",
                link: "/students/manage",
                onClick: expandSidebar,
              },
            ]}
          />

          <SidebarDropdown
            icon={<PersonIcon />}
            text="Staff"
            open={staffOpen}
            toggleOpen={() => setStaffOpen(!staffOpen)}
            items={[
              {
                icon: <PersonAddAltIcon />,
                text: "Add Staff",
                link: "/staff/add",
                onClick: expandSidebar,
              },
              {
                icon: <PeopleIcon />,
                text: "Manage Staff",
                link: "/staff/manage",
                onClick: expandSidebar,
              },
            ]}
          />
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/courses/add" element={<AddCourse />} />
          <Route path="/courses/manage" element={<ManageCourses />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/manage" element={<ManageStudents />} />
          <Route path="/staff/add" element={<AddStaff />} />
          <Route path="/staff/manage" element={<ManageStaff />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
