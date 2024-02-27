import waveFooter from "../assets/waveFooter.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import logoWhite from "../assets/logo_white.png";

const Footer = () => {
  return (
    <div className="bg-linearBlue-1 relative">
      <img
        src={waveFooter}
        alt="waveFooter"
        className="w-full absolute top-[-150px]"
      />

      <div className="flex justify-between items-center py-10 px-40 text-white">
        <div className="flex flex-col gap-4 items-center">
          <img src={logoWhite} alt="logo" />
          <p className="flex justify-center items-center gap-2 text-xl font-light">
            <span className="text-2xl"><FaCopyright/></span>
            <span>copy rights reserved</span>
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-2xl font-bold">Explore</p>
          <ul className="flex flex-col items-center gap-2 text-xl font-light">
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Dashboard</p>
            </li>
            <li>
              <p>About us</p>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-2xl font-bold">Contact us</p>
          <ul className="flex flex-col items-start gap-2 text-xl font-light">
            <li className="flex justify-center items-center gap-1">
              <CiLinkedin />
              <p>LinkedIn</p>
            </li>
            <li className="flex justify-center items-center gap-1">
              <FaGithub />
              <p>Github</p>
            </li>
            <li className="flex justify-center items-center gap-1">
              <MdOutlineMailOutline />
              <p>Email</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
