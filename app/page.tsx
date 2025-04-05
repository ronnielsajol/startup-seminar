import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center px-10 py-3 sm:px-80 sm:py-34">
      <main className="flex flex-col items-center">
        <Navbar />
        <h1 className="font-horizon mt-60 mb-15 text-center text-[10vw] uppercase md:text-[65px] md:text-nowrap">
          Start-Up Seminar
        </h1>
        <h4 className="text-2xl font-bold">May 04 - 06, 2025</h4>
        <h4 className="text-center text-xl font-extralight">
          Bulwagang Balagtas, PUP Main Campus, Sta. Mesa
        </h4>
        <div className="mt-20 flex space-x-10">
          <button className="rounded-3xl bg-white px-6 py-3 text-2xl font-extrabold text-black uppercase">
            Secure your spot
          </button>
        </div>
      </main>
    </div>
  );
}

//DM Sans
//Horizons
