import { useContext } from "react";
import { UserRoleContext } from "../context/UserRoleContext";

const useUserRole = () => {
  return useContext(UserRoleContext);
};

export default useUserRole;
