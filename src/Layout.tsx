import { Route, Routes } from 'react-router-dom';
import { Footer } from './Footer';
import { LandingSection } from './LandingSection';
import { Movies } from './Movies';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] m-auto px-8">
        <Routes>
          <Route path="/" element={<LandingSection />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
