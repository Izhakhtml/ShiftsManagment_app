import './App.css';
import { ShiftContext } from './comtext/ShiftContext';
import AppRouter from './appRouter/AppRouter';
import GetTurns from './components/pages/getTurn/GetTurn';
import { CalenderContext } from './comtext/CalenderContext';
function App() {
  return (
    <div className="App">
      <CalenderContext>
      <GetTurns />
        <AppRouter />
      </CalenderContext>
    </div>
  );
}

export default App;
