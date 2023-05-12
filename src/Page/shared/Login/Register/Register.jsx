import React, { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import login from "../../../../assets/images/login/login.svg";
import { AuthContext } from "../../../../providers/AuthProviders";

const Register = () => {
  const { googleSignIn, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerRegister = (e) => {
    e.preventDefault();
  };

  const handlerGoogle = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };
  return (
    <div className="min-h-screen car-container">
      <div className="mt-8 lg:mt-0  flex justify-center gap-12 flex-col-reverse lg:flex-row">
        <div>
          <img src={login} alt={login} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
          <h2 className="text-center text-4xl text-accent font-bold mt-12">Register</h2>
          <form onSubmit={handlerRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Name</span>
              </label>
              <input type="text" placeholder="Your name" className="input input-bordered text-gray-800" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Email</span>
              </label>
              <input type="text" placeholder="Your email" className="input input-bordered text-gray-800" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Password</span>
              </label>
              <input type="text" placeholder="Your password" className="input input-bordered text-gray-800" />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <div className="text-center mt-4 text-accent font-bold">
              <h2 className="">Or Sign In with</h2>
              <div className="flex justify-center items-center gap-4 mt-4 divide-x-2 divide-y-2 divide-orange-500 divide-dotted  ">
                <span />
                <button onClick={handlerGoogle} type="button" className="btn rounded-full bg-[#F5F5F8] border-0 ">
                  <FcGoogle className="w-5 h-5" />
                </button>

                <button type="button" className="btn rounded-full bg-[#F5F5F8] border-0">
                  <FaLinkedinIn className="w-5 h-5 text-gray-900" />
                </button>

                <button type="button" className="btn rounded-full bg-[#F5F5F8] border-0">
                  <FaFacebookF className="w-5 h-5 text-gray-900" />
                </button>
              </div>
              <p className="mt-4">
                Already have an account?
                <Link className="text-primary text-xs link-hover" to="/sign-in">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
