import { useEffect } from "react";
import useFormValidation from "../../hooks/useFormValidation";
import useSignUp from "../../hooks/useSignUp";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

// INITIAL FORM STATE AND VALIDATION RULES
const initialState = {
  fullName: "",
  username: "",
  email: "",
  password: "",
};

const validate = (inputs) => {
  let errors = {};

  if (!inputs.fullName.trim()) {
    errors.fullName = "Masukkan nama lengkap";
  }
  if (!inputs.username.trim()) {
    errors.username = "Masukkan username";
  }
  if (!inputs.email.trim()) {
    errors.email = "Masukkan email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)) {
    errors.email = "Format email tidak valid";
  }
  if (!inputs.password.trim()) {
    errors.password = "Masukkan password";
  } else if (inputs.password.length < 8) {
    errors.password = "Password harus memiliki minimal 8 karakter";
  }

  return errors;
};

const SignupForm = () => {
  const { signUp, user, error: signUpError, loading } = useSignUp();
  const {
    inputs,
    handleChangeInputs,
    handleSubmit,
    setInputs,
    errors: formErrors,
  } = useFormValidation(initialState, validate, () => signUp(inputs));

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && !signUpError && user) {
      setInputs(initialState);
    }
  }, [formErrors, signUpError, user]);

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <Input
        id="name"
        name="fullName"
        type="text"
        placeholder="Full name"
        value={inputs.fullName}
        error={formErrors?.fullName}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        value={inputs.username}
        error={formErrors?.username}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={inputs.email}
        error={formErrors?.email}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={inputs.password}
        error={formErrors?.password}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />

      <Button
        className="w-full hover:bg-blue-500 mt-3"
        type="submit"
        isLoading={loading}
        disabled={loading}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
