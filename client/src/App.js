import './App.css';
import AppRouter from './appRouter/AppRouter';
import { CalenderContext } from './comtext/CalenderContext';
function App() {
  return (
    <div className="App">
      <CalenderContext>
        <AppRouter />
      </CalenderContext>
    </div>
  );
}

export default App;
