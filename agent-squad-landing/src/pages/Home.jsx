import Hero from '../components/Hero';
import SquadGrid from '../components/SquadGrid';
import InteractiveDemo from '../components/InteractiveDemo';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Infrastructure from '../components/Infrastructure';
import Testimonials from '../components/Testimonials';
import ValueProps from '../components/ValueProps';
import CTAFooter from '../components/CTAFooter';

const Home = () => {
  return (
    <>
      <Hero />
      <InteractiveDemo />
      <SquadGrid />
      <HowItWorks />
      <UseCases />
      <Infrastructure />
      <Testimonials />
      <ValueProps />
      <CTAFooter />
    </>
  );
};

export default Home;
