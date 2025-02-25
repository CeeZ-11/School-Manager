import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
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
  Business as BusinessIcon,
  LibraryBooks as LibraryBooksIcon,
  MenuBook as MenuBookIcon,
  MeetingRoom as MeetingRoomIcon,
  Apartment as ApartmentIcon,
  Class as ClassIcon,
  Event as EventIcon,
  CalendarToday as CalendarTodayIcon,
  HowToReg as HowToRegIcon,
  FactCheck as FactCheckIcon,
  Grade as GradeIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  NoteAdd as NoteAddIcon,
  Assignment as AssignmentIcon,
  Campaign as CampaignIcon,
  NotificationsActive as NotificationsActiveIcon,
} from "@mui/icons-material";
import Navbar from "./Navbar";

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
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [classesOpen, setClassesOpen] = useState(false);
  const [schedulesOpen, setSchedulesOpen] = useState(false);
  const [attendancesOpen, setAttendancesOpen] = useState(false);
  const [gradesOpen, setGradesOpen] = useState(false);
  const [examsOpen, setExamsOpen] = useState(false);
  const [announcementsOpen, setAnnouncementsOpen] = useState(false);

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
          <SidebarItem
            icon={<DashboardIcon />}
            text="Dashboard"
            link="/dashboard"
          />
          <SidebarItem
            icon={<CalendarIcon />}
            text="Schedule"
            link="/dashboard/schedule"
          />

          <SidebarDropdown
            icon={<BusinessIcon />}
            text="Departments"
            open={departmentsOpen}
            toggleOpen={() => setDepartmentsOpen(!departmentsOpen)}
            items={[
              {
                icon: <BusinessIcon />,
                text: "Add Department",
                link: "/dashboard/departments/add",
              },
              {
                icon: <ListAltIcon />,
                text: "Manage Departments",
                link: "/dashboard/departments/manage",
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
                link: "/dashboard/staff/add",
              },
              {
                icon: <PeopleIcon />,
                text: "Manage Staff",
                link: "/dashboard/staff/manage",
              },
            ]}
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
                link: "/dashboard/courses/add",
              },
              {
                icon: <ListAltIcon />,
                text: "Manage Courses",
                link: "/dashboard/courses/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<LibraryBooksIcon />}
            text="Subjects"
            open={subjectsOpen}
            toggleOpen={() => setSubjectsOpen(!subjectsOpen)}
            items={[
              {
                icon: <LibraryBooksIcon />,
                text: "Add Subject",
                link: "/dashboard/subjects/add",
              },
              {
                icon: <MenuBookIcon />,
                text: "Manage Subjects",
                link: "/dashboard/subjects/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<MeetingRoomIcon />}
            text="Rooms"
            open={roomsOpen}
            toggleOpen={() => setRoomsOpen(!roomsOpen)}
            items={[
              {
                icon: <MeetingRoomIcon />,
                text: "Add Room",
                link: "/dashboard/rooms/add",
              },
              {
                icon: <ApartmentIcon />,
                text: "Manage Rooms",
                link: "/dashboard/rooms/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<ClassIcon />}
            text="Classes"
            open={classesOpen}
            toggleOpen={() => setClassesOpen(!classesOpen)}
            items={[
              {
                icon: <ClassIcon />,
                text: "Add Class",
                link: "/dashboard/classes/add",
              },
              {
                icon: <MenuBookIcon />,
                text: "Manage Classes",
                link: "/dashboard/classes/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<EventIcon />}
            text="Schedules"
            open={schedulesOpen}
            toggleOpen={() => setSchedulesOpen(!schedulesOpen)}
            items={[
              {
                icon: <EventIcon />,
                text: "Add Schedule",
                link: "/dashboard/schedules/add",
              },
              {
                icon: <CalendarTodayIcon />,
                text: "Manage Schedules",
                link: "/dashboard/schedules/manage",
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
                link: "/dashboard/students/add",
              },
              {
                icon: <GroupIcon />,
                text: "Manage Students",
                link: "/dashboard/students/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<HowToRegIcon />}
            text="Attendances"
            open={attendancesOpen}
            toggleOpen={() => setAttendancesOpen(!attendancesOpen)}
            items={[
              {
                icon: <HowToRegIcon />,
                text: "Add Attendance",
                link: "/dashboard/attendances/add",
              },
              {
                icon: <FactCheckIcon />,
                text: "Manage Attendances",
                link: "/dashboard/attendances/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<GradeIcon />}
            text="Grades"
            open={gradesOpen}
            toggleOpen={() => setGradesOpen(!gradesOpen)}
            items={[
              {
                icon: <GradeIcon />,
                text: "Add Grades",
                link: "/dashboard/grades/add",
              },
              {
                icon: <AssignmentTurnedInIcon />,
                text: "Manage Grades",
                link: "/dashboard/grades/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<NoteAddIcon />}
            text="Exams"
            open={examsOpen}
            toggleOpen={() => setExamsOpen(!examsOpen)}
            items={[
              {
                icon: <NoteAddIcon />,
                text: "Add Exams",
                link: "/dashboard/exams/add",
              },
              {
                icon: <AssignmentIcon />,
                text: "Manage Exams",
                link: "/dashboard/exams/manage",
              },
            ]}
          />

          <SidebarDropdown
            icon={<CampaignIcon />}
            text="Announcements"
            open={announcementsOpen}
            toggleOpen={() => setAnnouncementsOpen(!announcementsOpen)}
            items={[
              {
                icon: <CampaignIcon />,
                text: "Add Announcements",
                link: "/dashboard/announcements/add",
              },
              {
                icon: <NotificationsActiveIcon />,
                text: "Manage Announcements",
                link: "/dashboard/announcements/manage",
              },
            ]}
          />
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
