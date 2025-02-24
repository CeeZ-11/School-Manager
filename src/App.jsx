import { HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { UserRoleProvider } from "./context/UserRoleContext";

const App = () => {
  return (
    <UserRoleProvider>
      <HashRouter>
        <Dashboard />
      </HashRouter>
    </UserRoleProvider>
  );
};

export default App;
