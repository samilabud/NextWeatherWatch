import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between h-full">
      <div className="w-4/5 p-2">
        <div className="w-full bg-zinc-500 opacity-35 flex items-center h-full flex-col rounded-xl">
          <h2 className="font-mono text-3xl text-white bold">28</h2>
          <h4 className="font-mono text-3xl text-white">Cloudy Day</h4>
        </div>
      </div>
      <div className="w-full bg-red-700  p-2">col2</div>
    </div>
  );
}
