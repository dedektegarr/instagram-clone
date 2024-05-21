"use server";
import { createUserAccount } from "@/API/auth";
import { createUser } from "@/API/user";
import { firebaseErrorMsg } from "@/helpers/firebase";
import { db } from "@/utils/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const name = formData.get("name");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name.trim() || !username.trim() || !email.trim() || !password.trim()) {
    return { error: "This field is required" };
  }

  if (!email.includes("@")) {
    return { error: "Please input a valid email" };
  }

  try {
    // Chekcing if username already exists
    const q = query(collection(db, "users"), where("username", "==", username));
    const snapshot = await getDocs(q);

    const usernameExists = [];
    snapshot.forEach((doc) => usernameExists.push(doc.data()));
    console.log(usernameExists);

    if (!usernameExists || usernameExists.length === 0) {
      // Create account
      const account = await createUserAccount(email, password);
      await createUser({ accountId: account.uid, name, username });

      return redirect("/");
    }

    // Throw an error if username exists
    const error = new Error("Username already exists");
    error.code = "auth/username-already-in-use";
    throw error;
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { error: firebaseErrorMsg(error.code) };
  }
}
