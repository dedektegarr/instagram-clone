"use server";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const username = formData.get("username");
  const name = formData.get("name");
  const password = formData.get("password");

  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify({ email, username, name, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return { error: data.message };
  }
}
