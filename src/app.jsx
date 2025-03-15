import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Model from "./components/model";

import * as Sentry from "@sentry/react";

const AppRoot = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

const App = Sentry.withProfiler(AppRoot);

export default App;
