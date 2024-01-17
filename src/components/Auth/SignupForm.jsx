import { useEffect } from "react";
import useSignupWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const { signUpUserWithEmailAndPassword, loading, error } =
    useSignupWithEmailAndPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());

    const registeredUser = await signUpUserWithEmailAndPassword(formData);
    if (registeredUser) {
      e.target.reset();
      toast.success("Akun anda berhasil dibuat");
      navigate("/accounts");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <Input id="name" name="fullName" type="text" placeholder="Full name" />
      <Input id="username" name="username" type="text" placeholder="Username" />
      <Input id="email" name="email" type="email" placeholder="Email" />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
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
