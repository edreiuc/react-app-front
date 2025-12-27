export default function Reports() {
  return (
    <>
      <header className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Reports
          </h1>
        </div>
      </header>
      <main className="flex-1 w-full">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
