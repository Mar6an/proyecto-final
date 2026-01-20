import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    // Login SIMULADO para el hito
    if (email && pass) {
      const fakeToken = "fake-token";
      setToken(fakeToken);
      setUserData({ email });
      localStorage.setItem("token", fakeToken);
      navigate("/profile");
    }
  };

  const logout = () => {
    setToken("");
    setUserData({});
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        login,
        logout,
        email,
        pass,
        setEmail,
        setPass,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
