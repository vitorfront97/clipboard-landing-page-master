import Image from "next/image";

export default function SectionClipboard() {
  return (
    <section className="mt-32 px-8 flex flex-col items-center gap-4 xl:px-48 2xl:px-64">
      <h2 className="text-this-gray-700 font-bold text-this-h2 text-center leading-8">
        Access Clipboard anywhere
      </h2>
      <p className="text-this-gray-500 text-[clamp(1rem,4vw,1.25rem)] text-center">
        Access Clipboard anywhere Whether you’re on the go, or at your computer,
        you can access all your Clipboard snippets in a few simple clicks.
      </p>
      <Image
        className="mt-12 w-auto h-auto lg:w-225"
        alt=""
        src="/image-devices.png"
        width={375}
        height={0}
      />
    </section>
  );
}
