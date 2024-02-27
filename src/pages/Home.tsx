import bannerbackground from "../assets/wave.png";
import bannerimage from "../assets/pana.png";
import leftbannar from "../assets/pen tool.png";
import banner2nd from "../assets/pana2.png";
import wave from "../assets/wave2.png";
import Button from "../ui/Button";
import pana3 from "../assets/pana3.png";
import pana4 from "../assets/pana4.png";
import pen2 from "../assets/pen2.png";

const Home = () => {
  return (
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
      {/* first section */}
      <div className="flex justify-between items-center py-28 px-24 z-50 relative">
        <div className="w-[40%] z-50 flex flex-col justify-between items-center gap-10">
          <div className="space-y-4">
            <p className="z-50 text-4xl font-semibold leading-[50px]">
              Your user-friendly guide <br /> to track your
              <span className="text-linearOrange-100 font-bold"> AWS </span>
              services !
            </p>
            <p className=" text-stone-500 text-lg">
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

      {/* second section */}
      <div className="flex justify-between items-center py-28 pl-10 pr-32 z-50 relative mt-[200px] ">
        <img
          src={wave}
          alt="banner"
          className="absolute left-[-1px] w-[600px] top-0"
        />

        <img className="z-50 w-[500px]" src={banner2nd} alt="" />
        <div className="w-[45%] z-50 flex flex-col justify-between items-center gap-10">
          <div className="space-y-4">
            <p className="z-50 text-4xl font-semibold leading-[50px] tracking-widest">
              What is{" "}
              <span className="text-linearOrange-100 "> Cloud Tracker </span>?
            </p>
            <p className=" text-stone-500 text-lg">
              Cloud Tracker is a software solution designed to assist users of
              cloud services, such as AWS. It actively monitors and tracks
              payment details, offering tailored recommendations to minimize
              costs. With user-friendly dashboards, Cloud Tracker provides
              real-time insights into consumption patterns, allowing users to
              efficiently manage their resource usage, pinpointing when and
              where their cloud resources are utilized.
            </p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="z-50 mt-[100px]">
        <p className="text-[#1B5AA8] w-full text-center text-xl font-semibold">
          SERVICE WE PROVIDE
        </p>

        <div className="flex justify-between items-center py-28 pl-10 pr-32 z-50 relative mt-[10px] ">
          <img className="z-50 w-[600px]" src={pana3} alt="" />
          <div className="w-[45%] z-50 flex flex-col justify-between items-center gap-10">
            <div className="space-y-4">
              <p className="z-50 text-[42px] font-semibold leading-[50px] tracking-widest text-center">
                {" "}
                Educational Resources{" "}
              </p>
              <p className=" text-stone-500 text-xl">
                Dive into the world of AWS with our insightful blog section at
                Cloud Tracker . Whether you're a beginner or an expert, our
                educational resources cater to all level of familiarity with
                Amazon Web Services. Stay updated with the latest trends, tips,
                and tutorials, empowering you to navigate the AWS landscape
                confidently. Explore, learn, and elevate your cloud knowledge
                effortlessly.
              </p>
            </div>
            <Button size="xl">Explore Blog</Button>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className="flex justify-between items-center py-28 pl-32 pr-20 z-50 relative mt-[10px] mb-80">
        <div className="w-[45%] z-50 flex flex-col justify-between items-center gap-10">
          <div className="space-y-4">
            <p className="z-50 text-[42px] font-semibold leading-[50px] tracking-[5px]">
              {" "}
              Cost & usage tracking{" "}
            </p>
            <p className=" text-stone-500 text-xl">
              Optimize your AWS expenses effortlessly with Cloud Tracker. Our
              advanced recommendation system analyzes your usage patterns and
              suggests smart adjustments, such as resizing services to match
              actual needs and identifying idle or unused components for
              potential cost savings. Take control of your cloud costs and
              ensure efficient resource allocation with personalized
              recommendations from Cloud Tracker.
            </p>
          </div>
          <Button size="xl">Go To Dashboard</Button>
        </div>
        <img className="z-50 w-[450px]" src={pana4} alt="" />
        <img
          className="absolute bottom-[-130px] right-[-1px] z-0 w-[120px]"
          src={pen2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
