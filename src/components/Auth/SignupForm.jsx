import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

const SignupForm = () => {
  return (
    <form action="" className="w-full">
      <Input id="name" name="fullName" type="text" placeholder="Full name" />
      <Input id="username" name="username" type="text" placeholder="Username" />
      <Input id="email" name="email" type="email" placeholder="Email" />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />

      <Button className="w-full hover:bg-blue-500 mt-3" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
