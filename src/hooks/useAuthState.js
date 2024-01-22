import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const useAuthState = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const listener = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          const signedUser = {
            credentials: user,
            data: docSnap.data(),
          };

          setUser(signedUser);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    });

    return () => {
      listener();
    };
  }, [auth]);

  return { user, loading };
};

export default useAuthState;
