import { createContext } from "react";
import { DEFAULT_USER } from "./constants";

const UserContext = createContext({
  loggedInUser: DEFAULT_USER,
});

export default UserContext;
