import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudIcon from "@mui/icons-material/Cloud";

const NextForecast = () => (
  <div className="flex overflow-auto w-55p min-w-80">
    <div className="p-3 w-full h-56  bg-blue-500 bg-opacity-20 rounded-xl">
      <div className="w-full h-52 flex justify-around flex-col">
        <p className="uppercase text-neutral-300 flex justify-between w-40">
          <DateRangeIcon /> <span>7-day forecast</span>
        </p>
        <hr className="mt-2 opacity-35" />
        <div className="mt-3 mb-3 flex overflow-auto flex-wrap">
          <div className="rounded-xl bg-slate-600 w-2/12 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2">
            <span>Today</span>
            <span className="text-neutral-300 text-sm">16/01</span>
            <span className="text-white text-lg">28°</span>
            <span className="text-white text-lg">
              <CloudIcon />
            </span>
          </div>
          <div className="rounded-xl bg-slate-600 w-2/12 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2">
            <span>Today</span>
            <span className="text-neutral-300 text-sm">16/01</span>
            <span className="text-white text-lg">28°</span>
            <span className="text-white text-lg">
              <CloudIcon />
            </span>
          </div>
          <div className="rounded-xl bg-slate-600 w-2/12 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2">
            <span>Today</span>
            <span className="text-neutral-300 text-sm">16/01</span>
            <span className="text-white text-lg">28°</span>
            <span className="text-white text-lg">
              <CloudIcon />
            </span>
          </div>
          <div className="rounded-xl bg-slate-600 w-2/12 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2">
            <span>Today</span>
            <span className="text-neutral-300 text-sm">16/01</span>
            <span className="text-white text-lg">28°</span>
            <span className="text-white text-lg">
              <CloudIcon />
            </span>
          </div>
          <div className="rounded-xl bg-slate-600 w-2/12 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2">
            <span>Today</span>
            <span className="text-neutral-300 text-sm">16/01</span>
            <span className="text-white text-lg">28°</span>
            <span className="text-white text-lg">
              <CloudIcon />
            </span>
          </div>
          <div className="rounded-xl bg-slate-600 w-2/12 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2">
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

export default NextForecast;
