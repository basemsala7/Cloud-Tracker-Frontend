import Intro from "../ui/Home/Intro";
import About from "../ui/Home/About";
import Service from "../ui/Home/Service";
import { useEffect } from "react";
import { scrollToTop } from "../utils/helper";

const Home = () => {

  useEffect(function () {
    scrollToTop();
  });
  
  return (
    <div>
      <Intro />
      <About />
      <Service />
    </div>
  );
};

export default Home;
