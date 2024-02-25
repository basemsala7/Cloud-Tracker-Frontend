import logo from "../assets/logo/logo_color 2.svg";
import Button from "./Button";
const NavBar = () => {
  return (
    <nav className="w-full h-16 flex justify-between bg-gradient-to-r from-linearBlue-3 to-linearBlue-1 via-linearBlue-2 text-white font-poppins font-semibold">
      <img src={logo} alt="logo" className="w-[80px] h-[80px] p-0" />

      <div className="flex justify-between  w-4/5 m-auto pt-0">
        <ul className="flex items-center gap-36 pt-0 mt-0">
          <li>Home</li>
          <li>Blog</li>
          <li>Dashboard</li>
        </ul>
        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
