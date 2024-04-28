import { Outlet } from "react-router-dom";
import DashBoardNav from "../ui/DashBoard/DashBoardNav";

const Dashboard = () => {
	return (
		<div className="flex h-[calc(100vh-60.5px)] justify-between bg-stone-100  px-2 py-5">
			<DashBoardNav />
			<div className="flex justify-center items-center w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
