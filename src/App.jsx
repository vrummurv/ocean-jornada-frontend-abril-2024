import "./App.css";

import Card from "./components/Card/Card";

function App() {
  const item1 = {
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tag: ["Status: Vivo", "Espécie: Humano", "Origem: Terra"],
  };

  const item2 = {
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    tag: ["Status: Vivo", "Espécie: Humano", "Origem: Terra"],
  };

  const item3 = {
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    tag: ["Status: Vivo", "Espécie: Humano", "Origem: Terra"],
  };

  const itens = [item1, item2, item3];

  return (
    <>
      <div className="cards">
        {itens.map(function (elemento) {
          return <Card item={elemento} />;
        })}
      </div>
    </>
  );
}

export default App;
