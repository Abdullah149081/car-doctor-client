
import { Link, useRouteError } from "react-router-dom";
import errorPic from "../../../assets/images/error/error.png";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div className="h-screen flex flex-col car-container  items-center justify-center">
      <img src={errorPic} alt="" />
      <p className=" text-red-500 font-medium text-2xl my-8">
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to="/">
        <button className="btn car-btn " type="button">
          Back Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
