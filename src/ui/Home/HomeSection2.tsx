import banner2nd from "../../assets/pana2.png";
import wave from "../../assets/wave2.png";

const HomeSection2 = () => {
  return (
    <div className="relative z-50 mt-[200px] flex items-center justify-between py-28 pl-10 pr-32 ">
      <img
        src={wave}
        alt="banner"
        className="absolute left-[-1px] top-0 w-[600px]"
      />

      <img className="z-50 w-[500px]" src={banner2nd} alt="" />
      <div className="z-50 flex w-[45%] flex-col items-center justify-between gap-10">
        <div className="space-y-4">
          <p className="z-50 text-4xl font-semibold leading-[50px] tracking-widest">
            What is{" "}
            <span className="text-linearOrange-200 "> Cloud Tracker </span>?
          </p>
          <p className=" text-lg text-stone-500">
            Cloud Tracker is a software solution designed to assist users of
            cloud services, such as AWS. It actively monitors and tracks payment
            details, offering tailored recommendations to minimize costs. With
            user-friendly dashboards, Cloud Tracker provides real-time insights
            into consumption patterns, allowing users to efficiently manage
            their resource usage, pinpointing when and where their cloud
            resources are utilized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
