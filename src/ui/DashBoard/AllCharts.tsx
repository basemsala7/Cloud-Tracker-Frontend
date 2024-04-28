import { useNavigate } from "react-router-dom";
import ColumnChart from "../../Features/DashBoard/ColumnChart";
import LineChart from "../../Features/DashBoard/LineChart";
import PieChart from "../../Features/DashBoard/PieChart";

const AllCharts = () => {
	const navigate = useNavigate() ;

	return (
		<div className="grid grid-cols-2 grid-rows-2  gap-x-4">
			<div className="col-span-2" onClick={()=>navigate("lineChart")}>
				<LineChart type="mini"/>
			</div>
			<div onClick={()=>navigate("columnChart")}>
				<ColumnChart type="mini"/>
			</div>
			<div onClick={()=>navigate("pieChart ")}>
				<PieChart type="mini"/>
			</div>
		</div>
	);
};
export default AllCharts;
