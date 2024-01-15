import React from "react";
import authFigure from "/assets/auth-figure.png";
import logo from "/assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");

  const authStatus = pathArr[pathArr.length - 1];

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-8 items-center p-8">
        <figure className="hidden md:block">
          <img src={authFigure} alt="Auth Figure" className="h-[580px]" />
        </figure>
        <div className="w-[350px]">
          <article className="w-full border border-slate-300 pt-10 px-10 pb-7 flex flex-col items-center rounded-md bg-white">
            <img src={logo} alt="logo" className="mb-8" />
            <Outlet />

            <div className="flex items-center w-full gap-3 my-5">
              <div className="h-[1px] bg-slate-300 flex-1 rounded-md"></div>
              <span className="text-sm font-medium text-slate-500">OR</span>
              <div className="h-[1px] bg-slate-300 flex-1 rounded-md"></div>
            </div>

            <a
              href="#"
              className="flex items-center gap-2 font-medium text-blue-800/90"
            >
              <FaFacebookSquare />
              Log in with Facebook
            </a>
            {authStatus === "accounts" && (
              <a href="#" className="text-xs mt-6">
                Forgot password?
              </a>
            )}
          </article>

          <div className="flex justify-center items-center border border-slate-300 rounded-md p-5 mt-2">
            <p>
              Don't have an account?{" "}
              <Link
                to={authStatus === "accounts" ? "signup" : ""}
                className="text-blue-700 font-medium"
              >
                {authStatus === "accounts" ? "Sign up" : "Log in"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
