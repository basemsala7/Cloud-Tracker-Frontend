import { NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { useState } from "react";

const NavBar = () => {
  const [startPosition, setStartPostion] = useState<string | null>(localStorage.getItem("x") ? localStorage.getItem("x") : "0");
  
  const HandleSelectPage = (x:string)=>{
    localStorage.setItem("x" , x) ; 
    setStartPostion(x) ;
  }

  return (
    <nav className="z-50 flex w-full items-center justify-between bg-gradient-to-r from-linearBlue-3 via-linearBlue-2 to-linearBlue-1 px-24 py-1 font-poppins font-semibold text-white">
      <Logo />
      <ul className=" relative mt-0 flex w-[450px] items-center justify-between pt-0">
        <li
          className="peer/item1 z-10 w-[150px] text-center"
          onClick={() => HandleSelectPage("0")}
        >
          <NavLink to="/">Home</NavLink>
        </li>

        <li
          className="peer/item2 z-10 w-[150px] text-center"
          onClick={() => HandleSelectPage("150")}
        >
          <NavLink to="/blog">Blog</NavLink>
        </li>

        <li
          className="peer/item3 z-10 w-[150px] text-center"
          onClick={() => HandleSelectPage("300")}
        >
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li
          id="activeLink"
          className={`absolute z-0 ${startPosition === "0" ? "left-0" : startPosition === "150" ? "left-[150px]" : "left-[300px]"} 
          h-[30px] w-[150px] rounded-full border-4 border-linearOrange-200 transition-all 
          duration-500 peer-hover/item1:left-0 
          peer-hover/item2:left-[150px] peer-hover/item3:left-[300px]`}
        ></li>

      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};

export default NavBar;
