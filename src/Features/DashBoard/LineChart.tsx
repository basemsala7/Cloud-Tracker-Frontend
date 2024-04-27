import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartData {
	series: { name: string; data: number[] }[];
	options: ApexOptions;
}

const LineChart = () => {
	const [chartData] = useState<ChartData>({
		series: [
			{
				name: "EC2",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
			},
			{
				name: "S3",
				data: [10, 80, 10, 20, 35, 88, 25, 45, 100],
			},
			{
				name: "RDS",
				data: [52, 44, 12, 50, 35, 88, 60, 70, 150],
			},
		],
		options: {
			chart: {
				height: 250,
				width: 1200,
				type: "line",
				zoom: {
					enabled: true,
				},
			},
			legend: {
				position: "bottom",
				fontSize: "14px",
				fontWeight: "bold",
				labels: {
					colors: "gray",
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			//   title: {
			//     text: "Product Trends by Month",
			//     align: "center",
			//   },
			grid: {
				row: {
					colors: ["transparent"],
					opacity: 0.5,
				},
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
				],
			},
		},
	});

	return (
		<div className="transtion-all flex cursor-pointer items-center justify-center bg-white p-2 shadow-xl duration-300 hover:bg-stone-50">
			<ReactApexChart
				options={chartData.options}
				series={chartData.series}
				type={chartData.options.chart?.type}
				height={chartData.options.chart?.height}
				width={chartData.options.chart?.width}
			/>
		</div>
	);
};
export default LineChart;
