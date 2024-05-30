"use client";

import { useFormState } from "react-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { signup } from "@/actions/auth-action";

export default function SignupForm() {
  const [state, formAction] = useFormState(signup, null);

  return (
    <form action={formAction} className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Full Name" type="text" name="name" />
        <Input placeholder="Username" type="text" name="username" />
        <Input placeholder="Password" type="password" name="password" />
      </div>

      <p className="text-xs font-light leading-relaxed text-gray-400">
        By signing up, you agree to our Terms , Privacy Policy and Cookies
        Policy .
      </p>

      <Button
        // disabled
        className="bg-blue-500 hover:bg-blue-600 disabled:hover:bg-blue-500 w-full"
      >
        Sign up
      </Button>

      {state?.error && <p className="text-sm text-red-500">{state.error}</p>}
    </form>
  );
}
