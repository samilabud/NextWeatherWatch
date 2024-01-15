"use client";
import { useContext, useState, useEffect, useCallback } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloudIcon from "@mui/icons-material/Cloud";
import { LocationContext } from "../libs/location-context";
import { useDebounce } from "@uidotdev/usehooks";
import LinearProgress from "@mui/material/LinearProgress";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { WeatherPeriod, ForecastResponse } from "../libs/global-types";

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

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  useEffect(() => {
    setError(false);
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "SamAPI-Key": process.env.NEXT_PUBLIC_SAM_WEATHER_API_KEY || "",
      },
    };
    if (debouncedSearchTerm.length > 0) {
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_SAM_WEATHER_API_URL}/weather/?location=${debouncedSearchTerm}`,
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
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : notDataFound ? (
    <div className="flex overflow-auto w-55p min-w-80">
      <div className="p-3 w-full h-16  bg-red-600 bg-opacity-50 rounded-xl justify-center items-center flex">
        <p className="text-xl">
          {debouncedSearchTerm ? (
            <>
              Next 7-day forecast for <strong>*{debouncedSearchTerm}*</strong>{" "}
              not found!
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
