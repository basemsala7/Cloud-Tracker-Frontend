import bannerbackground from "../assets/wave.png";
import bannerimage from "../assets/pana.png";
import leftbannar from "../assets/pen tool.png";
import Button from "../ui/Button";

const Home = () => {
  return (
    <div>
      <div>
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
        <div className="flex justify-between items-center py-28 px-24 z-50">
          <div className="w-[45%] z-50 flex flex-col justify-between items-center gap-10">
            <div className="space-y-4">
              <p className="z-50 text-4xl font-semibold leading-[50px]">
                Your user-friendly guide <br /> to track your
                <span className="text-linearOrange-100 font-bold"> AWS </span>
                services !
              </p>
              <p className=" text-stone-500">
                Track and manage your AWS service usage effortlessly.{" "}
                <span className="font-semibold">Cloud Tracker</span> provides
                real-time insights and detailed billing information, helping you
                optimize costs and enhance efficiency. Simplify your AWS
                experience.
              </p>
            </div>
            <Button size="xl">Get Started</Button>
          </div>
          <img className="z-50 w-[650px]" src={bannerimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
