import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProviders";

const Social = ({ children }) => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlerGoogle = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  return (
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
        <Link className="text-primary text-xs link-hover" to={`/${children}`}>
          {children}
        </Link>
      </p>
    </div>
  );
};

export default Social;
