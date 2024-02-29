import Button from "./Button";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="z-50 flex w-full items-center justify-between bg-gradient-to-r from-linearBlue-3 via-linearBlue-2 to-linearBlue-1 px-24 py-1 font-poppins font-semibold text-white">
      <Logo />
      <ul className="mt-0 flex items-center gap-36 pt-0">
        <li>Home</li>
        <li>Blog</li>
        <li>Dashboard</li>
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};

export default NavBar;
