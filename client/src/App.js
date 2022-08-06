import './App.css';
import AppRouter from './appRouter/AppRouter';
import { CalenderContext } from './context/CalenderContext';
import { UserContext } from './context/UserContext'
function App() {
  async function openIt() {
    let [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let file = await fileData.text()
    console.log(file);

  }
  return (
    <div className="App">
      <button onClick={openIt}>OPEN FILE</button>
      <UserContext>
        <CalenderContext>
          <AppRouter />
        </CalenderContext>
      </UserContext>
    </div>
  );
}

export default App;
