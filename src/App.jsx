import "./App.css";
import "./index.css";

import { MuseumCard, Nav, SelectFilter } from "./components";

import data from "./museums.json";
import { useState } from "react";

function App() {
  const [museumType, setMuseumType] = useState("");
  console.log(museumType);

  return (
    <section>
      <Nav />
      <SelectFilter museums={data} setMuseumType={setMuseumType}/>
      <section className="flex justify-center flex-wrap gap-4">
        {data
          .filter((museum) => museumType === museum.type || museumType === "")
          .map((museum, index) => (
            <MuseumCard key={index} museum={museum} />
          ))}
      </section>
    </section>
  );
}

export default App;
