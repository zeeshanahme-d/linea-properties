import About from "./components/AboutSec";
import Banner from "./components/BannerSec";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/ServicesSec";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
