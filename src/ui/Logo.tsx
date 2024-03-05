import logo from "../assets/logo/logo_color2.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      className="aspect-[4/3] h-auto w-[70px] object-fill p-0 mobile:w-[50px] tablet:w-[60px]"
      draggable="false"
      data-testid="logo"
    />
  );
};
export default Logo;
