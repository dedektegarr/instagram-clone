import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext({
  user: {},
  token: null,
  setToken: () => {},
  setSignedUser: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const setSignedUser = () => {
    onAuthStateChanged(auth, async (user) => {
      const uid = user.uid;

      const userData = await getDoc(doc(db, "users", uid));
      setUser(userData.data());
    });
  };

  useEffect(() => {
    if (token) {
      setSignedUser();
    }
  }, []);

  const contextValue = {
    user,
    token,
    setToken,
    setSignedUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export { useAuthContext };
export default AuthContextProvider;
