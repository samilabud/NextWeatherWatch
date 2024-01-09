import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WaterIcon from "@mui/icons-material/Water";

export default function Home() {
  return (
    <div className="flex justify-between h-full w-full min-w-97 min-h-97 flex-grow">
      <div className="flex w-4/5 p-6 min-w-96 overflow-auto">
        <div className="w-full flex items-center h-full flex-col rounded-xl bg-opacity-30 bg-black pt-24 min-w-96">
          <h2 className="font-mono text-6xl text-white bold">28°</h2>
          <h4 className="font-mono text-3xl text-white mt-1 whitespace-nowrap p-3">
            Cloudy Day
          </h4>
          <p className="text-white text-sm justify-center text-center p3 flex">
            Today, expect a cloudy day with temperatures reaching a maximum of
            28°.
          </p>
          {/* <div className="flex justify-between overflow-auto p-3 flex-row flex-wrap"> */}
          <div className="grid grid-cols-2 gap-4 mt-3 overflow-auto p-3">
            <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 min-w-40 max-h-40">
              <span className="uppercase">
                <ThermostatIcon /> Feels like
              </span>
              <h6 className="text-3xl mt-1">30°</h6>
              <span className="p-1"></span>
              <p className="text-white text-sm text-left">
                Humidity is making it feel warmer
              </p>
            </div>
            <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 min-w-40 max-h-40">
              <span className="uppercase">
                <WaterDropIcon /> Precipitation
              </span>
              <h6 className="text-3xl mt-1">2.3&quot;</h6>
              <span className="text-white text-sm p-1">in the last 24h</span>
              <p className="text-white text-sm text-left">
                2&quot; expected in the next 24h
              </p>
            </div>
            <div className=" bg-blue-500 bg-opacity-20 rounded-xl p-3 min-w-40 max-h-40">
              <span className="uppercase">
                <VisibilityIcon /> Visibility
              </span>
              <h6 className="text-3xl mt-1">6 mi</h6>
              <span className="text-white text-sm p-1"></span>
              <p className="text-white text-sm text-left"></p>
            </div>
            <div className=" bg-blue-500 bg-opacity-20 rounded-xl p-3 min-w-40 max-h-40">
              <span className="uppercase">
                <WaterIcon /> Humidity
              </span>
              <h6 className="text-3xl mt-1">82%</h6>
              <span className="text-white text-sm p-1"></span>
              <p className="text-white text-sm text-left">
                The dew point is 25° right now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-red-700  p-2">col2</div>
    </div>
  );
}
