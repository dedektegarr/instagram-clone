import { useCallback, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const useSignupWithEmailAndPassword = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const signUpUserWithEmailAndPassword = useCallback(
    async ({ email, password, username, fullName }) => {
      setLoading(true);

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (userCredentials) {
          const newUser = {
            uid: userCredentials.user.uid,
            email,
            fullName,
            profilePicUrl: "",
            posts: [],
            followers: [],
            following: [],
            username,
            createdAt: +userCredentials.user.metadata.createdAt,
            bio: "",
          };

          await setDoc(doc(db, "users", userCredentials.user.uid), newUser);

          setUser(newUser);
          return newUser;
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  );

  return { signUpUserWithEmailAndPassword, user, loading, error };
};

export default useSignupWithEmailAndPassword;
