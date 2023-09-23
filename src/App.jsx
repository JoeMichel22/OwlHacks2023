import "./App.css";
import "./index.css";

import Card from "./components/MuseumCard";
import Nav from "./components/Nav";
import data from "./museums.json";

function App() {
  console.log(data.map((museum) => museum.name));

  return (
    <section>
      <Nav />
      <section className="flex justify-center flex-wrap gap-4">
        {data.map((museum, index) => (
          <Card key={index} museum={museum} />
        ))}
      </section>
    </section>
  );
}

export default App;
