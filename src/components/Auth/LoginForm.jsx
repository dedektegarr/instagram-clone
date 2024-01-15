import Button from "../Button/Button";
import { Input } from "../Input/Input";

const LoginForm = () => {
  return (
    <form action="" className="w-full">
      <Input id="email" type="email" placeholder="Username or email" />
      <Input id="password" type="password" placeholder="Password" />

      <Button className="w-full hover:bg-blue-500 mt-3">Log in</Button>
    </form>
  );
};

export default LoginForm;
