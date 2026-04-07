import { createContext } from "react";
import { DEFAULT_USER } from "./constants";

const userContext = createContext({
  loggedInUser: DEFAULT_USER,
});

export default userContext;
