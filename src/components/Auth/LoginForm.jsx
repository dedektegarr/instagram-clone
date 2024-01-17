import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import useSigninWithEmailAndPassword from "../../hooks/useSigninWithEmailAndPassword";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const { signInUserWithEmailAndPassword, loading, error } =
    useSigninWithEmailAndPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());

    const signedUser = await signInUserWithEmailAndPassword(formData);

    if (signedUser) {
      e.target.reset();
      toast.success("Selamat datang " + signedUser.fullName);
      navigate("/");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Username or email"
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />

      <Button
        type="submit"
        className="w-full hover:bg-blue-500 mt-3"
        isLoading={loading}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
