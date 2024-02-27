import Button from "../Button";
import pana4 from "../../assets/pana4.png";
import pen2 from "../../assets/pen2.png";

const HomeSection4 = () => {
  return (
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
            actual needs and identifying idle or unused components for potential
            cost savings. Take control of your cloud costs and ensure efficient
            resource allocation with personalized recommendations from Cloud
            Tracker.
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
  );
};

export default HomeSection4;
