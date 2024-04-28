import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartData {
	series: { name: string; data: number[] }[];
	options: ApexOptions;
}

const LineChart = ({ type }: { type: "full" | "mini" }) => {
	const [miniChartData] = useState<ChartData>({
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

	const [fullChartData] = useState<ChartData>({
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
				height: 350,
				width: 900,
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

	if (type === "mini") {
		return (
			<div className="transtion-all flex cursor-pointer items-center justify-center bg-white p-2 shadow-xl duration-300 hover:bg-stone-50">
				<ReactApexChart
					options={miniChartData.options}
					series={miniChartData.series}
					type={miniChartData.options.chart?.type}
					height={miniChartData.options.chart?.height}
					width={miniChartData.options.chart?.width}
				/>
			</div>
		);
	}

	return (
		<div className="transtion-all flex h-full w-[70%] items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50">
			<ReactApexChart
				options={fullChartData.options}
				series={fullChartData.series}
				type={fullChartData.options.chart?.type}
				height={fullChartData.options.chart?.height}
				width={fullChartData.options.chart?.width}
			/>
		</div>
	);
};
export default LineChart;
