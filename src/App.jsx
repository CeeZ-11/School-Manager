import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminLoginForm from "./pages/AdminLoginForm";
import { UserRoleProvider } from "./context/UserRoleContext";

const App = () => {
  return (
    <UserRoleProvider>
      <HashRouter>
        <Routes>
          {/* Always start at the login page */}
          <Route path="/" element={<Navigate to="/login/admin" />} />

          <Route path="/login/admin" element={<AdminLoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </UserRoleProvider>
  );
};

export default App;
