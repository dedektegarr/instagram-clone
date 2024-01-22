import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import useAuthState from "../hooks/useAuthState";

const AuthContext = createContext({
  user: null,
  pageLoading: false,
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { user: signedUser, loading: pageLoading } = useAuthState();

  useEffect(() => {
    if (signedUser) {
      setUser(signedUser);
    }
  }, [signedUser]);

  const contextValue = {
    user,
    pageLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthContextProvider;
