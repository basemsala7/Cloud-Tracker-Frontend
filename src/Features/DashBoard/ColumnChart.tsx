import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ChartData {
	series: { name: string; data: number[] }[];
	options: ApexOptions;
}

const ColumnChart = () => {
	const [chartData] = useState<ChartData>({
		series: [
			{
				name: "EC2",
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 41, 90],
			},
			{
				name: "S3",
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 40],
			},
			{
				name: "RDS",
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 69, 20],
			},
		],
		options: {
			chart: {
				type: "bar",
				height: 250,
				width: 600,
			},
			legend: {
				position: "bottom",
				fontSize: "14px",
				fontWeight: "bold",
				labels: {
					colors: "gray",
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "55%",
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ["transparent"],
			},
			xaxis: {
				categories: [
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nev",
					"Dec",
				],
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val: number) {
						return "$ " + val + " thousands";
					},
				},
			},
		},
	});

	return (
		<div className="transtion-all flex h-[300px] cursor-pointer items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50">
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

export default ColumnChart;
