import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/Auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-dark-1 border text-center border-dark-2 px-8 pt-14 pb-10 rounded-md flex flex-col gap-6 items-center">
        <Image
          src="/static/logo.png"
          width={180}
          height={50}
          priority
          alt="Instagram Logo"
          style={{ width: "auto", height: 60 }}
        />

        <p className="text-gray-400 font-medium">
          Sign up to see photos and videos from your friends.
        </p>

        <div className="flex gap-3 w-full">
          <button className="border border-dark-2 hover:bg-dark-2 text-black rounded-md w-full p-3 text-sm text-center flex justify-center items-center">
            <Image
              src="/static/google-logo.png"
              width={20}
              height={20}
              alt="Google Icon"
            />
          </button>
          <button className="border border-dark-2 hover:bg-dark-2 text-black rounded-md w-full p-3 text-sm text-center flex justify-center items-center">
            <Image
              src="/static/facebook-logo.png"
              width={20}
              height={20}
              alt="Google Icon"
            />
          </button>
        </div>

        <div className="flex gap-2 items-center w-full">
          <div className="h-[1px] bg-dark-2 flex-1"></div>
          <div>OR</div>
          <div className="h-[1px] bg-dark-2 flex-1"></div>
        </div>

        <SignupForm />
      </div>
      <div className="bg-dark-1 border border-dark-2 p-6 rounded-md text-sm text-center">
        <span>
          Have an account ?{" "}
          <Link href="/login" className="text-blue-400">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
}
