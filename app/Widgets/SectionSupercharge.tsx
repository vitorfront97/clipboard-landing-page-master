import Image from "next/image";

export default function SectionSupercharge() {
  return (
    <section className="mt-32 px-8 flex flex-col items-center gap-4">
      <h2 className="text-this-gray-700 font-bold text-this-h2 text-center leading-8">
        Supercharge your workflow
      </h2>
      <p className="text-this-gray-500 text-[clamp(1rem,4vw,1.25rem)] text-center">
        We’ve got the tools to boost your productivity.
      </p>
      <div className="pt-24 flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <article className="flex flex-col items-center gap-3 text-center lg:w-72">
          <Image
            className="w-auto h-auto"
            alt="Blacklists"
            src="/icon-blacklist.svg"
            width={0}
            height={0}
          />
          <h3 className="text-this-gray-700 font-bold text-this-h3">
            Create blacklists
          </h3>
          <p className="text-this-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center lg:w-72">
          <Image
            className="w-auto h-auto"
            alt="Text snippets"
            src="/icon-text.svg"
            width={0}
            height={0}
          />
          <h3 className="text-this-gray-700 font-bold text-this-h3">
            Plain text snippets
          </h3>
          <p className="text-this-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center lg:w-72">
          <Image
            className="w-auto h-auto"
            alt="Preview"
            src="/icon-preview.svg"
            width={0}
            height={0}
          />
          <h3 className="text-this-gray-700 font-bold text-this-h3">
            Sneak preview
          </h3>
          <p className="text-this-gray-500 text-[clamp(0.5rem,3vw,1rem)]">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </article>
      </div>
      <div className="mt-24 flex flex-col items-center gap-12 lg:flex-row">
        <Image
          className="w-32 h-auto"
          alt="Google"
          src="/logo-google.png"
          width={375}
          height={0}
        />
        <Image
          className="w-32 h-auto"
          alt="IBM"
          src="/logo-ibm.png"
          width={375}
          height={0}
        />
        <Image
          className="w-32 h-auto"
          alt="Microsoft"
          src="/logo-microsoft.png"
          width={375}
          height={0}
        />
        <Image
          className="w-32 h-auto"
          alt="HP"
          src="/logo-hp.png"
          width={375}
          height={0}
        />
        <Image
          className="w-32 h-auto"
          alt="Vector Graphics"
          src="/logo-vector-graphics.png"
          width={375}
          height={0}
        />
      </div>
    </section>
  );
}
