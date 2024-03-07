import Button from "../Button";

import pana3 from "../../assets/pana3.png";
import pana4 from "../../assets/pana4.png";
import pen2 from "../../assets/pen2.png";
import { useNavigate } from "react-router-dom";

const HomeSection3 = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <>
      {/* section 1 */}
      <div className="z-50 mt-[100px]">
        <p className="w-full text-center text-xl font-semibold text-[#1B5AA8]">
          SERVICE WE PROVIDE
        </p>

        <div className="relative z-50 mt-[10px] flex items-center justify-between py-28 pl-10 pr-32 mobile:flex-col mobile:gap-12 mobile:px-8 tablet:flex-col tablet:gap-12 tablet:px-24">
          <img className="z-50 w-[600px] tablet:w-[450px] mobile:w-[300px]" src={pana3} alt="" />
          <div className="z-50 flex w-[45%] flex-col items-center justify-between gap-10 mobile:w-full tablet:w-full">
            <div className="space-y-4">
              <p className="z-50 text-4xl font-semibold leading-[50px] tracking-[5px] mobile:text-center mobile:text-2xl mobile:tracking-wide tablet:text-center tablet:text-3xl">
                {" "}
                Educational Resources{" "}
              </p>
              <p className=" text-xl text-stone-500 mobile:text-sm">
                Dive into the world of AWS with our insightful blog section at
                Cloud Tracker . Whether you're a beginner or an expert, our
                educational resources cater to all level of familiarity with
                Amazon Web Services. Stay updated with the latest trends, tips,
                and tutorials, empowering you to navigate the AWS landscape
                confidently. Explore, learn, and elevate your cloud knowledge
                effortlessly.
              </p>
            </div>
            <Button size="xl" onClick={() => handleNavigate("blog")}>
              Explore Blog
            </Button>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="relative z-50 mb-80 mobile:mb-64 mt-[10px] flex items-center justify-between py-28 pl-32 pr-20 tablet:flex-col-reverse tablet:gap-12 tablet:px-24 mobile:flex-col-reverse mobile:gap-12 mobile:px-8">
        <div className="z-50 flex w-[45%] flex-col items-center justify-between gap-10 mobile:w-full tablet:w-full">
          <div className="space-y-4">
            <p className="z-50 text-4xl font-semibold leading-[50px] tracking-[5px] mobile:text-center mobile:text-2xl mobile:tracking-wide tablet:text-center tablet:text-3xl">
              {" "}
              Cost & usage tracking{" "}
            </p>
            <p className=" text-xl text-stone-500 mobile:text-sm">
              Optimize your AWS expenses effortlessly with Cloud Tracker. Our
              advanced recommendation system analyzes your usage patterns and
              suggests smart adjustments, such as resizing services to match
              actual needs and identifying idle or unused components for
              potential cost savings. Take control of your cloud costs and
              ensure efficient resource allocation with personalized
              recommendations from Cloud Tracker.
            </p>
          </div>
          <Button size="xl" onClick={() => handleNavigate("dashboard")}>
            Go To Dashboard
          </Button>
        </div>
        <img className="z-50 w-[450px] tablet:w-[350px] mobile:w-[250px]" src={pana4} alt="" />
        <img
          className="absolute bottom-[-130px] right-[-1px] z-0 w-[120px] tablet:w-[80px] mobile:w-[70px]"
          src={pen2}
          alt=""
        />
      </div>
    </>
  );
};

export default HomeSection3;
