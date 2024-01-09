import CurrentWeather from "./components/current-weather";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudIcon from "@mui/icons-material/Cloud";

export default function Home() {
  return (
    <div className="flex h-full w-full text-white flex-wrap overflow-auto justify-between">
      <CurrentWeather />
      <div className="flex overflow-auto w-55p min-w-80">
        <div className="bg-blue-500 bg-opacity-20 rounded-xl w-full p-3 h-48">
          <span className="uppercase text-neutral-300">
            <DateRangeIcon /> 7-day forecast
          </span>
          <hr className="mt-2 opacity-35" />
          <div className="mt-3 mb-3 flex overflow-auto">
            <div className="rounded-xl bg-slate-600 w-24 h-32 flex flex-col items-center justify-evenly">
              <span>Today</span>
              <span className="text-neutral-300 text-sm">16/01</span>
              <span className="text-white text-lg">28°</span>
              <span className="text-white text-lg">
                <CloudIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
