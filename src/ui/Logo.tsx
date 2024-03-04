import logo from "../assets/logo/logo_color2.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      className="aspect-[4/3] h-auto w-[70px] object-fill p-0 tablet:w-[60px] mobile:w-[50px]"
      draggable="false"
    />
  );
};
export default Logo;
