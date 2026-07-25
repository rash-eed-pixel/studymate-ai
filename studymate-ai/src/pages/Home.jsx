import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Trusted from "../components/sections/Trusted";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
   <>
  <Navbar />
  <Hero />
  <Trusted />
  <Features />
  <HowItWorks />
  <Stats />
  <Testimonials />
  <CTA />
  <Footer />
</>
  );
};

export default Home;