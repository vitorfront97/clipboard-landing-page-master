import Image from "next/image";
import { FaInstagram, FaFacebookSquare , FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-40 py-12 flex flex-col items-center gap-12 bg-gray-100 lg:px-32 lg:flex-row lg:justify-between">
      <Image
        alt="Home"
        src="/logo.svg"
        width={48}
        height={0}
      />
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-12">
        <ul className="flex flex-col items-center gap-4 lg:items-start">
          <li className="text-this-gray-700 hover:text-this-green-500"><a href="#">FAQs</a></li>
          <li className="text-this-gray-700 hover:text-this-green-500"><a href="#">Contact Us</a></li>
        </ul>
        <ul className="flex flex-col items-center gap-4 lg:items-start">
          <li className="text-this-gray-700 hover:text-this-green-500"><a href="#">Privacy Policy</a></li>
          <li className="text-this-gray-700 hover:text-this-green-500"><a href="#">Press Kit</a></li>
        </ul>
        <ul>
          <li className="text-this-gray-700 hover:text-this-green-500"><a href="#">Install Guide</a></li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <FaFacebookSquare className="w-8 h-8 text-this-gray-700 transition-colors duration-200 hover:text-this-green-500 hover:cursor-pointer"/>
        <FaTwitter className="w-8 h-8 text-this-gray-700 transition-colors duration-200 hover:text-this-green-500 hover:cursor-pointer"/>
        <FaInstagram className="w-8 h-8 text-this-gray-700 transition-colors duration-200 hover:text-this-green-500 hover:cursor-pointer"/>
      </div>
    </footer>
  );
};