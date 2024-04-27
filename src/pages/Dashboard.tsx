import { Outlet } from "react-router-dom";
import DashBoardNav from "../ui/DashBoard/DashBoardNav";

const Dashboard = () => {
	return (
		<div className="flex h-[calc(100vh-60.5px)] justify-between px-2 pr-32 py-5 bg-stone-100">
			<DashBoardNav />
			<Outlet />
		</div>
	);
};

export default Dashboard;
