import bannerimage from "../../assets/pana.png";
import bannerbackground from "../../assets/wave.png";
import leftbannar from "../../assets/pen tool.png";
import Button from "../Button";

const HomeSection1 = () => {
  return (
    <div className="flex justify-between items-center py-28 px-24 z-50 relative">
      <img
        className="absolute top-20 left-0 w-[150px]"
        src={leftbannar}
        alt=""
      />
      <img
        className="absolute top-[-4px] right-0 z-0 w-[900px]"
        src={bannerbackground}
        alt=""
      />
      <div className="w-[40%] z-50 flex flex-col justify-between items-center gap-10">
        <div className="space-y-4">
          <p className="z-50 text-4xl font-semibold leading-[50px]">
            Your user-friendly guide <br /> to track your
            <span className="text-linearOrange-200 font-bold"> AWS </span>
            services !
          </p>
          <p className=" text-stone-500 text-lg">
            Track and manage your AWS service usage effortlessly.{" "}
            <span className="font-semibold">Cloud Tracker</span> provides
            real-time insights and detailed billing information, helping you
            optimize costs and enhance efficiency. Simplify your AWS experience.
          </p>
        </div>
        <Button size="xl">Get Started</Button>
      </div>
      <img className="z-50 w-[650px]" src={bannerimage} alt="" />
    </div>
  );
};

export default HomeSection1;
