import "./App.css";
import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div className="App">
      <h2>Aplikasi Kontak</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
