/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "api.weather.gov",
        port: "",
        pathname: "/icons/**",
      },
    ],
  },
};

module.exports = nextConfig;
