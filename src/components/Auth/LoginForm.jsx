import Input from "../UI/Input";
import Button from "../UI/Button";

export default function LoginForm() {
  return (
    <form action="" className="w-full flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-3">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
      </div>
      <Button className="bg-blue-500 hover:bg-blue-600 w-full">Log in</Button>
    </form>
  );
}
