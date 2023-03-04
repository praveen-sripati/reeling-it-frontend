import { CinemaCard } from './CinemaCard';
import { Footer } from './Footer';
import { LandingSection } from './LandingSection';
import { Navbar } from './Navbar';
import { Section } from './Section';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] m-auto">
        <Section>
          <LandingSection />
        </Section>
      </main>
      <Footer />
    </>
  );
};
