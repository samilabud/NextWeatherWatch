export type CurrentWeather = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  visibility: number;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
};

export type WeatherPeriod = {
  name: string;
  temperature: string;
  windSpeed: string;
  windDirection: string;
};

export type ForecastResponse = {
  latitude: string;
  longitude: string;
  periods: [WeatherPeriod];
};
