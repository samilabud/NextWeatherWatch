"use client";
import { useContext, useState, useEffect } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudIcon from "@mui/icons-material/Cloud";
import WindPowerIcon from "@mui/icons-material/WindPower";
import ExploreIcon from "@mui/icons-material/Explore";
import { LocationContext } from "../libs/location-context";
import { useDebounce } from "@uidotdev/usehooks";
import LinearProgress from "@mui/material/LinearProgress";

export type WeatherPeriod = {
  name: string;
  temperature: string;
  windSpeed: string;
  windDirection: string;
};

type Periods = { periods: [WeatherPeriod] };

const isToday = (text: string) =>
  ["today", "tonight"].includes(text.toLocaleLowerCase());

const NextForecast = () => {
  const [data, setData] = useState<Periods>();
  const [loading, setLoading] = useState(true);
  const { location } = useContext(LocationContext);
  const periods = data?.periods;
  const debouncedSearchTerm = useDebounce(location, 500);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/weather/?location=${debouncedSearchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [debouncedSearchTerm]);

  return !loading && periods ? (
    <div className="flex overflow-auto w-55p min-w-80">
      <div className="p-3 w-full h-56  bg-blue-500 bg-opacity-20 rounded-xl">
        <div className="w-full h-52 flex justify-around flex-col">
          <p className="uppercase text-neutral-300">
            <DateRangeIcon /> <span>14-day forecast</span>
          </p>
          <hr className="mt-2 opacity-35" />
          <div className="mt-3 mb-3 flex overflow-auto flex-wrap scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
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
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LinearProgress className="w-55p min-w-80" />
  );
};

export default NextForecast;
