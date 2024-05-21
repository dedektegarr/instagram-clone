import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="max-w-md lg:max-w-6xl mx-auto my-8 p-4">
      <div className="flex items-center gap-10">
        <div className="hidden lg:flex flex-1">
          <figure className="ml-auto">
            <Image
              src="/static/auth-figure.png"
              width={350}
              height={600}
              priority
              alt="Figure"
            />
          </figure>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
