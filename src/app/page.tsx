import CurrentWeather from "./components/current-weather";
import NextForecast from "./components/next-forecasts";

export default function Home() {
  return (
    <div className="flex h-full w-full text-white flex-wrap overflow-auto justify-around pt-3 pb-3">
      <CurrentWeather />
      <NextForecast />
    </div>
  );
}
