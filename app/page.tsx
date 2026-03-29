import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
