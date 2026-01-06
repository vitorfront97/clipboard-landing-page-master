import Header from "./Widgets/Header";
import Main from "./Widgets/Main";
import SectionKeep from "./Widgets/SectionKeep";
import SectionClipboard from "./Widgets/SectionClipboard";
import SectionSupercharge from "./Widgets/SectionSupercharge";
import ClipboardIOS from "./Widgets/ClipboardIOS";
import Footer from "./Widgets/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <SectionKeep />
      <SectionClipboard />
      <SectionSupercharge />
      <ClipboardIOS />
      <Footer />
    </div>
  );
}
