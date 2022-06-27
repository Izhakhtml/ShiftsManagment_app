import './App.css';
import AppRouter from './appRouter/AppRouter';
import { CalenderContext } from './comtext/CalenderContext';
import Example from './loading/loading';

function App() {
  return (
    <div className="App">
      <CalenderContext>
        <AppRouter />
        {/* <Example type="balls" color="black" /> */}
      </CalenderContext>
    </div>
  );
}

export default App;
