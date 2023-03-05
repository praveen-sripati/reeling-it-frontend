import { Footer } from './Footer';
import { LandingSection } from './LandingSection';
import { Navbar } from './Navbar';
import { Section } from './Section';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] m-auto px-8">
        <Section>
          <LandingSection />
        </Section>
      </main>
      <Footer />
    </>
  );
};
