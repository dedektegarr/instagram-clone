"use client";

import { useFormState } from "react-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { login } from "@/actions/auth-action";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, null);

  return (
    <form action={formAction} className="w-full flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-3">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
      </div>
      <Button className="bg-blue-500 hover:bg-blue-600 w-full">Log in</Button>

      {state?.error && <p className="text-sm text-red-500">{state.error}</p>}
    </form>
  );
}
