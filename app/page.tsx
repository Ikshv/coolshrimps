export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="w-full flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          CoolShrimps
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Homebred freshwater shrimp raised with care and shipped to your door.
        </p>
        <button className="mt-6 px-6 py-3 rounded bg-teal-600 text-white text-sm font-semibold shadow hover:bg-teal-700 transition">
          Shop Now
        </button>
      </section>
      <section className="w-full px-4 py-24 bg-slate-50 text-center">
        <h1 className="text-3xl font-bold mb-8">
          What species are you looking for?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">Neocaridina</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">Caridina</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
