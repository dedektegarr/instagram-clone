import { useCallback, useState } from "react";
import { auth } from "../firebase/firebase";
import { useAuthContext } from "../context/AuthContext";

const useSingOut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setToken } = useAuthContext();

  const signOutUser = useCallback(async () => {
    setLoading(true);
    try {
      await auth.signOut();
      localStorage.removeItem("token");
      setToken(null);

      return true;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [auth]);

  return { signOutUser, loading, error };
};

export default useSingOut;
