import { HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <HashRouter>
      <Dashboard />
    </HashRouter>
  );
};

export default App;
