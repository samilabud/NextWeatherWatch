"use client";
import {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WaterIcon from "@mui/icons-material/Water";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { LocationContext } from "../libs/location-context";
import { useDebounce } from "@uidotdev/usehooks";
import LinearProgress from "@mui/material/LinearProgress";
import { type CurrentWeather as CurrentWeatherType } from "../libs/global-types";
import Image from "next/image";

const defaultCurrentWeather: CurrentWeatherType = {
  feels_like: 0,
  humidity: 0,
  pressure: 0,
  temp: 0,
  temp_max: 0,
  temp_min: 0,
  visibility: 0,
  weather: [
    {
      main: "",
      description: "",
      icon: "",
    },
  ],
};

export const CurrentWeather = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CurrentWeatherType>(defaultCurrentWeather);
  const { location, setLocation } = useContext(LocationContext);
  const debouncedSearchTerm = useDebounce(location, 300);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    if (debouncedSearchTerm) {
      const url = `${process.env.NEXT_PUBLIC_BASE_SAM_WEATHER_API_URL}/current-weather/?location=${debouncedSearchTerm}`;
      const options = {
        method: "GET",
        headers: {
          "SamAPI-Key": process.env.NEXT_PUBLIC_SAM_WEATHER_API_KEY || "",
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((currentWeather) => {
          setData(currentWeather);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    } else {
      setLoading(false);
    }
  }, [debouncedSearchTerm]);

  const handleLocationChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const locationValue = e.target.value;
    setLocation(locationValue);
  };
  const notDataFound = (!loading && !data) || error;

  return (
    <div className="flex min-w-80 overflow-auto w-5/12 flex-col">
      <div className="w-full mb-3 block relative text-white">
        <LocationOnIcon className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          name="location"
          id="location"
          type="text"
          placeholder="Please provide a location (city, zipcode, full address)"
          className="form-input px-10 py-2 rounded-full w-full text-white bg-slate-600 bg-opacity-50 text-sm border-none focus:border-transparent focus:ring-0 placeholder-white"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      {loading ? (
        <LinearProgress className="w-full" />
      ) : (
        <div className="w-full flex items-center h-full flex-col rounded-xl bg-opacity-30 bg-black pt-24 min-w-80">
          {notDataFound || !data?.weather?.length ? (
            <div className="flex overflow-auto w-full min-w-80 p-5">
              <div className="p-3 w-full h-16  bg-red-600 bg-opacity-40 rounded-xl justify-center items-center flex">
                <p className="text-xl">
                  {debouncedSearchTerm ? (
                    <span>
                      Current weather for{" "}
                      <strong>*{debouncedSearchTerm}*</strong> not found!
                    </span>
                  ) : (
                    <span>
                      Please provide a location (city, zipcode, full address)
                    </span>
                  )}
                </p>
              </div>
            </div>
          ) : (
            <>
              <h2 className="font-mono text-6xl bold">
                {Math.round(data.temp)}°
              </h2>
              <div className="flex flex-nowrap justify-around">
                <h4 className="font-mono text-3xl  mt-1 whitespace-nowrap p-3">
                  {data.weather[0].main} Day
                </h4>
                <Image
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt={data.weather[0].description}
                  width={50}
                  height={50}
                  className="mt-3"
                />
              </div>
              <p className=" text-sm justify-center text-center p3 flex">
                <span>
                  Today, expect a {data.weather[0].description} day with
                  temperatures reaching a maximum of {data.temp_max}°
                </span>
              </p>
              <div className="flex justify-around overflow-auto p-3 flex-row flex-wrap">
                <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
                  <span className="uppercase text-neutral-300">
                    <ThermostatIcon /> Feels like
                  </span>
                  <h6 className="text-3xl mt-1">{data?.feels_like}°</h6>
                  <span className="p-1"></span>
                  <p className=" text-sm text-left">
                    {/* Humidity is making it feel warmer */}
                  </p>
                </div>
                <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
                  <span className="uppercase text-neutral-300">
                    <WaterDropIcon /> Pressure
                  </span>
                  <h6 className="text-3xl mt-1">{data.pressure} mb</h6>
                  <span className="text-sm p-1">{/* in the last 24h */}</span>
                  <p className="p-1 text-sm text-left">
                    {/* 2&quot; expected in the next 24h */}
                  </p>
                </div>
                <div className="bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
                  <span className="uppercase text-neutral-300">
                    <VisibilityIcon /> Visibility
                  </span>
                  <h6 className="text-3xl mt-1">{data.visibility / 1000} mi</h6>
                  <span className=" text-sm p-1"></span>
                  <p className="p-1 text-sm text-left"></p>
                </div>
                <div className=" bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
                  <span className="uppercase text-neutral-300">
                    <WaterIcon /> Humidity
                  </span>
                  <h6 className="text-3xl mt-1">{data.humidity}%</h6>
                  <span className=" text-sm p-1"></span>
                  <p className=" text-sm text-left">
                    {/* The dew point is 25° right now */}
                  </p>
                </div>
                <div className=" bg-blue-500 bg-opacity-20 rounded-xl p-3 w-44 h-46 mt-4 mr-4">
                  <span className="uppercase text-neutral-300">
                    <ThermostatIcon /> Temperature
                  </span>
                  <h6 className="text-3xl mt-1">{data.temp}°</h6>
                  <span className=" text-sm p-1"></span>
                  <p className=" text-sm text-left">
                    Max: {Math.round(data.temp_max)}° - Min:{" "}
                    {Math.round(data.temp_min)}°
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
