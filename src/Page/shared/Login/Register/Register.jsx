import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import login from "../../../../assets/images/login/login.svg";
import { AuthContext } from "../../../../providers/AuthProviders";
import Social from "../Social/Social";

const Register = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserData, validationEmail, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setConfirmError("Confirm your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        updateUserData(newUser, name);
        validationEmail(newUser);
        logOut();
        toast.success("Check your email for verification");
        navigate("/sign-in");
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPasswordValue(passwordInput);
    if (passwordInput.length < 8) {
      setPasswordError("Use 8 characters or more for your password");
    } else if (!/(?=.*[a-z])/.test(passwordInput)) {
      setPasswordError("should contain at least one lower case");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    const confirm = e.target.value;
    if (passwordValue !== confirm) {
      setConfirmError("Those passwords didn’t match. Try again.");
    } else {
      setConfirmError("");
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen car-container lg:pt-4 ">
      <div className="mt-8 lg:mt-0   flex justify-center gap-12 flex-col-reverse lg:flex-row">
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
              <input type="text" placeholder="Your name" name="name" className="input input-bordered text-gray-800" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Email</span>
              </label>
              <input type="email" placeholder="Your email" name="email" className="input input-bordered text-gray-800" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Password</span>
              </label>
              <input
                onChange={handlePassword}
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={passwordValue}
                name="password"
                className={`input input-bordered text-gray-800 ${passwordError && "border-2 border-red-500 "}`}
              />
              {passwordError && <span className="text-error text-xs mt-4">{passwordError}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-accent font-medium">Confirm Password</span>
              </label>
              <input
                onChange={handleConfirmPassword}
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                name="confirm"
                className={`input input-bordered text-gray-800 ${confirmError && "border-2 border-red-500"}`}
              />
              {confirmError && <span className="text-error text-xs mt-4">{confirmError}</span>}
            </div>
            {error && <span className="text-error text-xs mt-2">{error}</span>}
            <button onClick={handleShowPassword} className="text-gray-900 font-bold text-start" type="button">
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <Social>sign-in</Social>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
