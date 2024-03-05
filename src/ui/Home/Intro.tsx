import bannerimage from "../../assets/pana.png";
import bannerbackground from "../../assets/wave.png";
import leftbannar from "../../assets/pen tool.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-50 flex items-center justify-between px-24 py-28">
      <img
        className="absolute left-[-1px] top-20 w-[150px]"
        src={leftbannar}
        alt=""
      />
      <img
        className="absolute right-0 top-[-4px] z-0 w-[900px]"
        src={bannerbackground}
        alt=""
      />
      <div className="z-50 flex w-[40%] flex-col items-center justify-between gap-10">
        <div className="space-y-4">
          <p className="z-50 text-4xl font-semibold leading-[50px]">
            Your user-friendly guide <br /> to track your
            <span className="font-bold text-linearOrange-200"> AWS </span>
            services !
          </p>
          <p className=" text-lg text-stone-500">
            Track and manage your AWS service usage effortlessly.{" "}
            <span className="font-semibold">Cloud Tracker</span> provides
            real-time insights and detailed billing information, helping you
            optimize costs and enhance efficiency. Simplify your AWS experience.
          </p>
        </div>
        <Button size="xl" onClick={() => navigate("/signIn")}>
          Get Started
        </Button>
      </div>
      <img className="z-50 w-[650px]" src={bannerimage} alt="" />
    </div>
  );
};

export default Intro;
