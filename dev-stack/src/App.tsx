import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechGrid from "./components/technologies/TechGrid";
import Footer from "./components/Footer";
import type { Itechnology } from "./types/technology";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const technologiesPromise = technologiesFetch();
  const [technologiesPromise] = useState(() => technologiesFetch());

  const [stack, setStack] = useState<Itechnology[]>([]);

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading.......</h2>}>
        <TechGrid
          technologiesPromise={technologiesPromise}
          stack={stack}
          setStack={setStack}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;