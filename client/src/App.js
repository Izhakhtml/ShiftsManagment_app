import './App.css';
import AppRouter from './appRouter/AppRouter';
import { CalenderContext } from './context/CalenderContext';
import { UserContext } from './context/UserContext'
function App() {
  return (
    <div className="App">
      <UserContext>
        <CalenderContext>
          <AppRouter />
        </CalenderContext>
      </UserContext>
    </div>
  );
}

export default App;
