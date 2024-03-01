import { useEffect } from "react";
import { scrollToTop } from "../utils/helper";

const Dashboard = () => {
  useEffect(function () {
    scrollToTop();
  });

  return <div>Dashboard</div>;
};

export default Dashboard;
