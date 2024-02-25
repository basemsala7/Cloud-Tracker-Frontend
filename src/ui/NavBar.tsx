import logo from "../assets/logo/logo_color2.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-24 bg-gradient-to-r from-linearBlue-3 to-linearBlue-1 via-linearBlue-2 text-white font-poppins font-semibold">
      <img
        src={logo}
        alt="logo"
        className="w-[70px] aspect-[4/3] p-0 object-fill"
      />
      <ul className="flex items-center gap-36 pt-0 mt-0">
        <li>Home</li>
        <li>Blog</li>
        <li>Dashboard</li>
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};

export default NavBar;
