import pana3 from "../../assets/pana3.png";
import Button from "../Button";

const HomeSection3 = () => {
  return (
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
  );
};

export default HomeSection3;
