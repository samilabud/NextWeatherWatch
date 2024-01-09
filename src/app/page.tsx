import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between h-full w-full min-w-96">
      <div className="flex w-4/5 p-6">
        <div className="w-full flex items-center h-full flex-col rounded-xl bg-opacity-80 bg-black pt-24">
          <h2 className="font-mono text-6xl text-white bold">28°</h2>
          <h4 className="font-mono text-3xl text-white mt-1 whitespace-nowrap p-3">
            Cloudy Day
          </h4>
        </div>
      </div>
      <div className="w-full bg-red-700  p-2">col2</div>
    </div>
  );
}
