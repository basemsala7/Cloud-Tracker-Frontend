import ColumnChart from "../../Features/DashBoard/ColumnChart";
import LineChart from "../../Features/DashBoard/LineChart";
import PieChart from "../../Features/DashBoard/PieChart";

const AllCharts = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-2  gap-x-4">
			<div className="col-span-2 h-[50px]">
				<LineChart />
			</div>
			<div>
				<ColumnChart />
			</div>
			<div className="">
				<PieChart />
			</div>
		</div>
	);
};
export default AllCharts;
