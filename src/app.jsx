import "./app.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Model from "./components/model";

import * as Sentry from "@sentry/react";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";
import Footer from "./components/footer";

const AppRoot = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

const App = Sentry.withProfiler(AppRoot);

export default App;
