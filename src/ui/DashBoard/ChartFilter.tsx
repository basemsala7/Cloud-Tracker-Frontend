import SelectFilter from "./SelectFilter";

interface Props{
	region:string ;
	setRegion: Function;
	zones: string;
	setZones: Function;
	pricing: string ;
	setPricing: Function;
}

const ChartFilter = ({region,setRegion,zones,setZones,pricing,setPricing}:Props)=>{
	return (
		<div className="flex justify-between items-center w-full px-14">
			<SelectFilter value={region} setValue={setRegion} defaultValue="Region" options={[]}/>
			<SelectFilter value={zones} setValue={setZones} defaultValue="Availability zones" options={[]}/>
			<SelectFilter value={pricing} setValue={setPricing} defaultValue="Pricing" options={[]}/>
		</div>
	);
}
export default ChartFilter ;
