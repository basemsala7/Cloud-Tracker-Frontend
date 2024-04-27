import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartData {
	series: number[];
	options: ApexOptions;
}

const PieChart = () => {
	const [chartData] = useState<ChartData>({
		series: [35, 35, 30],
		options: {
			chart: {
				height: 300,
				width: 600,
				type: "pie",
			},
			legend: {
				position: "bottom",
				width: 600,
				fontSize: "14px",
				fontWeight: "bold",
				labels: {
					colors: "gray",
				},
			},
			labels: ["ec2", "s3", "RDS"],
		},
	});

	return (
		<div className="transtion-all flex h-[300px] cursor-pointer items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50">
			<ReactApexChart
				options={chartData.options}
				series={chartData.series}
				type="pie"
				height={chartData.options.chart?.height}
				width={chartData.options.chart?.width}
			/>
		</div>
	);
};
export default PieChart;
