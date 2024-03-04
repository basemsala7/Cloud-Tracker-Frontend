import waveFooter from "../assets/waveFooter.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import logoWhite from "../assets/logo_white.png";

const Footer = () => {
  return (
    <div className="relative bg-linearBlue-1">
      <img
        src={waveFooter}
        alt="waveFooter"
        className="absolute top-[-200px] -z-50 w-full mobile:top-[-80px]"
      />

      <div
        className="z-50 flex items-center justify-between px-40 pb-10 text-white
       tablet:px-16 mobile:px-4"
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src={logoWhite}
            alt="logo"
            draggable="false"
            className=" tablet:w-28 mobile:w-16"
          />
          <p className="flex items-center justify-center gap-2 text-xl font-light tablet:text-lg mobile:text-xs">
            <span className="text-2xl tablet:text-xl mobile:text-sm">
              <FaCopyright />
            </span>
            <span>copy rights reserved</span>
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-2xl font-bold tablet:text-xl mobile:text-sm">Explore</p>
          <ul className="flex flex-col items-center gap-2 text-xl font-light tablet:text-lg mobile:text-xs">
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
          <p className="text-2xl font-bold tablet:text-xl mobile:text-sm">Contact us</p>
          <ul className="flex flex-col items-start gap-2 text-xl font-light tablet:text-lg mobile:text-xs">
            <li className="flex items-center justify-center gap-1">
              <CiLinkedin />
              <p>LinkedIn</p>
            </li>
            <li className="flex items-center justify-center gap-1">
              <FaGithub />
              <p>Github</p>
            </li>
            <li className="flex items-center justify-center gap-1">
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
