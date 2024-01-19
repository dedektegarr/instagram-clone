import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const useLogin = () => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    setLoading(true);

    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (credentials) {
        const docRef = doc(db, "users", credentials.user.uid);
        const docSnap = await getDoc(docRef);

        const userData = {
          credentials: credentials.user,
          user: docSnap.data(),
        };

        toast.success(`Selamat datang kembali ${userData.user.fullName}`);
        setUser(userData);
        return userData;
      }
    } catch (error) {
      let message = error.message;

      if (error.code === "auth/invalid-credential") {
        message = "Email atau password tidak sesuai";
      }

      toast.error(message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { login, user, loading, error };
};

export default useLogin;
