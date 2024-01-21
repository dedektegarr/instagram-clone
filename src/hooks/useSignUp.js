import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";

const useSignUp = () => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async ({ fullName, username, email, password }) => {
    setLoading(true);

    try {
      // check if username already exist
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      const usernameExist = querySnapshot.docs[0]?.data();

      if (usernameExist) {
        const error = new Error();
        error.code = "auth/username-already-in-use";
        throw error;
      }

      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (credentials && !usernameExist) {
        const newUser = {
          uid: credentials.user.uid,
          fullName,
          username,
          email,
          bio: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: +credentials.user.metadata.createdAt,
        };

        await setDoc(doc(db, "users", credentials.user.uid), newUser);

        const userData = {
          credentials: credentials.user,
          user: newUser,
        };

        setUser(userData);
        toast.success(`Berhasil membuat akun`);
        setError(null);
        return userData;
      }
    } catch (error) {
      let message = error.message;

      if (error.code === "auth/email-already-in-use") {
        message = "Email sudah terdaftar";
      }
      if (error.code === "auth/username-already-in-use") {
        message = "Username sudah terdaftar";
      }

      toast.error(message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, user, loading, error };
};

export default useSignUp;
