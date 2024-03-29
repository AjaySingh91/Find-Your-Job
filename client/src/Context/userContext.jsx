import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const Logout = async () => {
    try {
      const response = await fetch(
        "https://find-your-job.onrender.com/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (response.status === 200) {
        setUser(null); // Update the user state upon successful logout
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, Logout }}>
      {children}
    </UserContext.Provider>
  );
};
