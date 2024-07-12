import React from "react";
import HeroContent from "./components/HeroContent";
import Background from "./components/Background/Background";
import Circle1 from "./components/Background/Circle1";
import Circle2 from "./components/Background/Circle2";
import Circle3 from "./components/Background/Circle3";
import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import Testimonial from "./components/Testimonial";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="app overflow-hidden flex flex-col min-h-[100vh]">
      <Navbar />
      <main className="flex-grow">
        <section className="relative">
          <Background />
          <Circle1 />
          <Circle2 />
          <Circle3 />
          <HeroContent />
        </section>
        <Message />
        <Features />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
