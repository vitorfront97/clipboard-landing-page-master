import Image from "next/image";

export default function SectionKeep() {
  return (
    <section className="mt-32 px-8 flex flex-col items-center gap-4 lg:pb-12 xl:pb-24 2xl:pb-56">
      <h2 className="text-this-gray-700 font-bold text-this-h2 text-center leading-8">
        Keep track of your snippets
      </h2>
      <p className="text-this-gray-500 text-[clamp(1rem,4vw,1.25rem)] text-center xl:px-32">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
      <div className="w-full mt-12 flex flex-col items-center gap-8 lg:pt-12 lg:relative lg:flex-row lg:justify-end xl:px-32">
        <Image
          className="w-auto h-auto lg:max-w-none lg:w-[clamp(500px,60vw,800px)] lg:absolute lg:top-2 lg:-left-16"
          alt=""
          src="/image-computer.png"
          width={375}
          height={0}
        />
        <div className="flex flex-col gap-6 text-center lg:max-w-100 lg:px-16 lg:text-left 2xl:max-w-150 2xl:px-none">
          <article>
            <h3 className="text-this-gray-700 font-bold text-this-h3">
              Quick Search
            </h3>
            <p className="text-this-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </article>
          <article>
            <h3 className="text-this-gray-700 font-bold text-this-h3">
              iCloud Sync
            </h3>
            <p className="text-this-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </article>
          <article>
            <h3 className="text-this-gray-700 font-bold text-this-h3">
              Complete History
            </h3>
            <p className="text-this-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
