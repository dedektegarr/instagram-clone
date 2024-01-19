import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

const LoginForm = () => {
  return (
    <form action="" className="w-full">
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
        // isLoading={loading}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
