import { Outlet } from "react-router-dom";
import DashBoardNav from "../ui/DashBoard/DashBoardNav";

const Dashboard = () => {
	return (
		<div className="h-[calc(100vh-60.5px)] py-12 px-2 flex">
			<DashBoardNav />
			<Outlet/>
		</div>
	);
};

export default Dashboard;
