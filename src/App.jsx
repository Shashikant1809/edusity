import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import { Testimonials } from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <Title title="OUR PROGRAM" subtitle="What We Offer" />
      <div className="container">
        <Programs />
        <About setPlayState={setPlayState} />
        <Title title="GALLERY" subtitle="Campus Photos" />
        <Campus />
        <Title title="TESTIMONIALS" subtitle="What Student Says" />
        <Testimonials />
        <Title title="CONTACT US" subtitle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
