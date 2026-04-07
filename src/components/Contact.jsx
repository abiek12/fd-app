import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <div className="contact-container h-dvh px-47 py-20">
      <h1 className="font-bold text-3xl mb-6">Contact Page</h1>
      <div className="user-name-input flex gap-2 items-center">
        <label className="text-lg font-normal" htmlFor="">
          User name:
        </label>
        <input
          type="text"
          className="username border border-solid px-2 py-1 rounded-lg"
          value={loggedInUser?.name}
          onChange={(e) => {
            setLoggedInUser({
              name: e.target.value,
              email: "input@gmail.com",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
