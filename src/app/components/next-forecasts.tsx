import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudIcon from "@mui/icons-material/Cloud";
import WindPowerIcon from "@mui/icons-material/WindPower";
import ExploreIcon from "@mui/icons-material/Explore";

async function getData() {
  const res = await fetch("http://localhost:8000/weather/?location=miami");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export type WeatherPeriod = {
  name: string;
  temperature: string;
  windSpeed: string;
  windDirection: string;
};

const isToday = (text: string) =>
  ["today", "tonight"].includes(text.toLocaleLowerCase());

const NextForecast = async () => {
  const data = await getData();
  const periods = data.periods;

  return (
    <div className="flex overflow-auto w-55p min-w-80">
      <div className="p-3 w-full h-56  bg-blue-500 bg-opacity-20 rounded-xl">
        <div className="w-full h-52 flex justify-around flex-col">
          <p className="uppercase text-neutral-300">
            <DateRangeIcon /> <span>14-day forecast</span>
          </p>
          <hr className="mt-2 opacity-35" />
          <div className="mt-3 mb-3 flex overflow-auto flex-wrap">
            {periods.map((val: WeatherPeriod, idx: number) => (
              <div
                key={`period-${idx}`}
                className={`rounded-xl ${
                  isToday(val.name)
                    ? "bg-slate-600 bg-opacity-60"
                    : "bg-slate-600 bg-opacity-30"
                } min-w-20 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2`}
              >
                <span className="text-center">{val.name}</span>
                <span className="text-neutral-300 text-sm">
                  {val.windDirection}
                </span>
                <span className="text-neutral-300 text-sm">
                  {val.windSpeed}
                </span>
                <span className="text-white text-lg">{val.temperature}°</span>
                <span className="text-white text-lg">
                  <CloudIcon />
                </span>
              </div>
            ))}

            {/* <div className="rounded-xl bg-slate-600 w-2/12 h-36 max-w-24 flex flex-col items-center justify-around mr-2 ml-2 mb-2">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextForecast;
