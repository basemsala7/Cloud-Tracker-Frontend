import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const NavBar = () => {
  const navigate = useNavigate() ; 
  const currentPage = localStorage.getItem("activePage") ; 

  const [startPosition, setStartPostion] = useState<string | null>(
    currentPage
      ? currentPage
      : "home",
  );

  useEffect(function(){
    setStartPostion(currentPage) ; 
  } , [currentPage])

  const handleSelectPage = (x: string) => {
    localStorage.setItem("activePage", x);
    setStartPostion(x);
  };

  const handleClickLogo = () =>{
    handleSelectPage("home") ; 
    navigate("/") ; 
  };

  return (
    <nav className="z-50 flex w-full items-center justify-between bg-gradient-to-r from-linearBlue-3 via-linearBlue-2 to-linearBlue-1 px-24 py-1 font-poppins font-semibold text-white">
      <div onClick={handleClickLogo} className="cursor-pointer">
        <Logo />
      </div>
      <div className=" relative mt-0 flex w-[450px] items-center justify-between pt-0">
        <NavLink
          to="/"
          className="peer/item1 z-10 w-[150px] text-center"
          onClick={() => handleSelectPage("home")}
        >
          Home
        </NavLink>

        <NavLink
          to="/blog"
          className="peer/item2 z-10 w-[150px] text-center"
          onClick={() => handleSelectPage("blog")}
        >
          Blog
        </NavLink>

        <NavLink
          to="/dashboard"
          className="peer/item3 z-10 w-[150px] text-center"
          onClick={() => handleSelectPage("dashboard")}
        >
          Dashboard
        </NavLink>

        <div
          id="activeLink"
          className={`absolute z-0 ${startPosition === "home" ? "left-0" : startPosition === "blog" ? "left-[150px]" : "left-[300px]"} 
          h-[30px] w-[150px] rounded-full border-4 border-linearOrange-200 transition-all 
          duration-500 peer-hover/item1:left-0 
          peer-hover/item2:left-[150px] peer-hover/item3:left-[300px]`}
        ></div>
      </div>

      <Link to="/signIn">
        <Button>Sign In</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
