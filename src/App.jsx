import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminLoginForm from "./pages/AdminLoginForm";
import { UserRoleProvider } from "./context/UserRoleContext";
import Schedule from "./pages/Schedule";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import ManageStudents from "./pages/ManageStudents";
import AddStaff from "./pages/AddStaff";
import ManageStaff from "./pages/ManageStaff";
import AddCourse from "./pages/AddCourse";
import ManageCourses from "./pages/ManageCourses";
import AddDepartment from "./pages/AddDepartment";
import ManageDepartments from "./pages/ManageDepartments";
import AddSubject from "./pages/AddSubject";
import ManageSubjects from "./pages/ManageSubjects";
import AddRoom from "./pages/AddRoom";
import ManageRooms from "./pages/ManageRooms";
import AddClass from "./pages/AddClass";
import ManageClasses from "./pages/ManageClasses";
import AddSchedule from "./pages/AddSchedule";
import ManageSchedules from "./pages/ManageSchedules";
import AddAttendance from "./pages/AddAttendance";
import ManageAttendances from "./pages/ManageAttendances";
import AddGrade from "./pages/AddGrade";
import ManageGrades from "./pages/ManageGrades";
import AddExam from "./pages/AddExam";
import ManageExams from "./pages/ManageExams";
import AddAnnouncement from "./pages/AddAnnouncement";
import ManageAnnouncements from "./pages/ManageAnnouncements";

const App = () => {
  return (
    <UserRoleProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login/admin" />} />
          <Route path="/login/admin" element={<AdminLoginForm />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="departments/add" element={<AddDepartment />} />
            <Route path="departments/manage" element={<ManageDepartments />} />
            <Route path="staff/add" element={<AddStaff />} />
            <Route path="staff/manage" element={<ManageStaff />} />
            <Route path="courses/add" element={<AddCourse />} />
            <Route path="courses/manage" element={<ManageCourses />} />
            <Route path="subjects/add" element={<AddSubject />} />
            <Route path="subjects/manage" element={<ManageSubjects />} />
            <Route path="rooms/add" element={<AddRoom />} />
            <Route path="rooms/manage" element={<ManageRooms />} />
            <Route path="classes/add" element={<AddClass />} />
            <Route path="classes/manage" element={<ManageClasses />} />
            <Route path="schedules/add" element={<AddSchedule />} />
            <Route path="schedules/manage" element={<ManageSchedules />} />
            <Route path="students/add" element={<AddStudent />} />
            <Route path="students/manage" element={<ManageStudents />} />
            <Route path="attendances/add" element={<AddAttendance />} />
            <Route path="attendances/manage" element={<ManageAttendances />} />
            <Route path="grades/add" element={<AddGrade />} />
            <Route path="grades/manage" element={<ManageGrades />} />
            <Route path="exams/add" element={<AddExam />} />
            <Route path="exams/manage" element={<ManageExams />} />
            <Route path="announcements/add" element={<AddAnnouncement />} />
            <Route
              path="announcements/manage"
              element={<ManageAnnouncements />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </UserRoleProvider>
  );
};

export default App;
