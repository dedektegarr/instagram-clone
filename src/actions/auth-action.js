"use server";
import { createUserAccount } from "@/API/auth";
import { createUser } from "@/API/user";
import { firebaseErrorMsg } from "@/helpers/firebase";
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
    const account = await createUserAccount(email, password);
    await createUser({ accountId: account.uid, name, username });

    return redirect("/");
  } catch (error) {
    return { error: firebaseErrorMsg(error.code) };
  }
}
