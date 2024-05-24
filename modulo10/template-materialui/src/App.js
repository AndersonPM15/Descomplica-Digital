import React from "react";
import Header from "./components/Header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <button onClick={handleClick}>Clique-me</button>
    </div>
  );
}

export default App;
