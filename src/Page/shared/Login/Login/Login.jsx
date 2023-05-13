import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../../assets/images/login/login.svg";
import { AuthContext } from "../../../../providers/AuthProviders";

const Login = () => {
  const { googleSignIn, signInUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";
  const handlerLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const verifyUser = result.user;
        if (!verifyUser?.emailVerified) {
          logOut();
          toast.error("Thank you for signing up for our service. To verify your email address.");
        } else {
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handlerGoogle = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
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
          <h2 className="text-center text-4xl text-accent font-bold mt-12">Login</h2>
          <form onSubmit={handlerLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Email</span>
              </label>
              <input type="email" name="email" placeholder="Your email" className="input input-bordered text-gray-800" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Password</span>
              </label>
              <input type="password" name="password" placeholder="Your password" className="input input-bordered text-gray-800" />
              <label className="label">
                <button type="button" className="label-text-alt link link-hover text-accent">
                  Forgot password?
                </button>
              </label>
            </div>
            {error && <span className="text-error text-xs mt-2">{error}</span>}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign In
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
                New to car doctor?
                <Link className="text-primary text-xs link-hover" to="/sign-up">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
