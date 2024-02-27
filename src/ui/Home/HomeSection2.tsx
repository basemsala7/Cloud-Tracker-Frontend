import banner2nd from "../../assets/pana2.png";
import wave from "../../assets/wave2.png";

const HomeSection2 = () => {
  return (
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
            <span className="text-linearOrange-200 "> Cloud Tracker </span>?
          </p>
          <p className=" text-stone-500 text-lg">
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
