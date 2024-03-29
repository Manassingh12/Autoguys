import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLodding, setIsLodding] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  // logout

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //jwt authentication

  const userAuthentication = async () => {
    try {
      setIsLodding(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLodding(false);
      }else{
        setIsLodding(false);
      }
    } catch (error) {
      console.log("error fetching user data");
    }
  };
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        updateUser ,
        authorizationToken,
        isLodding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useauth used outside of the Provider");
  }
  return authContextValue;
};
