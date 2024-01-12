"use client";
import { useContext, useState, useEffect } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudIcon from "@mui/icons-material/Cloud";
import WindPowerIcon from "@mui/icons-material/WindPower";
import ExploreIcon from "@mui/icons-material/Explore";
import { LocationContext } from "../libs/location-context";
import { useDebounce } from "@uidotdev/usehooks";
import LinearProgress from "@mui/material/LinearProgress";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export type WeatherPeriod = {
  name: string;
  temperature: string;
  windSpeed: string;
  windDirection: string;
};

type ForecastResponse = {
  latitude: string;
  longitude: string;
  periods: [WeatherPeriod];
};

const isToday = (text: string) =>
  ["today", "tonight"].includes(text.toLocaleLowerCase());

const NextForecast = () => {
  const [data, setData] = useState<ForecastResponse>({
    latitude: "0",
    longitude: "0",
    periods: [{ name: "", temperature: "", windDirection: "", windSpeed: "" }],
  });
  const [loading, setLoading] = useState(true);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [error, setError] = useState(false);
  const { location } = useContext(LocationContext);
  const { periods } = data;
  const debouncedSearchTerm = useDebounce(location, 300);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  //   const center = {
  //     lat: Number(latitude),
  //     lng: Number(longitude),
  //   };

  useEffect(() => {
    setError(false);
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "SamAPI-Key": "nextweatherwatch-123456",
      },
    };
    if (debouncedSearchTerm.length > 0) {
      fetch(
        `http://localhost:8000/weather/?location=${debouncedSearchTerm}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setCenter({
            lat: Number(data.latitude),
            lng: Number(data.longitude),
          });
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    } else {
      setLoading(false);
    }
  }, [debouncedSearchTerm]);

  const notDataFound = !loading && (error || (periods && periods.length <= 0));

  return !loading && !notDataFound && periods ? (
    <div className="flex w-55p min-w-80 flex-wrap h-5/6 justify-evenly">
      <div className="p-3 w-full h-56  bg-blue-500 bg-opacity-20 rounded-xl">
        <div className="w-full h-52 flex justify-around flex-col">
          <p className="uppercase text-neutral-300">
            <DateRangeIcon />{" "}
            <span>7-day forecast - {debouncedSearchTerm}</span>
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
      <div className="w-full h-56 rounded-xl border-solid border-black flex">
        {debouncedSearchTerm === location && (
          <LoadScript
            key={Date.now()}
            googleMapsApiKey="AIzaSyDrCKDKddt1w8l1-43nZYQdUh0FvYk8Trk"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Add markers, polygons, or other components here if needed */}
            </GoogleMap>
          </LoadScript>
        )}
      </div>
    </div>
  ) : notDataFound ? (
    <div className="flex overflow-auto w-55p min-w-80">
      <div className="p-3 w-full h-16  bg-red-600 bg-opacity-50 rounded-xl justify-center items-center flex">
        <p className="text-xl">
          {debouncedSearchTerm ? (
            <>
              <strong>*{debouncedSearchTerm}*</strong> not found!
            </>
          ) : (
            <span>Please provide a location (city, zipcode, full address)</span>
          )}
        </p>
      </div>
    </div>
  ) : (
    <LinearProgress className="w-55p min-w-80" />
  );
};

export default NextForecast;
