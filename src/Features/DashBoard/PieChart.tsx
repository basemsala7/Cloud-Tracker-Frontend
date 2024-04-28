import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartData {
	series: number[];
	options: ApexOptions;
}

const PieChart = ({ type }: { type: "full" | "mini" }) => {
	const [miniChartData] = useState<ChartData>({
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

	const [fullChartData] = useState<ChartData>({
		series: [35, 35, 30],
		options: {
			chart: {
				height: 400,
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

	if (type === "mini") {
		return (
			<div className="transtion-all flex h-[300px] cursor-pointer items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50">
				<ReactApexChart
					options={miniChartData.options}
					series={miniChartData.series}
					type="pie"
					height={miniChartData.options.chart?.height}
					width={miniChartData.options.chart?.width}
				/>
			</div>
		);
	}

	return (
		<div className="transtion-all w-[70%] flex h-full items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50">
			<ReactApexChart
				options={fullChartData.options}
				series={fullChartData.series}
				type="pie"
				height={fullChartData.options.chart?.height}
				width={fullChartData.options.chart?.width}
			/>
		</div>
	);
};
export default PieChart;
