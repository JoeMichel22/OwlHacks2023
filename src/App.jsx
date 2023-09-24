import "./App.css";
import "./index.css";

import { MuseumCard, Nav, SelectFilter, Footer } from "./components";

import data from "./museums.json";
import { useState } from "react";

function App() {
  const [museumType, setMuseumType] = useState("");

  return (
    <section>
      <Nav />
      <section className="w-full flex justify-center items-center">
        <SelectFilter museums={data} setMuseumType={setMuseumType} />
      </section>
      <section className="m-3 flex justify-center flex-wrap gap-4 scroll-m-0">
        {data
          .filter((museum) => museumType === museum.type || museumType === "")
          .map((museum, index) => (
            <MuseumCard key={index} museum={museum} />
          ))}
      </section>
      <Footer/>
    </section>
  );
}

export default App;
