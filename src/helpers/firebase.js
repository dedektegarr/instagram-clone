export function firebaseErrorMsg(code) {
  if (code === "auth/email-already-in-use") return "Email already in use";
  if (code === "auth/username-already-in-use") return "Username already in use";
}
