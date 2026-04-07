import { createContext } from "react";
import { DEFAULT_USER } from "./constants";

const UserContext = createContext({
  loggedInUser: DEFAULT_USER,
  setLoggedInUser: () => {},
});

export default UserContext;
