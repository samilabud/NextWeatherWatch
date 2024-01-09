import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WaterIcon from "@mui/icons-material/Water";

export const CurrentWeather = () => (
  <div className="flex min-w-80 overflow-auto w-5/12">
    <div className="w-full flex items-center h-full flex-col rounded-xl bg-opacity-30 bg-black pt-24 min-w-80">
      <h2 className="font-mono text-6xl bold">28°</h2>
      <h4 className="font-mono text-3xl  mt-1 whitespace-nowrap p-3">
        Cloudy Day
      </h4>
      <p className=" text-sm justify-center text-center p3 flex">
        Today, expect a cloudy day with temperatures reaching a maximum of 28°.
      </p>
      <div className="flex justify-around overflow-auto p-3 flex-row flex-wrap">
        {/* <div className="grid grid-cols-2 gap-4 mt-3 overflow-auto p-3 "> */}
        <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
          <span className="uppercase text-neutral-300">
            <ThermostatIcon /> Feels like
          </span>
          <h6 className="text-3xl mt-1">30°</h6>
          <span className="p-1"></span>
          <p className=" text-sm text-left">
            Humidity is making it feel warmer
          </p>
        </div>
        <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
          <span className="uppercase text-neutral-300">
            <WaterDropIcon /> Precipitation
          </span>
          <h6 className="text-3xl mt-1">2.3&quot;</h6>
          <span className="text-sm p-1">in the last 24h</span>
          <p className="p-1 text-sm text-left">
            2&quot; expected in the next 24h
          </p>
        </div>
        <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
          <span className="uppercase text-neutral-300">
            <VisibilityIcon /> Visibility
          </span>
          <h6 className="text-3xl mt-1">6 mi</h6>
          <span className=" text-sm p-1"></span>
          <p className="p-1 text-sm text-left"></p>
        </div>
        <div className=" bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
          <span className="uppercase text-neutral-300">
            <WaterIcon /> Humidity
          </span>
          <h6 className="text-3xl mt-1">82%</h6>
          <span className=" text-sm p-1"></span>
          <p className=" text-sm text-left">The dew point is 25° right now</p>
        </div>
      </div>
    </div>
  </div>
);

export default CurrentWeather;
