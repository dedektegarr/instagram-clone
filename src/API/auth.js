import { auth } from "@/utils/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createUserAccount(email, password) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredentials.user;
  } catch (error) {
    throw error;
  }
}
