import Button from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

const SignupForm = () => {
  return (
    <form action="" className="w-full">
      <Input id="name" type="text" placeholder="Full name" />
      <Input id="username" type="text" placeholder="Username" />
      <Input id="email" type="email" placeholder="Email" />
      <Input id="password" type="password" placeholder="Password" />

      <Button className="w-full hover:bg-blue-500 mt-3">Sign Up</Button>
    </form>
  );
};

export default SignupForm;
