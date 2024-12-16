// src/app/page.tsx
'use client';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <EventDetails />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}
