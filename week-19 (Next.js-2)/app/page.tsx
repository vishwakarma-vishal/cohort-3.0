import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-[80vh] flex justify-between items-center">
      <div className="ml-8">
        <h1 className="text-5xl font-bold ">Next.js Made Easy</h1>
        <p className="text-gray-600 my-2">Learn next.js in simple and powerful way.</p>
      </div>
    </main>
  );
}
