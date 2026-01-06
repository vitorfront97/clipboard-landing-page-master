export default function Main() {
  return (
    <section className="mt-32 px-8 flex flex-col items-center gap-6 text-center lg:px-32 xl:px-48 2xl:px-72">
      <h1 className="text-this-gray-700 font-bold text-this-h2 leading-8">
        Clipboard for iOS and Mac OS
      </h1>
      <p className="text-this-gray-500 text-[clamp(1rem,4vw,1.25rem)]">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className="flex flex-col gap-4 lg:flex-row">
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
      </div>
    </section>
  );
}
