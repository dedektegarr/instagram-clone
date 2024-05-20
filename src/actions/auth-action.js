"use server";

import { createUserAccount } from "@/api/auth";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const username = formData.get("username");
  const password = formData.get("password");

  if (!email.trim() || !name.trim() || !username.trim() || !password.trim()) {
    return { error: "This field is required" };
  }

  await createUserAccount(email, password);

  //   return "oke";
}
