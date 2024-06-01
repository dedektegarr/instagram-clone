"use client";

import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const [state, setState] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setState(undefined);

    const { ok } = await signIn("credentials", {
      redirect: false,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      callbackUrl: "/",
    });

    if (!ok) {
      setLoading(false);
      return setState({ error: "Invalid credentials" });
    }

    setLoading(false);
    return router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="w-full flex flex-col gap-6 mt-6"
    >
      <div className="flex flex-col gap-3">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
      </div>
      <Button
        loading={loading}
        className="bg-blue-500 hover:bg-blue-600 w-full"
      >
        Log in
      </Button>

      {state?.error && <p className="text-sm text-red-500">{state.error}</p>}
    </form>
  );
}
