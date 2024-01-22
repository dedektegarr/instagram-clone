import useLogin from "../../hooks/useLogin";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import useFormValidation from "../../hooks/useFormValidation";
import { useEffect } from "react";

// INITIAL STATE AND VALIDATION RULES
const initialState = {
  email: "",
  password: "",
};

const validate = (inputs) => {
  let errors = {};

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

const LoginForm = () => {
  const { login, user, error: authError, loading } = useLogin();
  const {
    handleSubmit,
    inputs,
    setInputs,
    handleChangeInputs,
    errors: formErrors,
  } = useFormValidation(initialState, validate, () => login(inputs));

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && !authError && user) {
      setInputs(initialState);
    }
  }, [formErrors, authError, user]);

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Username or email"
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
        error={formErrors?.email}
        value={inputs.email}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
        error={formErrors?.password}
        value={inputs.password}
      />

      <Button
        type="submit"
        className="w-full hover:bg-blue-500 mt-3"
        isLoading={loading}
        disabled={loading}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
