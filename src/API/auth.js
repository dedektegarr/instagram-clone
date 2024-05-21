import app from "@/utils/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export async function createUserAccount(email, password) {
  const auth = getAuth(app);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }
}
