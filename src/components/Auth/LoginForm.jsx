import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <Input id="email" type="email" placeholder="Username or email" />
      <Input id="password" type="password" placeholder="Password" />

      <Button type="submit" className="w-full hover:bg-blue-500 mt-3">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
