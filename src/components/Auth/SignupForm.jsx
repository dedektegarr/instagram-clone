import useFormValidation from "../../hooks/useFormValidation";
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

  if (!inputs.fullName) {
    errors.fullName = "Masukkan nama lengkap";
  }
  if (!inputs.username) {
    errors.username = "Masukkan username";
  }
  if (!inputs.email) {
    errors.email = "Masukkan email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)) {
    errors.email = "Format email tidak valid";
  }
  if (!inputs.password) {
    errors.password = "Masukkan password";
  } else if (inputs.password.length < 8) {
    errors.password = "Password harus memiliki minimal 8 karakter";
  }

  return errors;
};

const SignupForm = () => {
  const { handleChangeInputs, handleSubmit, errors } = useFormValidation(
    initialState,
    validate
  );

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <Input
        id="name"
        name="fullName"
        type="text"
        placeholder="Full name"
        error={errors?.fullName}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        error={errors?.username}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        error={errors?.email}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        error={errors?.password}
        onChange={(e) => handleChangeInputs(e.target.name, e.target.value)}
      />

      <Button className="w-full hover:bg-blue-500 mt-3" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
