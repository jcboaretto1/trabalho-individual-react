import { BrowserRouter as Router } from "react-router-dom";
import { Rotas } from "./Routes/routes"; // ajuste o caminho conforme sua pasta
import Navbar from "./components/Navbar/navbar";

function App() {
  console.log("App está sendo renderizado");
  return (
    <Router>
      <div className="App">
        <Navbar /> {/*p o navb aparecer em tds as pag */}
        <main>
          <Rotas />
        </main>
      </div>
    </Router>
  );
}

export default App;
