export default function Main() {
  return (
    <section className="px-8 flex flex-col items-center gap-6 text-center lg:px-32 xl:px-48 2xl:px-64">
      <h1 className="text-this-gray-700 font-bold text-[clamp(2.2rem,4vw,3.5rem)] leading-12">
        A history of everything you copy
      </h1>
      <p className="text-this-gray-500 text-[clamp(1rem,4vw,1.25rem)]">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <nav className="flex flex-col gap-4 lg:flex-row">
        <a
          href="#"
          className="px-8 py-3 rounded-full bg-this-green-500 text-white shadow-lg transition-opacity hover:opacity-90"
        >
          Download for IOS
        </a>
        <a
          href="#"
          className="px-8 py-3 rounded-full bg-this-blue-100 text-white shadow-lg transition-opacity hover:opacity-90"
        >
          Download for Mac
        </a>
      </nav>
    </section>
  );
}
