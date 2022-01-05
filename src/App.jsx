import { useState } from "react";
import "./App.css";
import ListKontak from "./components/ListKontak";

function App() {
  const [nama, setNama] = useState("nizar");
  return (
    <div className="App">
      <h2>Aplikasi Kontak</h2>
      <ListKontak nama={nama} />
    </div>
  );
}

export default App;
