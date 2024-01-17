import { useCallback, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const useSigninWithEmailAndPassword = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const signInUserWithEmailAndPassword = useCallback(
    async ({ email, password }) => {
      setLoading(true);

      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = await getDoc(doc(db, "users", userCredentials.user.uid));
        localStorage.setItem(
          "token",
          JSON.stringify(userCredentials.user.accessToken)
        );

        setUser(user.data());
        return user.data();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  );

  return { signInUserWithEmailAndPassword, user, loading, error };
};

export default useSigninWithEmailAndPassword;
