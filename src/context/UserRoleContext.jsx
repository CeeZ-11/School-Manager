import { createContext, useState } from "react";

const UserRoleContext = createContext();

const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("Admin");

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export { UserRoleContext, UserRoleProvider };
