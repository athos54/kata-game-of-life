import "./App.css";
import { Game } from "./components/Game/Game";
import { useGame } from "./components/Game/hooks/useGame";
import { Header } from "./components/Header/Header";

function App() {
  const game = useGame();

  const handleClickHeader = (value) => {
    game.generateTableStatus({ tableSize: value });
  };

  return (
    <div className="App">
      learn react
      <Header onClick={handleClickHeader} />
      <button onClick={game.nextDay}>Next day</button>
      <p>current day: {game.currentDay}</p>
      {game.tableStatus !== null && <Game tableStatus={game.tableStatus} />}
    </div>
  );
}

export default App;
