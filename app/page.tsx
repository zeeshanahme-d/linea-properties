import About from "./sections/AboutSec";
import Banner from "./sections/BannerSec";
import Feature from "./sections/FeatureSec";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./sections/ServicesSec";
import Contact from "./sections/ContactSec";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Banner />
      <About />
      <Services />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
}
