import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../../../public/logo.svg";

const Footer = () => {
  return (
    <div className=" bg-[#151515] ">
      <div className="car-container py-20">
        <footer className="footer   text-white justify-between ">
          <div className="space-y-4">
            <img src={logo} alt="" />
            <p className=" md:w-80">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.</p>
            <div className="flex gap-4 ">
              <FaGoogle className="w-5 h-5" />
              <FaInstagram className="w-5 h-5" />
              <FaLinkedinIn className="w-5 h-5" />
              <FaTwitter className="w-5 h-5" />
            </div>
          </div>
          <div>
            <span className="footer-title">About</span>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">Why Car Doctor</a>
            <a className="link link-hover">About</a>
          </div>
          <div>
            <span className="footer-title">Support</span>
            <a className="link link-hover"> Support Center</a>
            <a className="link link-hover"> Feedback</a>
            <a className="link link-hover"> Accesbility</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
