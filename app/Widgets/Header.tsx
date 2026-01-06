import Image from "next/image";

export default function Header() {
  return (
    <header className="py-20 flex justify-center bg-[url(/bg-header-mobile.png)] bg-center bg-no-repeat sm:bg-[url(/bg-header-desktop.png)]">
      <div>
        <a href="/">
          <Image
            className="w-auto h-auto"
            alt="Copy logo"
            src="logo.svg"
            width={0}
            height={0}
          />
        </a>
      </div>
    </header>
  );
}
